import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

export default function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top" className="nav-blur mb-4 slideDown-animation">
      <Container>
        <Navbar.Brand href="#home" className="fw-bolder brand-gradient">
          Fred
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto" >
            <Nav.Link href="#about" className="fw-semibold animate-nav">About</Nav.Link>
            <Nav.Link href="#skills" className="fw-semibold animate-nav">Skills</Nav.Link>
            <Nav.Link href="#projects" className="fw-semibold animate-nav">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
