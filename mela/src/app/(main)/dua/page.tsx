// Bismillahirahmanirahim 
// ElHAMDULİLLAHİRABBULALEMİN
// Es-selatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// SubhanAllah, Elhamdulillah, Allahu Ekber
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// Subhanallah , Elhamdulillah, Allahu Ekber
// Hasbunallahu ve ni'mel vekil
// La havle ve la kuvvete illa billahil aliyyil azim

"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function AdminGuard({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/api/auth/me", { credentials: "include" });
        if (!res.ok) {
          router.push("/login");
          return;
        }
        const data = await res.json();
        const isAdmin =
          data?.role === "admin" || (Array.isArray(data?.roles) && data.roles.includes("admin"));
        if (isAdmin && mounted) setAllowed(true);
        else router.push("/login");
      } catch {
        router.push("/login");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [router]);

  if (loading) return <div className="p-6">Loading…</div>;
  if (!allowed) return null;
  return <>{children}</>;
}

function AdminSettings() {
  const [siteTitle, setSiteTitle] = useState("");
  const [maintenance, setMaintenance] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [admins, setAdmins] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/api/admin/settings");
        if (!res.ok) return;
        const json = await res.json();
        if (!mounted) return;
        setSiteTitle(json.siteTitle ?? "");
        setMaintenance(!!json.maintenance);
        setTheme(json.theme === "dark" ? "dark" : "light");
        setAdmins((json.admins || []).join("\n"));
      } catch (err) {
        /* ignore */
      }
    })();
    return () => { mounted = false; };
  }, []);

  async function save() {
    setStatus("Saving...");
    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "content-type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          siteTitle,
          maintenance,
          theme,
          admins: admins.split("\n").map((s) => s.trim()).filter(Boolean),
        }),
      });
      if (!res.ok) throw new Error("save_failed");
      setStatus("Saved");
      setTimeout(() => setStatus(null), 2000);
    } catch (err) {
      setStatus("Save failed");
    }
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Admin Settings</h1>

      <label className="block mb-3">
        <div className="text-sm text-muted-foreground mb-1">Site title</div>
        <input
          className="w-full border rounded px-3 py-2"
          value={siteTitle}
          onChange={(e) => setSiteTitle(e.target.value)}
        />
      </label>

      <label className="block mb-3">
        <div className="text-sm text-muted-foreground mb-1">Theme</div>
        <select
          className="w-full border rounded px-3 py-2"
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>

      <label className="flex items-center gap-3 mb-3">
        <input
          type="checkbox"
          checked={maintenance}
          onChange={(e) => setMaintenance(e.target.checked)}
        />
        <span className="text-sm">Maintenance mode</span>
      </label>

      <label className="block mb-4">
        <div className="text-sm text-muted-foreground mb-1">Admin emails (one per line)</div>
        <textarea
          className="w-full border rounded px-3 py-2 h-32"
          value={admins}
          onChange={(e) => setAdmins(e.target.value)}
        />
      </label>

      <div className="flex items-center gap-3">
        <button
          onClick={save}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
        {status && <span className="text-sm text-muted-foreground">{status}</span>}
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <AdminGuard>
      <AdminSettings />
    </AdminGuard>
  );
}

