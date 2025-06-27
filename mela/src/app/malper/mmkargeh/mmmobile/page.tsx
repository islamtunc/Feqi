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
          <Card.Title style={{ fontSize: "1.5rem" }}>
            Mobile App Development: Java (Android Studio) & React Native
          </Card.Title>
          <Row className="g-4">
            {/* Left Column */}
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card style={{ textAlign: "center", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>
                    Native & Cross-Platform Mobile Development
                  </Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    <br />
                    <strong>Java & Android Studio:</strong> Build high-performance
                    native Android apps using Java and the official Android Studio
                    IDE. Learn about activities, layouts, Android SDK, and
                    publishing to Google Play.
                    <br />
                    <br />
                    <strong>React Native:</strong> Create cross-platform mobile apps
                    for both iOS and Android with a single codebase. Use
                    JavaScript/TypeScript and React Native to deliver native-like
                    experiences and publish to both the App Store and Google Play.
                    <br />
                    <br />
                    <strong>Key Topics</strong>
                    <ul
                      style={{
                        textAlign: "left",
                        fontSize: "1rem",
                        margin: "0 auto",
                        maxWidth: 320,
                        padding: 0,
                        listStyle: "none",
                      }}
                    >
                      {(
                        [
                          "Android Studio setup and project structure",
                          "Java fundamentals for Android",
                          "UI design and navigation in Android",
                          "React Native setup and CLI",
                          "Building reusable components",
                          "Accessing device features (camera, GPS, etc.)",
                          "Publishing apps to Google Play and App Store",
                        ] as const
                      ).map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            background: "#e9f7ef",
                            marginBottom: 10,
                            padding: "10px 16px",
                            borderRadius: 8,
                            display: "flex",
                            alignItems: "center",
                            boxShadow: "0 1px 4px rgba(44, 62, 80, 0.06)",
                          }}
                        >
                          <span
                            style={{
                              color: "#28a745",
                              fontWeight: "bold",
                              fontSize: 18,
                              marginRight: 10,
                            }}
                          >
                            📱
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <br />
                    <strong>Why Learn Both?</strong>
                    <br />
                    Mastering both native (Java/Android Studio) and cross-platform
                    (React Native) development gives you flexibility and a
                    competitive edge in the mobile app industry.
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
                alt="Mobile App Development"
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