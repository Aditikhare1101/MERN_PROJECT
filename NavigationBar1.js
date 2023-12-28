import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export default function NavigationBar(){
  return (
    
  <Styles>
  <Navbar expand="lg">
    <Navbar.Brand href="/">Gym Trainer 2023</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">

<Nav.Item>
  <Nav.Link>
  <span><Link to="/">Home</Link></span>
  </Nav.Link>
</Nav.Item>

<Nav.Item>
  <Nav.Link>
  <span><Link to="/about">About Us</Link></span>
  </Nav.Link>
</Nav.Item>

<Nav.Item>
  <Nav.Link>
  <Link to="/contact">Contact Us</Link>
  </Nav.Link>
</Nav.Item>

<Nav.Item>
  <Nav.Link>
  <span><Link to="/login">Login as Admin</Link></span>
  </Nav.Link>
</Nav.Item>

<Nav.Item>
  <Nav.Link>
  <span><Link to="/customerlogin">Login as Customer</Link></span>
  </Nav.Link>
</Nav.Item>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
</Styles >
 
   
 )
}