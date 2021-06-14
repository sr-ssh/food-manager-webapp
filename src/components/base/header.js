import React from 'react';
import { Navbar } from 'react-bootstrap';

export const Header = ({brand}) => {
    return(
        <>
        <Navbar variant="dark" className="py-2 justify-content-center my-nav">
            <Navbar.Brand class="fs-6">{brand}</Navbar.Brand>
        </Navbar>
        </>
    )
}