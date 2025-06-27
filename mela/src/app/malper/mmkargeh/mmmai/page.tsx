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
          <Card.Title style={{ fontSize: "2rem", fontWeight: 700 }}>
            Coding with Artificial Intelligence: The Future of Software Development
          </Card.Title>
          <Row className="g-4">
            {/* Left Column */}
            <Col xs={12} md={7} className="mb-3 mb-md-0">
              <div style={{ textAlign: "left" }}>
                <h3 style={{ color: "#28a745", fontWeight: 600, marginTop: 24 }}>What is AI-Assisted Coding?</h3>
                <p>
                  AI-assisted coding leverages artificial intelligence tools to help developers write, review, and optimize code faster and more efficiently.
                </p>
                <h4 style={{ color: "#007bff", fontWeight: 500, marginTop: 20 }}>Key Topics in AI Coding</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    {
                      title: "1. Code Generation",
                      desc: "AI models like GitHub Copilot and ChatGPT can generate code snippets, functions, or even entire modules from natural language prompts."
                    },
                    {
                      title: "2. Code Review & Refactoring",
                      desc: "AI can analyze your code for bugs, suggest improvements, and automate refactoring for better readability and performance."
                    },
                    {
                      title: "3. Automated Testing",
                      desc: "AI tools can generate unit tests, detect edge cases, and help ensure your code is robust and reliable."
                    },
                    {
                      title: "4. Debugging Assistance",
                      desc: "AI-powered debuggers can identify errors, suggest fixes, and even explain complex bugs in simple language."
                    },
                    {
                      title: "5. Learning & Documentation",
                      desc: "AI can generate documentation, explain code, and provide learning resources tailored to your codebase."
                    },
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        background: "#e9f7ef",
                        marginBottom: 16,
                        padding: "14px 18px",
                        borderRadius: 10,
                        boxShadow: "0 1px 4px rgba(44, 62, 80, 0.06)"
                      }}
                    >
                      <strong style={{ color: "#28a745" }}>{item.title}</strong>
                      <div style={{ color: "#222", marginTop: 4 }}>{item.desc}</div>
                    </li>
                  ))}
                </ul>
                <h4 style={{ color: "#ff9800", fontWeight: 500, marginTop: 28 }}>The Future of AI in Coding</h4>
                <p>
                  As AI continues to evolve, it will become an even more integral part of the software development process, enabling developers to focus on creativity and problem-solving while automating repetitive tasks.
                </p>
                <p style={{ color: "#6c757d", fontSize: "1rem", marginTop: 18 }}>
                  <em>Stay tuned for more articles and tutorials on AI-powered coding!</em>
                </p>
              </div>
            </Col>
            {/* Right Column */}
            <Col xs={12} md={5} className="d-flex align-items-center">
              <Image
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80"
                style={{
                  border: "5px solid white",
                  borderRadius: "10px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                }}
                alt="AI Coding"
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