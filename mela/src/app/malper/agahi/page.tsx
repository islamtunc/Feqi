// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim

"use client";
import React from "react";
import { Card, Row, Col, Alert } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ForYouFeed from "./parvekirin";

function page() {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column", // mobilde dikey hizalama
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
          <Card.Title style={{ fontSize: "1.5rem" }}>QURAN</Card.Title>
          <Row className="g-4">
            {/* Sol Kolon */}
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card style={{ textAlign: "center", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>Kelam a ALLAH (SWT)</Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    <br />
                    <br />
                    <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Sağ Kolon */}
            <Col xs={12} md={6} className="d-flex align-items-center">
              <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHK6Cg-mqzTlHMBRQWFplSGIdIjahV66PlNA&s"
              style={{
                  border: "5px solid white",
                  borderRadius: "10px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                }}
                alt="Quran "
                fluid
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* Alert ve ForYouFeed Alt Kısma Taşındı */}
     
    </div>
  );
}

export default page;
//ELHAMDULILLAH ELHAMDULILLAH ELHAMDULILLAH
//ELHAMDULILLAHIRABBILALEMIN