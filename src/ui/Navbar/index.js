import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './styles.css'

const CustomNavbar = () => (
  <Navbar bg="dark" expand="lg" variant="dark">
    <Navbar.Brand href="#home">Gustavo Codes</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto nav-bar-justify-content-end">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#tutorials">Tutorials</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default CustomNavbar
