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
          <Card.Title style={{ fontSize: "1.5rem" }}>Web Development with TypeScript & Next.js</Card.Title>
          <Row className="g-4">
            {/* Left Column */}
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card style={{ textAlign: "center", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>Modern Web Applications</Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    <br />
                    Building web applications with <strong>TypeScript</strong> and <strong>Next.js</strong> enables you to create robust, scalable, and maintainable projects. TypeScript adds type safety and better tooling, while Next.js provides server-side rendering, API routes, and a great developer experience.
                    <br />
                    <br />
                    <strong>Key Topics & Features</strong>
                    <ul style={{
                      textAlign: "left",
                      fontSize: "1rem",
                      margin: "0 auto",
                      maxWidth: 320,
                      padding: 0,
                      listStyle: "none"
                    }}>
                      {[
                        "TypeScript fundamentals and static typing",
                        "Next.js routing and page structure",
                        "Server-side rendering (SSR) and static site generation (SSG)",
                        "API routes and data fetching",
                        "Authentication and authorization",
                        "Component-based UI development",
                        "Deployment and optimization"
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
                            color: "#0070f3",
                            fontWeight: "bold",
                            fontSize: 18,
                            marginRight: 10
                          }}>★</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <br />
                    <strong>Why Choose TypeScript & Next.js?</strong>
                    <br />
                    These technologies are trusted by top companies for building production-grade web apps. They help you write safer code, ship faster, and deliver better user experiences.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Right Column */}
            <Col xs={12} md={6} className="d-flex align-items-center">
              <Image
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=80"
                style={{
                  border: "5px solid white",
                  borderRadius: "10px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                }}
                alt="Web Development with TypeScript and Next.js"
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