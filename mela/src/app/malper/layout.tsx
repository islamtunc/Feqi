// Bismillahirahmanirahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecmain
// Allahumme salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illallah, Allahu Ekber, Allahu Ekber, ve lillahi'l-hamd
import React from "react";
import { Alert } from "react-bootstrap";
import Mmmnavbar from "./components/mmnav";

import 'bootstrap/dist/css/bootstrap.css'
import Footer from "./components/mmbingeh";
import AssistantRoot from "./assistant";
import ContactForm from "./components/mmfrm";



export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Alert variant="warning">Supports Palastina and Rojava!</Alert>
      <Mmmnavbar />

      {children}
      <AssistantRoot />

      {/* WhatsApp Button - Right Bottom */}
      <a
        href="https://wa.me/905549765692"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          right: 24,
          bottom: 24,
          zIndex: 1000,
          background: "#25D366",
          color: "#fff",
          borderRadius: "50%",
          width: 56,
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(37,211,102,0.18)",
          fontSize: 28,
          textDecoration: "none",
        }}
        title="WhatsApp"
      >
        <span role="img" aria-label="WhatsApp">🟢</span>
      </a>

      {/* Phone Button - Left Bottom */}
      <a
        href="tel:+905549765692"
        style={{
          position: "fixed",
          left: 24,
          bottom: 24,
          zIndex: 1000,
          background: "#28a745",
          color: "#fff",
          borderRadius: "50%",
          width: 56,
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(40,167,69,0.18)",
          fontSize: 28,
          textDecoration: "none",
        }}
        title="Call us"
      >
        <span role="img" aria-label="Phone">📞</span>
      </a>

      <ContactForm />
      <Footer />
    </div>
  );
}
