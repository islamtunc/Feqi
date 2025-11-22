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
  <footer className="bg-dark text-white pt-4">
    <div className="container text-center text-md-left">
      <div className="row">
        {/* About Section */}
        <div className="col-md-4 mt-md-0 mt-3">
          <h5 className="text-uppercase font-weight-bold">About Us</h5>
          <p>
            We are committed to providing the best services and resources for
            our users. Stay connected with us for updates and news.
          </p>
        </div>

        {/* Links Section */}
        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase font-weight-bold">Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#!" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="#!" className="text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/login" className="text-white">
                Administration
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase font-weight-bold">Follow Us</h5>
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
      © {new Date().getFullYear()} Copyright:{" "}
      <a href="https://yekazad.com" className="text-white">
        Yekazad
      </a>
    </div>
  </footer>
);

export default Footer;