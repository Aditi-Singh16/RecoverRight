import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavbar() {
    return(
        <>
        <Navbar style={{"background":"#c1e4b7"}} data-bs-theme="light">
            <Container>
            <Navbar.Brand href="#home">RecoverRight</Navbar.Brand>
            <Nav >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Statistics</Nav.Link>
                <Nav.Link href="#pricing">Information</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c1e4b7" fill-opacity="1" d="M0,96L48,106.7C96,117,192,139,288,154.7C384,171,480,181,576,181.3C672,181,768,171,864,138.7C960,107,1056,53,1152,64C1248,75,1344,149,1392,186.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </>
    )
}

export default CustomNavbar;