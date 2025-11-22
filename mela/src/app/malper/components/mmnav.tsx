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
        <Navbar.Brand href="/malper">Yekazad Software Center</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/malper">Home</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/mmavahi/mmmweb">Web Sites</NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmavahi/mmmobile">
                
             Mobile Apps
              </NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmavahi/mmmdesktop">Desktop Apps</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/malper/mmavahi/mmmai">
                
                Artificial Intelligence
              </NavDropdown.Item>





              <NavDropdown.Item href="/malper/mpuzzle">Games/Puzzles</NavDropdown.Item>
                
            </NavDropdown>




            <NavDropdown title="Courses" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/mmhewcedari/mmmweb">Web</NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmhewcedari/mmmobile">
                
                
Mobile
              </NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmhewcedari/mmmai">Machine Learning</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/malper/mmhewcedari/mmmcp">
                
                Cross Platform Apps
              </NavDropdown.Item>
            </NavDropdown>



            <NavDropdown title="Blog " id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/mmkargeh/mmmweb">Web Development </NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmkargeh/mmmobile">
                Mobile Development
              </NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmkargeh/mmmai">Building AI apps</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/malper/mmkargeh/mmmcp">
                About Cross Platform Apps
              </NavDropdown.Item>
            </NavDropdown>












          


            <NavDropdown title="References" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/mmkedkar/mmmapp">Last projects</NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmkedkar/mmmothr">
                
                Code Examples
              </NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmkedkar/mmmad"> Advertising and other services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/malper/mmkedkar/mmmadvanced">
                Advanced
              </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="For Developers" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/mmwesayit">Courses</NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmwesayit/mmmdocs">
                Documantations
              </NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmwesayit/mmmopns">Contribute</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/malper/mmwesayit/mmmmm">
                Join to Yekazad
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/malper/mmmmm">About Us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mmmnavbar;