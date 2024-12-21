// Bismillahirahmanirahim 

"use client"

import { validateRequest } from "@/auth";
import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";
import Link from "next/link";
import { redirect } from "next/navigation";





import { useState } from "react";



const [mmkes, setmmkes] = useState(false)





const session= await validateRequest()

if (!session.user)setmmkes(true);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 px-5 py-3">
        <Link href="/" className="text-2xl font-bold text-primary">
          
          Müşterisi Burada
        </Link>


{



}
        <SearchField />

      </div>
    </header>
  );
}
