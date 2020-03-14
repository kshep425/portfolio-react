import {MDBFooter, MDBContainer} from 'mdbreact';
import React from 'react';

/**
 * @returns Footer the footer of my app
 */
function Footer() {
  return (
    <MDBFooter>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#resume"> KDS Dream Tech </a>
        </MDBContainer>
      </div>

    </MDBFooter>
  );
};

export default Footer;
