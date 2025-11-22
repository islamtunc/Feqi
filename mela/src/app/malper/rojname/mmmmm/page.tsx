// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
"use client";

import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
export default function page() {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Card
        style={{
          opacity: 0.97,
          color: "black",
          textAlign: "center",
          maxWidth: "700px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Card.Body>
          <h3 style={{background:"#013220",color:"white",fontStyle:"italic",borderRadius:"15px"}}> <br/> In the Name of Allah, the Most Gracious, the Most Merciful<br />

            All Praise is due to Allah, the Lord of all the worlds
          <br />
            And Peace and Blessings be upon our Prophet Muhammad, his family, and companions <br /><br />
           </h3>
           <br />
          <Card.Title style={{ fontSize: "2rem", fontWeight: 700 }}>
          
            Welcome to Yekazad Software Center
          </Card.Title>
          <Row className="g-4">
            {/* Left Column */}
            <Col xs={12} md={7} className="mb-3 mb-md-0">
              <div style={{ textAlign: "left" }}>
                <h3 style={{ color: "#28a745", fontWeight: 600, marginTop: 24 }}>About Us</h3>
                <p>
                  Yekazad Software Center is dedicated to providing high-quality software solutions and services. Our team of experts specializes in web development, mobile app development, AI solutions, and more.
                </p>
                <h4 style={{ color: "#007bff", fontWeight: 500, marginTop: 20 }}>Our Services</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    {
                      title: "Web Development",
                      desc: "Building responsive and dynamic websites using the latest technologies."
                    },
                    {
                      title: "Mobile App Development",
                      desc: "Creating user-friendly mobile applications for Android and iOS platforms."
                    },
                    {
                      title: "AI Solutions",
                      desc: "Implementing AI-driven applications to enhance business processes."
                    },
                     {
                      title: "AI Solutions",
                      desc: "Implementing AI-driven applications to enhance business processes."
                    },
                    {
                      title: "Software Integration",
                      desc: "Integrating various software systems for seamless data flow and functionality."
                    },
                    {
                      title: "Cloud Services",
                      desc: "Offering cloud-based solutions for scalability and flexibility."
                    },
                    {
                      title: "Consulting & Support",
                      desc: "Providing expert advice and ongoing support for your software needs."
                    }
                  ].map((item, idx) => (
                    <li key={idx} style={{ marginBottom: 10 }}>
                      <strong>{item.title}</strong>: {item.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            {/* Right Column */}
            <Col xs={12} md={5}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  alignItems: "center", // ortala
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <br />
                <Image
                  src="/mmmmm.jpg"
                  alt="About Us"
                  fluid
                  style={{
                    borderRadius: 10,
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    maxHeight: "320px", // daha büyük yükseklik
                    maxWidth: "260px",  // daha geniş
                    objectFit: "cover",
                    objectPosition: "top",
                    margin: "0 auto",
                    display: "block",
                  }}
                />
                {/* Resume Card */}
                <Card
                  style={{
                    borderRadius: 12,
                    boxShadow: "0 2px 8px rgba(40,167,69,0.08)",
                    padding: 16,
                    background: "#fff",
                    width: "100%",
                    maxWidth: 260,
                    margin: "0 auto", // ekstra ortalama
                    display: "block",
                  }}
                >
                  <Card.Body style={{ padding: 12 }}>
                    <Card.Title style={{ fontSize: "1.2rem", color: "#28a745", fontWeight: 700 }}>
                    
                     İslam Tunç
                    </Card.Title>
                    <p style={{ fontSize: "1rem", color: "#6c757d", marginBottom: 12 }}>
                      Born in 1997 in Agirî/Gîhadîn/ Bozo.</p>
                    <div style={{ color: "#495057", fontWeight: 500, marginBottom: 6 }}>
                      Full Stack Developer and founder of Yekazad Software Center
                    </div>
                    <div style={{ fontSize: "0.98rem", color: "#333", marginBottom: 10 }}>
                      Experienced in web and mobile app development, AI solutions, and cloud technologies. Passionate about building scalable and user-friendly products.
                    </div>
                    <div style={{ fontSize: "0.95rem", color: "#6c757d" }}>
                      <br />
                      <strong>
                        <a
                          href="https://twitter.com/islamtun8"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#1da1f2",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            fontWeight: 600,
                          }}
                          title="Twitter"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="#1da1f2"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ marginRight: 4 }}
                          >
                            <path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 11.07 9.03a12.72 12.72 0 0 1-9.24-4.686 4.48 4.48 0 0 0 1.387 5.98A4.44 4.44 0 0 1 2 9.097v.057a4.48 4.48 0 0 0 3.59 4.393c-.4.11-.82.17-1.25.17-.307 0-.6-.03-.89-.085a4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.54a12.67 12.67 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.77 0-.19-.01-.38-.02-.57A9.22 9.22 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.7z"/>
                          </svg>
                          @islamtun8
                        </a>
                      </strong>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
     

    </div>
  );
}