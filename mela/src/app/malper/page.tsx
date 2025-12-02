// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber

import React from 'react'
import ForYouFeed from './yekem'
import Duyem from './duyem'

function page() {
  return (
    <>
      <main className="flex-grow container mx-auto py-8">
        
        {/* Beşa Perwerdehîya Îslamî */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Karta 1: */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">QURAN-İ KERİM</h3>
            <p className="text-gray-600">
              Quran-î Kerîm pirtûka pîroz a Îslamê ye Allah Azze Ve Celle ji me re şandiye. Li vir hûn dikarin  derbarê peygamberan, îman û rêberiyên jiyanê hîn bibin .
            </p>
            <a href="/malper/agahi" className="text-blue-500 hover:underline mt-4 block">
              Zêdetir Bibînin
            </a>
          </div>
           {/* Karta 1: Kelam */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Hedis</h3>
            <p className="text-gray-600">
              Hedis ramanên û gotinên peygamberê me Muhammed (s.a.v) ne. Li vir hûn dikarin zanînên derbarê sunneta peygamberê me hîn bibin.
            </p>
            <a href="/malper/hedis" className="text-blue-500 hover:underline mt-4 block">
              Zêdetir Bibînin
            </a>
          </div>

          {/* Karta 2: Fıkıh */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Fıkıh</h3>
            <p className="text-gray-600">
              Fıkıh ramanên Îslamî yên li ser ibadet, muamelat û ahlakiye. Hûn dikarin qanûnên şerîat hîn bibin.
            </p>
            <a href="/perwerdeh/fikih" className="text-blue-500 hover:underline mt-4 block">
              Zêdetir Bibînin
            </a>
          </div>

          {/* Karta 3: Tarîxê Îslamî */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Kelam</h3>
            <p className="text-gray-600">
              Kelam ilimê aqîdeyê ye ku di derbarê baweriyên eslê Îslamê de axivî. Li vir hûn dikarin derbarê tawhîd û îman hîn bibin.
            </p>
            <a href="/malper/kelam" className="text-blue-500 hover:underline mt-4 block">
              Zêdetir Bibînin
            </a>
          </div>
            {/* Karta 3: Tarîxê Îslamî */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Dirok a Îslamî</h3>
            <p className="text-gray-600">
              Tarîxê Îslamî hûn re dide zanînê derbarê peygamberan, sahabeyan û derbasbûna Îslamê di dîroka xwe de.
            </p>
            <a href="/malper/dirok" className="text-blue-500 hover:underline mt-4 block">
              Zêdetir Bibînin
            </a>
          </div>
        </div>
      
        {/* Beşa Nûvekirinên Perwerdehî */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Nûvekirinên Perwerdehî</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Maddelerên nû li ser aqîde û tawhîd hatine zêdekirin.</li>
            <li>Fıkıh – Rêbera ibadetên sala nû.</li>
            <li>Tarîx – Peygamberan û sahabeyan.</li>
          </ul>
        </div>

        <ForYouFeed/>
        <Duyem/>

      </main>
    </>
  )
}

export default page
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin