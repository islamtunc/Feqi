// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim

"use client";
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";


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
          <Card.Title style={{ fontSize: "1.5rem" }}>Cross-Platform Mobile Development Course</Card.Title>
          <Row className="g-4">
            {/* Sol Kolon */}
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card style={{ textAlign: "center", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>Why Learn Cross-Platform Development?</Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    <br />
                    Cross-platform mobile development allows you to build apps for both iOS and Android using a single codebase. <strong>React Native</strong> is the industry standard for building high-performance, native-feeling apps efficiently.
                    <br />
                    <br />
                    <strong>What Will You Learn?</strong>
                    <br />
                    <ul style={{ textAlign: "left", fontSize: "1rem", margin: "0 auto", maxWidth: 320 }}>
                      <li>React Native fundamentals & setup</li>
                      <li>Building UI components for mobile</li>
                      <li>Navigation and routing in React Native</li>
                      <li>State management (Context, Redux, etc.)</li>
                      <li>Connecting to APIs and data storage</li>
                      <li>Deploying to App Store & Google Play</li>
                      <li>Best practices for cross-platform apps</li>
                    </ul>
                    <br />
                    <strong>Who Is This Course For?</strong>
                    <br />
                    Anyone who wants to build mobile apps for both iOS and Android using React Native, from beginners to experienced developers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Sağ Kolon */}
            <Col xs={12} md={6} className="d-flex align-items-center">
              <Image
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=700&q=80"
                style={{
                  border: "5px solid white",
                  borderRadius: "10px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                }}
                alt="React Native Cross-Platform Development"
                fluid
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default page;