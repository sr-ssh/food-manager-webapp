import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from 'react-sidebar'

import { SidebarItems } from './sidebarItems'

import logo from "../../assets/images/back.svg"
import { Navbar , Nav } from 'react-bootstrap';

import menuIcon from './../../assets/images/menu.svg'

export const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Sidebar
                sidebar={<SidebarItems />}
                open={isOpen}
                onSetOpen={setIsOpen}
                pullRight={true}
                styles={{ 
                    sidebar: { background: "white", width : "42vw", "zIndex": "1021" },
                    overlay: { backgroundColor: "none" }
                }}
                overlayClassName="test3"
                shadow={false}
                touch={false}
            >
                <div className="mainPage h-100">
                    <Navbar variant="dark" sticky="top" className="py-2 my-nav" >
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="align-items-center w-100">
                                <Nav.Link onClick={() => setIsOpen(!isOpen)} className="ms-auto pe-3"><img src={menuIcon} height="40px" alt="plus-icon"  /></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className="d-flex justify-content-center align-items-center text-center h-75">
                        به crm-x خوش آمدید
                        <br/> برای ثبت محصول یا سفارش از منو اقدام کنید
                    </div>
                </div>
            </Sidebar>
        </>
    )
}
