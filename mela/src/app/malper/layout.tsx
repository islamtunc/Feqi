// Bismillahirahmanirahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah 
// Allahumme salli ala seyyidina Muhammedin 
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illallah, Allahu Ekber, Allahu Ekber, ve lillahi'l-hamd
import React from "react";
import { Alert } from "react-bootstrap";
import Mmmnavbar from "./components/mmnav";

import 'bootstrap/dist/css/bootstrap.css'
import Footer from "./components/mmbingeh";
import ContactForm from "./components/mmfrm";



export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Alert variant="success" style={{ width: "100%", textAlign: "center" }}>
        اَشْهَدُ اَنْ لاَ اِلٰهَ اِلاَّ اللّٰهُ وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ
      </Alert>
      <Mmmnavbar />

      {children}
     


      <ContactForm />
      <Footer />
    </div>
  );
}
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin