// Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
/**
 * @returns {div} Navbar should contain, logo, KDS Dream Tech, and
 *  links to Resume and Projects
 */
function NavbarDiv() {
  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Navbar.Brand href='/'>
          <img
            src='./logo-kds-nav.png'
            // width='30'
            // height='30'
            alt='KDS Dream Tech Logo'
            className='d-inline-block align-top'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsivenavbar-nav'></Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/Resume'>Resume</Nav.Link>
            <Nav.Link href='/Portfolio'>Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarDiv;
