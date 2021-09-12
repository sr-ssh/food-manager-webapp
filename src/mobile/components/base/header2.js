import React from 'react';
import { Navbar , Nav } from 'react-bootstrap';

import backIcon from './../../assets/images/back.svg'

export const Header = ({title, backLink}) => {
    return(
        <>
        <Navbar variant="dark" sticky="top" className="py-2 my-nav" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="align-items-center justify-content-around w-100">
                    <Nav.Link className="me-auto ps-4"></Nav.Link>
                    <Navbar.Text className="fs-6 text-light align-self-start pe-4">{title}</Navbar.Text>
                    <Nav.Link href={backLink} className="me-auto ps-3"><img src={backIcon} height="30px" alt="back-icon" /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}