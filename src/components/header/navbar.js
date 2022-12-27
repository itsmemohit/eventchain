// import React from "react";
// import {
//   Nav,
//   Navlink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from "./navbarComponent";

// const Navbar = () => {
//   return (
//     <>
//       <Nav>
//         <Navlink to="/">
//           <img src={require("../../images/logo-removebg.png")} alt="logo" />
//         </Navlink>
//         <Bars />
//         <NavMenu>
//           <Navlink tp="/about">About</Navlink>
//           <Navlink to="/services">Services</Navlink>
//           <Navlink to="/contact-us">Contact Us</Navlink>
//           {/* Second Nav */}
//           <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
//         </NavMenu>
//         {/* <NavBtn>
//           <NavBtnLink to="/signin">Sign In</NavBtnLink>
//         </NavBtn> */}
//       </Nav>
//     </>
//   );
// };

// export default Navbar;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/logo-removebgsmall.png"
            width="110"
            height="50"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">We're Hiring</Nav.Link>
            <Nav.Link href="#features">How it works?</Nav.Link>
            <Nav.Link href="#pricing">Join Community</Nav.Link>
          </Nav>
          <Button variant="outline-light">Book a Demo</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
