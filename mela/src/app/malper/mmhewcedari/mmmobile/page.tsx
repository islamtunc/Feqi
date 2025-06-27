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
          <Card.Title style={{ fontSize: "1.5rem" }}>Mobile Software Development Course</Card.Title>
          <Row className="g-4">
            {/* Left Column */}
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card style={{ textAlign: "center", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>Why Learn Mobile Software Development?</Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    <br />
                    Mobile software is everywhere! Learning to develop mobile applications with <strong>Java</strong> (Android) and <strong>React Native</strong> (cross-platform) will give you the skills to build modern, high-impact apps for millions of users.
                    <br />
                    <br />
                    <strong>What Will You Learn?</strong>
                    <br />
                    <ul style={{ textAlign: "left", fontSize: "1rem", margin: "0 auto", maxWidth: 320 }}>
                      <li>Mobile app fundamentals & architecture</li>
                      <li>Building native Android apps with <strong>Java</strong></li>
                      <li>Cross-platform development with <strong>React Native</strong> (v.latest)</li>
                      <li>Connecting to APIs and managing data</li>
                      <li>Authentication & secure storage</li>
                      <li>UI/UX best practices for mobile</li>
                      <li>Testing and publishing your apps</li>
                    </ul>
                    <br />
                    <strong>Who Is This Course For?</strong>
                    <br />
                    Anyone who wants to become a mobile app developer using Java and React Native, from beginners to experienced coders.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Right Column */}
            <Col xs={12} md={6} className="d-flex align-items-center">
              <Image
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=80"
                style={{
                  border: "5px solid white",
                  borderRadius: "10px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                }}
                alt="Mobile Phone"
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