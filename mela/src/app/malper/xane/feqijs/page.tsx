// Bismillahirrahmanirrahim
// El Hamdu Lillahi Rabbul Alemin
// Faqih — İslam Asistanı (herkese açık, üyeliksiz)
"use client";

import React, { useEffect, useRef, useState } from "react";

type Mesaj = { role: "user" | "assistant"; content: string };

export default function FeqijsPage() {
  const [gecmis, setGecmis] = useState<Mesaj[]>([]);
  const [girdi, setGirdi] = useState("");
  const [yukleniyor, setYukleniyor] = useState(false);
  const sonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sonRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [gecmis, yukleniyor]);

  async function sor(e: React.FormEvent) {
    e.preventDefault();
    const soru = girdi.trim();
    if (!soru || yukleniyor) return;
    setGirdi("");
    setYukleniyor(true);
    setGecmis((g) => [...g, { role: "user", content: soru }]);

    try {
      const res = await fetch("/api/feqijs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ soru, gecmis: gecmis.slice(-20) }),
      });
      const data = await res.json();
      setGecmis((g) => [
        ...g,
        {
          role: "assistant",
          content: data.cevap ?? `Hata: ${data.error ?? "bilinmeyen"}`,
        },
      ]);
    } catch {
      setGecmis((g) => [
        ...g,
        { role: "assistant", content: "Sunucuya ulaşılamadı." },
      ]);
    } finally {
      setYukleniyor(false);
    }
  }

  return (
    <div className="mx-auto flex h-[calc(100vh-8rem)] w-full max-w-3xl flex-col rounded-2xl bg-card shadow-lg">
      <div className="border-b bg-[#123524] p-4 text-center text-white rounded-t-2xl">
        <h1 className="text-lg font-bold text-[#d4af37]">
          ﷽ Asistanê AI Îslamî — Faqî
        </h1>
        <p className="mt-1 text-xs text-[#9fbf9f]">
          Tenê li gorê Qur'ana Pîroz û hedîsên sahih ên ku bi wateya Qur'anê
          re nakokin bersiv dide. Endamtî nînin — ji her kesî re vekirî ye.
        </p>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {gecmis.length === 0 && (
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Pirsînxwe, pirsya xwe binivîse...
          </p>
        )}
        {gecmis.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2 text-sm leading-relaxed ${m.role === "user"
                  ? "rounded-br-sm bg-primary text-primary-foreground"
                  : "rounded-bl-sm border bg-muted"
                }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {yukleniyor && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-sm border bg-muted px-4 py-2 text-sm italic text-muted-foreground">
              Difikirî / Düşünüyorum...
            </div>
          </div>
        )}
        <div ref={sonRef} />
      </div>

      <form onSubmit={sor} className="flex gap-2 border-t p-3">
        <input
          value={girdi}
          onChange={(e) => setGirdi(e.target.value)}
          placeholder="Pirsiya xwe binivîse / Sorunuzu yazın..."
          className="flex-1 rounded-full border bg-background px-4 py-2 text-sm outline-none focus:border-[#d4af37]"
          autoFocus
        />
        <button
          type="submit"
          disabled={yukleniyor || !girdi.trim()}
          className="rounded-full bg-[#d4af37] px-6 py-2 text-sm font-bold text-[#0d1f12] disabled:opacity-50"
        >
          Şande / Gönder
        </button>
      </form>
    </div>
  );
}
