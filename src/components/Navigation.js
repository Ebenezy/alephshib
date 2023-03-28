import React from 'react'
// import './navigation.css'
import logo from '../images/alephshib-logo.svg'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import {
    Link,
} from "react-router-dom";

const Navigation = () => {
    return (
        <div className='w-100'>
            <div className="ca">
                <div>CA: coming soon...</div>
            </div>
            <Navbar expand="lg" variant="dark" className='pt-4'>
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} alt="alephshib logo" className='logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto my-2 my-lg-0">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#how-to-buy">How to Buy</Nav.Link>
                            <Nav.Link href="#metaverse">Metaverse</Nav.Link>
                            <Nav.Link href="#roadmap">Roadmap</Nav.Link>
                            {/* <Nav.Link className='loginLink' as={Link} to="/">Login</Nav.Link> */}
                            {/* <iframe class="formlets-iframe" src="https://www.formlets.com/forms/EibrIkdhyqrItSo1/?iframe=true&nofocus=y"
                                    frameborder="0" width="100%"></iframe> */}
                            <Button className='launchapp-btn hvr-back-pulse' as={Link} to='/'>View Chart</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
