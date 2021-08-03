import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';
class Header extends Component{
  render(){
    return(
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="#home">Covid-19</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Link className="nav-link" to="/india">India</Link>
    <Link className="nav-link" to="/world">World</Link>

    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      )
    }
  }

export default Header;
