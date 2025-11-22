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
        <Navbar.Brand href="/malper">Rêya Feqî</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/malper">Malper</Nav.Link>

            <NavDropdown title="Perwerdehîya Îslamî" id="basic-nav-dropdown">
              <NavDropdown.Item href="/perwerdeh/kelam">Kelam</NavDropdown.Item>
              <NavDropdown.Item href="/perwerdeh/fikih">Fıkıh</NavDropdown.Item>
              <NavDropdown.Item href="/perwerdeh/aqide">Aqîde</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/perwerdeh/tarix">Tarîxê Îslamî</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Hadîs û Du‘a" id="basic-nav-dropdown">
              <NavDropdown.Item href="/perwerdeh/hadis">Hadîsên Navîn</NavDropdown.Item>
              <NavDropdown.Item href="/perwerdeh/dua">Du‘a</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Zekayê Sûnî (AI)" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/mmavahi/mmmai">Asistanê AI Îslamî Feqî</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/malper/mmmmm">Derbarê Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mmmnavbar;
//Subhanallah Subhanallah Subhanallahi Azim ve Bihamdihi
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin
// La ilahe illAllah Muhammden abduhu ve resuluhu
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbilalemin
