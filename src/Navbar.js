// Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './logoKdsNav.png';

/**
 * @returns {div} Navbar should contain, logo, KDS Dream Tech, and
 *  links to Resume and Projects
 */
function NavbarDiv() {
  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Navbar.Brand href='/'>
          <img src={logo} alt="logo" height='30px'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsivenavbar-nav'></Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#resume'>Resume</Nav.Link>
            <Nav.Link href='#portfolio'>Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarDiv;
