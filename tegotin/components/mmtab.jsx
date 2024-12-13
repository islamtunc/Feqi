// Bismillahirahmanirahim



import Nav from 'react-bootstrap/Nav';

function Mmtab() {
  return (
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Mmtab;

import React from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

export  function Mmger() {
  return (
    <MDBInputGroup>
      <MDBInput placeholder='Bigere'  />
      <Button>

 <MDBIcon icon='search' />Lêgerîn
      </Button>
    </MDBInputGroup>
  );
}