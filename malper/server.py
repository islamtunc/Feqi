# Bismillahir Rahmanir Rahim
# El Hamdu Lillahi Rabbul Alemin
# Esselatu vesselamu ala Muhammedin
#!/usr/bin/env python3
"""
Faqih — İslam Asistanı Web Sunucusu
Üyeliksiz, herkese açık. Admin paneli şifre ile korunur.
Çalıştır:  python3 server.py   →  http://localhost:8000
"""

import json
import os
import urllib.request
from http.server import HTTPServer, SimpleHTTPRequestHandler
from pathlib import Path

BASE = Path(__file__).parent
PROMPT_FILE = BASE / "system_prompt.txt"
ADMIN_PASSWORD = os.environ.get("FAQIH_ADMIN_SIFRE", "elhamdulillah")
MODEL = os.environ.get("FAQIH_MODEL", "qwen2.5:7b-instruct")
OLLAMA_URL = "http://localhost:11434/api/chat"
PORT = int(os.environ.get("FAQIH_PORT", "8000"))


def load_system_prompt() -> str:
    return PROMPT_FILE.read_text(encoding="utf-8")


def save_system_prompt(text: str) -> None:
    PROMPT_FILE.write_text(text, encoding="utf-8")


def ask_ollama(history: list) -> str:
    payload = json.dumps({
        "model": MODEL,
        "stream": False,
        "messages": [{"role": "system", "content": load_system_prompt()}] + history,
    }).encode("utf-8")
    req = urllib.request.Request(OLLAMA_URL, data=payload,
                                 headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=600) as resp:
        return json.loads(resp.read())["message"]["content"].strip()


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=str(BASE / "public"), **kw)

    def log_message(self, fmt, *args):
        pass  # sessiz log

    def _json(self, code, data):
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self):
        length = int(self.headers.get("Content-Length", 0))
        try:
            data = json.loads(self.rfile.read(length) or b"{}")
        except json.JSONDecodeError:
            return self._json(400, {"error": "geçersiz JSON"})

        if self.path == "/api/sor":
            history = data.get("gecmis", [])[-20:]  # son 20 mesajı tut
            soru = (data.get("soru") or "").strip()
            if not soru:
                return self._json(400, {"error": "soru boş"})
            try:
                cevap = ask_ollama(history + [{"role": "user", "content": soru}])
                return self._json(200, {"cevap": cevap})
            except Exception as e:
                return self._json(502, {"error": f"Model'e ulaşılamadı: {e}"})

        if self.path == "/api/admin/kaydet":
            if data.get("sifre") != ADMIN_PASSWORD:
                return self._json(401, {"error": "şifre yanlış"})
            save_system_prompt(data.get("prompt", ""))
            return self._json(200, {"ok": True})

        if self.path == "/api/admin/oku":
            if data.get("sifre") != ADMIN_PASSWORD:
                return self._json(401, {"error": "şifre yanlış"})
            return self._json(200, {"prompt": load_system_prompt()})

        return self._json(404, {"error": "bilinmeyen uç"})


if __name__ == "__main__":
    if not PROMPT_FILE.exists():
        PROMPT_FILE.write_text(
            "Sen sadece Kuran'ı Kerim ve Kuran ile mana olarak çelişmeyen sahih "
            "hadislere göre cevap veren bir İslam asistanısın. Başka kaynak kullanma, "
            "delilsiz hüküm verme, kullanıcıya yağ çekme.\n", encoding="utf-8")
    print(f"Faqih İslam Asistanı → http://localhost:{PORT}")
    print(f"Admin paneli         → http://localhost:{PORT}/admin.html  (şifre: FAQIH_ADMIN_SIFRE ortam değişkeni, varsayılan: elhamdulillah)")
    HTTPServer(("", PORT), Handler).serve_forever()
