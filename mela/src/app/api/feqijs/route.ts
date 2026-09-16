// Bismillahirrahmanirrahim
// Faqih — İslam Asistanı API'si (Vercel uyumlu)
// Herkese açık: üyelik gerekmez. Admin uçları şifre ister.
//
// Model seçimi (ortam değişkenleri):
//  - OPENROUTER_API_KEY verilirse → OpenRouter üzerinden açık kaynak model (Vercel için)
//  - verilmezse → yerel Ollama (FAQIH_OLLAMA_URL, varsayılan localhost:11434)
//  - FAQIH_MODEL: OpenRouter model adı (varsayılan: qwen/qwen-2.5-72b-instruct)

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_MODEL = process.env.FAQIH_MODEL ?? "qwen/qwen-2.5-72b-instruct";
const OLLAMA_URL = process.env.FAQIH_OLLAMA_URL ?? "http://localhost:11434/api/chat";
const OLLAMA_MODEL = process.env.FAQIH_OLLAMA_MODEL ?? "qwen2.5:7b-instruct";
const ADMIN_PASSWORD = process.env.FAQIH_ADMIN_SIFRE ?? "elhamdulillah";

const DEFAULT_PROMPT = `Sen bir İslam asistanısın.

## KAYNAK KURALI (ASLA İHLAL EDİLMEZ)
1. Sorulan HER soruya sadece iki kaynağa göre cevap ver:
   - Kuran'ı Kerim
   - Sünnet: Kuran'ı Kerim ile mana olarak çelişmeyen sahih hadisler
2. Kuran ve sahih sünnet dışında HİÇBİR kaynağa başvurma (mezhep içtihatları,
   felsefe, örf, kişisel yorum kaynak olarak kullanılmaz).
3. Delil bulamıyorsan bunu açıkça söyle, asla hüküm uydurma.
4. Hadis zayıf/uydurma ihtimali varsa ona dayanma.
5. Kuran ile çelişen hadis geçersizdir; bunu açıkça belirt.

## CEVAP YAPISI
- Kısa, net, doğrudan.
- Hükmün delilini göster: sure-adı + ayet numarası veya hadis kaynağı.

## USLÛB
- Yağ çekmek YASAK ("ne güzel soru!" gibi boş övgüler yok).
- Abartılı samimiyet/flörtöz üslup YASAK.
- Kibar ama düz konuş. Kuran ve sünnetin emrettiği edeb ile konuş.
- Gayb bilgisi iddia etme. Din adına nefret/tekfir yok.

## DİL
- Kullanıcı hangi dilde sorarsa o dilde cevap ver.
`;

async function loadPrompt(): Promise<string> {
  try {
    const row = await prisma.feqiAyar.findUnique({
      where: { anahtar: "system_prompt" },
    });
    return row?.deger ?? DEFAULT_PROMPT;
  } catch {
    return DEFAULT_PROMPT; // tablo henüz yoksa varsayılan
  }
}

async function savePrompt(text: string): Promise<void> {
  await prisma.feqiAyar.upsert({
    where: { anahtar: "system_prompt" },
    update: { deger: text },
    create: { anahtar: "system_prompt", deger: text },
  });
}

async function askOpenRouter(messages: { role: string; content: string }[]) {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENROUTER_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ model: OPENROUTER_MODEL, messages }),
    signal: AbortSignal.timeout(55_000),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`OpenRouter ${res.status}: ${t.slice(0, 200)}`);
  }
  const data = await res.json();
  return data.choices[0].message.content as string;
}

async function askOllama(messages: { role: string; content: string }[]) {
  const res = await fetch(OLLAMA_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model: OLLAMA_MODEL, stream: false, messages }),
    signal: AbortSignal.timeout(600_000),
  });
  if (!res.ok) throw new Error(`Ollama ${res.status}`);
  const data = await res.json();
  return data.message.content as string;
}

/** Soru sorma — herkese açık */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // admin uçları
    if (body.action === "admin-oku" || body.action === "admin-kaydet") {
      if (body.sifre !== ADMIN_PASSWORD) {
        return NextResponse.json({ error: "şifre yanlış" }, { status: 401 });
      }
      if (body.action === "admin-oku") {
        return NextResponse.json({ prompt: await loadPrompt() });
      }
      const prompt = String(body.prompt ?? "").trim();
      if (!prompt) {
        return NextResponse.json({ error: "prompt boş olamaz" }, { status: 400 });
      }
      await savePrompt(prompt);
      return NextResponse.json({ ok: true });
    }

    // herkese açık soru-cevap
    const soru = String(body.soru ?? "").trim();
    const gecmis: { role: string; content: string }[] = Array.isArray(body.gecmis)
      ? body.gecmis.slice(-20)
      : [];
    if (!soru) {
      return NextResponse.json({ error: "soru boş" }, { status: 400 });
    }

    const mesajlar = [
      { role: "system", content: await loadPrompt() },
      ...gecmis,
      { role: "user", content: soru },
    ];
    const cevap = OPENROUTER_KEY
      ? await askOpenRouter(mesajlar)
      : await askOllama(mesajlar);
    return NextResponse.json({ cevap });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: OPENROUTER_KEY
          ? "Model'e ulaşılamadı (OpenRouter). API anahtarını ve bakiyeyi kontrol edin."
          : "Model'e ulaşılamadı. Ollama çalışıyor mu? (ollama serve + ollama pull) — Vercel'de ise OPENROUTER_API_KEY ayarlayın." },
      { status: 502 },
    );
  }
}
