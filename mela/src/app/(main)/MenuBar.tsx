// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulina Muhammedin 
// Suphanallah, Elhamdulillah, Allahu Ekber
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah

import { validateRequest } from "@/auth";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { Bookmark, Home, Mail } from "lucide-react";
import Link from "next/link";

interface MenuBarProps {
  className?: string;
}

export default async function MenuBar({ className }: MenuBarProps) {
  const { user } = await validateRequest();

  if (!user) return null;

  // Mesaj sayısını çek (safe: don't reference non-existent model)
  let messageCount = 0;
  try {
    const clientAny = prisma as any;
    if (clientAny.mmmpeyam && typeof clientAny.mmmpeyam.count === "function") {
      messageCount = await clientAny.mmmpeyam.count();
    } else if (clientAny.peyam && typeof clientAny.peyam.count === "function") {
      messageCount = await clientAny.peyam.count();
    } else if (clientAny.message && typeof clientAny.message.count === "function") {
      messageCount = await clientAny.message.count();
    } else {
      // fallback: no message model available
      messageCount = 0;
    }
  } catch {}

  return (
    <div className={className}>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Malpera Serekî"
        asChild
      >
        <Link href="/">
          <Home />
          <span className="hidden lg:inline">Malpera Serekî</span>
        </Link>
    
      </Button>

      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Ecibandî"
        asChild
      >
        <Link href="/bookmarks">
          <Bookmark />
          <span className="hidden lg:inline">Ecibandî</span>
        </Link>
      </Button>

      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Peyam"
        asChild
      >
        <Link href="/peyam" className="relative flex items-center gap-3">
          <Mail />
          <span className="hidden lg:inline">Peyam</span>
          {messageCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: 2,
                right: -8,
                background: "#dc3545",
                color: "#fff",
                borderRadius: "50%",
                fontSize: "0.75rem",
                minWidth: 20,
                height: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                padding: "0 6px",
                border: "2px solid #fff",
                zIndex: 1,
              }}
            >
              {messageCount}
            </span>
          )}
        </Link>
      </Button>
    </div>
  );
}
