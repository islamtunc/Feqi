// Bismillahirrahmanirrahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah 
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah
// Bila Allah Azze ve Celle me ji sunneta Resulullah Muhammed (s.a.v) neqetine, amin rabbal alemin 
// Xeyni Allah tu Xweda tune
import React from "react";

const Footer = () => (
  <footer className="bg-green-700 text-white pt-4">
    <div className="container text-center text-md-left">
      <div className="row">
        {/* About Section */}
        <div className="col-md-4 mt-md-0 mt-3">
          <h5 className="text-uppercase font-weight-bold">Der barê me</h5>
          <p>
            Em hewl didin ku xizmeta herî baş û çavkaniyên nûjen bidin bikarhênerên me. Bi me re bimînin da ku nûve û agahiyên dawî bistînin.
          </p>
        </div>

        {/* Links Section */}
        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase font-weight-bold">Girêdanên Zû</h5>
          <ul className="list-unstyled">
            <li>
              <a href="/malper" className="text-white">
                Serûpel
              </a>
            </li>
            <li>
              <a href="/malper/derbarê" className="text-white">
                Der barê me
              </a>
            </li>
            <li>
              <a href="/malper/xizmet" className="text-white">
                Xizmet
              </a>
            </li>
            <li>
              <a href="/login" className="text-white">
                Rêveberî
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase font-weight-bold">Me bişopînin</h5>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="mx-2">
              <a href="https://facebook.com" className="text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://twitter.com" className="text-white">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://instagram.com" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://linkedin.com" className="text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="text-center py-3">
      © {new Date().getFullYear()} Maf: {" "}
      <a href="https://yekazad.com" className="text-white">
        Yekazad
      </a>
    </div>
  </footer>
);

export default Footer;