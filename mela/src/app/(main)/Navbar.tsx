// Bismillahirahmanirahim 

"use client"

import { validateRequest } from "@/auth";
import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";
import Link from "next/link";
import { redirect } from "next/navigation";





export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 px-5 py-3">
        <Link href="/" className="text-2xl font-bold text-primary">
          
          Ferhenga Mela
        </Link>



        <SearchField />
        <UserButton className="sm:ms-auto" />

      </div>
    </header>
  );
}
