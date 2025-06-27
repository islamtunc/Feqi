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
          <Card.Title style={{ fontSize: "1.5rem" }}>Machine Learning & AI Course with TensorFlow & Python</Card.Title>
          <Row className="g-4">
            {/* Left Column */}
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card style={{ textAlign: "center", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>Why Learn Machine Learning & AI?</Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    <br />
                    Machine Learning (ML) and Artificial Intelligence (AI) are transforming every industry. With{" "}
                    <strong>Python</strong> and <strong>TensorFlow</strong>, you can build smart systems, analyze data, and create intelligent applications.
                    <br />
                    <br />
                    <strong>What Will You Learn?</strong>
                    <br />
                    <ul style={{
                      textAlign: "left",
                      fontSize: "1rem",
                      margin: "0 auto",
                      maxWidth: 320,
                      padding: 0,
                      listStyle: "none"
                    }}>
                      {[
                        "Python basics for data science",
                        "Introduction to machine learning concepts",
                        "Building ML models with TensorFlow",
                        "Data preprocessing and visualization",
                        "Deep learning and neural networks",
                        "Real-world AI project examples",
                        "Deploying and evaluating ML models"
                      ].map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            background: "#e9f7ef",
                            marginBottom: 10,
                            padding: "10px 16px",
                            borderRadius: 8,
                            display: "flex",
                            alignItems: "center",
                            boxShadow: "0 1px 4px rgba(44, 62, 80, 0.06)"
                          }}
                        >
                          <span style={{
                            color: "#28a745",
                            fontWeight: "bold",
                            fontSize: 18,
                            marginRight: 10
                          }}>✔️</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <br />
                    <strong>Who Is This Course For?</strong>
                    <br />
                    Anyone interested in AI, data science, or building smart applications with Python and TensorFlow.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Right Column */}
            <Col xs={12} md={6} className="d-flex align-items-center">
              <Image
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80"
                style={{
                  border: "5px solid white",
                  borderRadius: "10px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                }}
                alt="Machine Learning & AI"
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