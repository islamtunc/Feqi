// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// La havle ve la kuvvete illa billahil aliyyil azim
// Allah u Ekber
// La ilahe illallah Muhammedur Resulullah
// Subhanallah, Elhamdulillah, Allahu Ekber, La ilahe illallah
// Estağfirulllah El-Azim
"use client"
import React from "react";
import { Alert, Container, Row, Col, Card, Button } from "react-bootstrap";

function AdminPage() {
  return (
    <Container fluid style={{ background: "#f8f9fa", minHeight: "100vh", padding: "20px" }}>
     

      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Qur'an -a Pîroz</Card.Title>
              <Card.Text> </Card.Text>
              <Button variant="primary" href="/agahi">
                Derbasî edîtorê be
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Hedîs</Card.Title>
              <Card.Text>Hedîsên Hz Mihemed sav.</Card.Text>
              <Button variant="primary" href="/hedis">
                Here
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Fiqih</Card.Title>
              <Card.Text>Manage or view the services page.</Card.Text>
              <Button variant="primary" href="/fiqih">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Kelam</Card.Title>
              <Card.Text>Manage or view the references page.</Card.Text>
              <Button variant="primary" href="/kelam">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Dîrok</Card.Title>
              <Card.Text>Manage or view the developer resources page.</Card.Text>
              <Button variant="primary" href="/dirok">
                Go
              </Button>
            </Card.Body>
              <Card.Body>
              <Card.Title>Dîrok</Card.Title>
              <Card.Text>Manage or view the developer resources page.</Card.Text>
              <Button variant="primary" href="/dirok/yekem">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Site Management</Card.Title>
              <Card.Text>Manage or view the site.</Card.Text>
              <Button variant="primary" href="/malper">
                Go
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPage;