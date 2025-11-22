// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecmain
// Allahumme salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illallah, Allahu Ekber, Allahu Ekber, ve lillahi'l-hamd


import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { extractRouterConfig } from "uploadthing/server";
import { fileRouter } from "./api/uploadthing/core";
import "./globals.css";
import ReactQueryProvider from "./ReactQueryProvider";
import AssistantRoot from "./malper/assistant";

import Alert from 'react-bootstrap';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Rêya Feqî",
    default: " Rêya Feqî - Ber bi ronahîya dînê îslamê...",
  },
  description: " Yazılım ve teknoloji çözümleri sunan Yekazad Software Center, web uygulamaları, mobil uygulamalar ve yapay zeka çözümleri ile işinizi ileri taşıyor.",
  keywords: ["Yazılım", "İslam tunç", "Ağrı","web sitesi","uygulama","yapay zeka ","Android","iPhone","telefoncu","bilgisayarcı"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextSSRPlugin routerConfig={extractRouterConfig(fileRouter)} />
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
              {children}
             
          </ThemeProvider>
        </ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}


// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin

//La ilahe illAllah Muhammden abduhu ve resuluhu

// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin






export function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-16 bg-gray-800 text-white">
      <p className="text-sm">© {new Date().getFullYear()} Yekazad Software Center</p>
    </footer>
  );
  
}