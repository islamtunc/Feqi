# Bismillahir Rahmanir Rahim
# El Hamdu Lillahi Rabbul Alemin
# Esselatu vesselamu ala Muhammedin
#!/usr/bin/env python3
"""
Faqih — İslam Asistanı
Açık kaynak, tamamen yerel çalışan (Ollama) İslam asistanı.
Kaynak kuralı: Sadece Kuran'ı Kerim ve Kuran ile mana olarak çelişmeyen sahih hadisler.
"""

import json
import sys
import urllib.request
from pathlib import Path

OLLAMA_URL = "http://localhost:11434/api/chat"
# Açık kaynak modeller: qwen2.5, llama3.1, gemma2, mistral...
MODEL = "qwen2.5:7b-instruct"
PROMPT_FILE = Path(__file__).parent / "system_prompt.txt"


def load_system_prompt() -> str:
    return PROMPT_FILE.read_text(encoding="utf-8")


def ask_ollama(system_prompt: str, history: list, user_msg: str) -> str:
    payload = json.dumps({
        "model": MODEL,
        "stream": False,
        "messages": [{"role": "system", "content": system_prompt}]
        + history
        + [{"role": "user", "content": user_msg}],
    }).encode("utf-8")

    req = urllib.request.Request(
        OLLAMA_URL, data=payload, headers={"Content-Type": "application/json"}
    )
    with urllib.request.urlopen(req, timeout=300) as resp:
        data = json.loads(resp.read())
    return data["message"]["content"].strip()


def main():
    if len(sys.argv) > 1:  # tek soru modu: python islam_asistani.py "soru"
        questions = [" ".join(sys.argv[1:])]
        loop = False
    else:  # sohbet modu
        questions, loop = [], True

    system_prompt = load_system_prompt()
    history = []

    if loop:
        print("Faqih — İslam Asistanı (kaynak: sadece Kuran ve sahih sünnet)")
        print("Çıkmak için: 'çık' yazın.\n")

    while True:
        if questions:
            user_msg = questions.pop(0)
            print(f"Siz: {user_msg}")
        else:
            try:
                user_msg = input("Siz: ").strip()
            except (EOFError, KeyboardInterrupt):
                break
            if not user_msg:
                continue
            if user_msg.lower() in ("çık", "cik", "exit", "quit"):
                break

        try:
            answer = ask_ollama(system_prompt, history, user_msg)
        except Exception as e:
            print(f"[Hata: {e}]")
            print("Ollama çalışıyor mu?  ->  ollama serve")
            print(f"Model kurulu mu?     ->  ollama pull {MODEL}\n")
            if not loop:
                sys.exit(1)
            continue

        print(f"\nFaqih: {answer}\n")
        history.append({"role": "user", "content": user_msg})
        history.append({"role": "assistant", "content": answer})

        if not questions:
            if not loop:
                break


if __name__ == "__main__":
    main()
