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
          <Card.Title style={{ fontSize: "1.5rem" }}>Web Development Course with Next.js</Card.Title>
          <Row className="g-4">
            {/* Left Column */}
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card style={{ textAlign: "center", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>Why Learn Web Development with Next.js?</Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    <br />
                    Web development is one of the most valuable skills in the digital age. With{" "}
                    <strong>Next.js</strong>, you can build fast, scalable, and SEO-friendly web applications using the power of React.
                    <br />
                    <br />
                    <strong>What Will You Learn?</strong>
                    <br />
                    <ul style={{ textAlign: "left", fontSize: "1rem", margin: "0 auto", maxWidth: 320 }}>
                      <li>Modern JavaScript & React fundamentals</li>
                      <li>Next.js pages, routing, and layouts</li>
                      <li>Server-side rendering (SSR) & static site generation (SSG)</li>
                      <li>API routes and data fetching</li>
                      <li>Authentication and authorization</li>
                      <li>Styling with CSS, Sass, and Tailwind</li>
                      <li>Deployment and best practices</li>
                    </ul>
                    <br />
                    <strong>Who Is This Course For?</strong>
                    <br />
                    Anyone who wants to become a professional web developer using the latest technologies, from beginners to experienced coders.
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
                alt="Web Development with Next.js"
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