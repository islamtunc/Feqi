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
            
            <Nav.Link href="/malper/agahi">Qur'an a Pîroz</Nav.Link>

            <NavDropdown title="Zanistên Îslamî" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/kelam">Kelam</NavDropdown.Item>
              <NavDropdown.Item href="malper/fiqih">Fıkıh</NavDropdown.Item>
              <NavDropdown.Item href="/malper/aqide">Aqîde</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/malper/dirok">Dîroka Îslamî</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Hadîs û Du‘a" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/hedis">Hadîsên Navîn</NavDropdown.Item>
              <NavDropdown.Item href="/malper/dua">Du‘a</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Pirtûkxane" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/xane">Alim û pirtukên wan</NavDropdown.Item>
           
                         <NavDropdown.Item href="/malper/xane/feqijs">Asistanê AI Îslamî Feqî</NavDropdown.Item>

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
