import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header(){
    return (
        <Navbar bg='light' expand='lg'>
            <LinkContainer to="/">
                <Navbar.Brand>Naufal Company</Navbar.Brand>
            </LinkContainer>    
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/projects">
                    <Nav.Link>Projects</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                    <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                    <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        );

}
export default Header;