import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import ejLogo from '../assets/El-Logos.png'

function Headers() {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href={'/'} style={{fontWeight:'bold'}}> <img src={ejLogo} style={{width:'40px'}}/>Easy Learn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={'/'}>Home</Nav.Link>
            <NavDropdown title="All Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Web Design</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Graphic Design</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">3D & Animation</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item > <Link to={'/allcourses'}> All courses </Link> </NavDropdown.Item>
            </NavDropdown>
            <Link to={'/login'} style={{ textDecoration: 'none' }} > <Button style={{ marginLeft: '450px', fontSize: '12px',borderRadius:'46%',paddingLeft:'15px',paddingRight:'15px',paddingBottom:'4px',paddingTop:'4px',border: '2px',backgroundColor:'#00ace6' }}>Login</Button></Link>
             <Link to={'/register'} style={{ textDecoration: 'none' }} ><Button style={{ marginLeft: '10px', fontSize: '12px', borderRadius: '46%', paddingLeft: '8px', paddingRight: '8px', paddingBottom: '4px', paddingTop: '4px', backgroundColor: "#ff944d" }}>Register</Button></Link>
             <Link to={'/teacher'} style={{ textDecoration: 'none' }} ><Button style={{ marginLeft: '10px', fontSize: '12px', borderRadius: '10px', paddingLeft: '3px', paddingRight: '3px', paddingBottom: '2px', paddingTop: '2px', backgroundColor: "" }}>Become a Tuter</Button></Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Headers