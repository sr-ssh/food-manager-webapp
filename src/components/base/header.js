import React from 'react';
import { Navbar , Nav } from 'react-bootstrap';
import backIcon from './../../assets/images/back.svg'

export const Header = ({brand}) => {
    return(
        <>
        <Navbar variant="dark" className="py-2 justify-content-center my-nav">
            <Navbar.Brand class="fs-6">{brand}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/dashboard"><img className="col-3" src={backIcon} alt="back-icon" /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}