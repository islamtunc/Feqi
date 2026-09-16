// Bismillahirrahmanirrahim
// El Hamdu Lillahi Rabbul Alemin
// Faqih — Ana Admin Paneli (main tarafında, oturum korumalı)
// Kural setini (system prompt) okur ve düzenler.
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, Card, CardBody, CardTitle } from "react-bootstrap";

export default function FeqijsAdminPage() {
  const [sifre, setSifre] = useState("");
  const [prompt, setPrompt] = useState("");
  const [girdi, setGirdi] = useState(false);
  const [durum, setDurum] = useState<{ ok: boolean; msg: string } | null>(null);
  const [yukleniyor, setYukleniyor] = useState(false);

  async function cagir(action: "admin-oku" | "admin-kaydet") {
    setYukleniyor(true);
    setDurum(null);
    try {
      const res = await fetch("/api/feqijs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          action === "admin-oku"
            ? { action, sifre }
            : { action, sifre, prompt },
        ),
      });
      const data = await res.json();
      if (!res.ok) {
        setDurum({ ok: false, msg: data.error ?? "hata" });
        if (action === "admin-oku") setGirdi(false);
        return;
      }
      if (action === "admin-oku") {
        setPrompt(data.prompt);
        setGirdi(true);
        setDurum({ ok: true, msg: "Yüklendi / Hatkirî" });
      } else {
        setDurum({ ok: true, msg: "✓ Kaydedildi — kurallar güncellendi." });
      }
    } catch {
      setDurum({ ok: false, msg: "Sunucuya ulaşılamadı." });
    } finally {
      setYukleniyor(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-4xl p-4">
      <Card>
        <CardBody>
          <CardTitle as="h1" className="mb-3">
            ﷽ Faqî — Asistanê AI Yönetimi
          </CardTitle>

          {!girdi ? (
            <div className="space-y-3">
              <p className="text-sm">
                Admin şifresini girin (varsayılan ortam değişkeni:{" "}
                <code>FAQIH_ADMIN_SIFRE</code>):
              </p>
              <Input
                type="password"
                value={sifre}
                onChange={(e) => setSifre(e.target.value)}
                placeholder="şifre / şîfre"
                onKeyDown={(e) => e.key === "Enter" && cagir("admin-oku")}
              />
              <Button onClick={() => cagir("admin-oku")} disabled={yukleniyor || !sifre}>
                {yukleniyor ? "..." : "Giriş"}
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Aşağıdaki metin asistanın tüm kurallarıdır. Yalnızca Kuran ve
                Kuran ile çelişmeyen sahih hadis kuralını koruyarak düzenleyin.
              </p>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[480px] w-full rounded-lg border bg-card p-3 font-mono text-sm"
              />
              <div className="flex gap-2">
                <Button onClick={() => cagir("admin-kaydet")} disabled={yukleniyor}>
                  Kaydet
                </Button>
                <Button variant="secondary" onClick={() => cagir("admin-oku")} disabled={yukleniyor}>
                  Yenile
                </Button>
              </div>
            </div>
          )}

          {durum && (
            <Alert
              variant={durum.ok ? "success" : "danger"}
              className="mt-3"
              style={{ fontSize: "0.9rem" }}
            >
              {durum.msg}
            </Alert>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
