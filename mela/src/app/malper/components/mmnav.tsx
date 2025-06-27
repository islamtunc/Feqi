// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Mmmnavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/malper">Feqî – Jîrîya Sînî</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/malper">Serûpel</Nav.Link>
            <Nav.Link href="/malper/sohbet">Sohbet</Nav.Link>
            <Nav.Link href="/malper/derbarê">Der barê Asîstanê</Nav.Link>
            <Nav.Link href="/malper/teknolojî">Teknolojî</Nav.Link>
            <Nav.Link href="/malper/peyvên-zêde">Peyvên Zêde</Nav.Link>
            <Nav.Link href="/malper/alîkarî">Alîkarî</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mmmnavbar;