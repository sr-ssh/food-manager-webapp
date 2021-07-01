import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from 'react-sidebar'
import { Navbar , Nav } from 'react-bootstrap';
import { Container, Button, Form, Row, Col, Image, Alert } from 'react-bootstrap';


import { SidebarItems } from './sidebarItems'

import menuIcon from './../../assets/images/menu.svg'
import logo from '../../assets/images/crm.svg'
import customerIcon from '../../assets/images/main/customer.svg'
import ordersIcon from '../../assets/images/main/orders.svg'
import addOrderIcon from '../../assets/images/main/add-order.svg'
import { history } from '../../helpers';

// import logo from './../assets/images/crm.svg'


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
                    sidebar: { background: "white", width : "42vw", "zIndex": "1040" },
                    overlay: { zIndex: "1030"}
                }}
                overlayClassName="test3"
                shadow={true}
                touch={false}
            >
                {/* <div className="mainPage h-100">
                    <Navbar variant="dark" sticky="top" className="py-2 my-nav" >
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="align-items-center w-100">
                                <Nav.Link onClick={() => setIsOpen(!isOpen)} className="ms-auto pe-3"><img src={menuIcon} height="40px" alt="plus-icon"  /></Nav.Link>
                            </Nav>
                            <Nav>
                                <img src={crmLogo} height="50px" />
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className="d-flex justify-content-center align-items-center text-center h-75">
                        به crm-x خوش آمدید
                        <br/> برای ثبت محصول یا سفارش از منو اقدام کنید
                    </div>
                </div> */}
                <div className="form-page">
                <div id="triangle-up"></div>
                <Container fluid className="p-0 d-flex flex-column ms-0">
                    <Row className="p-0 m-0 mzLogo">
                        <Col className="">
                            <img className="logo" src={logo} alt="logo" width="160px"/>
                        </Col>
                    </Row>
                    <Row className="ms-0 justify-content-center " style={{"zIndex": 1}}>
                        <Row className="my-3 pe-3">
                            <Col xs={3} className="me-4 ms-auto">
                                <Button className="main-button me-auto d-block p-2" type="submit" onClick={() => setIsOpen(!isOpen)}>
                                    <img src={menuIcon} height="38px" alt="menu-icon"  />
                                </Button>
                            </Col>
                        </Row>
                        <Row className="my-3 justify-content-center">
                            <Col xs={9} className="">
                                <Button className="main-button w-100 me-auto d-block p-3" type="submit" onClick={e => history.push('/order/add')}>
                                    <img className="ms-4" src={addOrderIcon} alt="add-order-icon" width="35px"/>
                                    ثبت سفارش
                                </Button>
                            </Col>
                        </Row>
                        <Row className="my-3 justify-content-center">
                            <Col xs={9} className="">
                                <Button className="main-button w-100 me-auto d-block p-3" type="submit" onClick={e => history.push('/orders')}>
                                    <img className="ms-4" src={ordersIcon} alt="add-order-icon" width="35px"/>
                                    سفارشات
                                </Button>
                            </Col>
                        </Row>
                        <Row className="my-3 justify-content-center">
                            <Col xs={9} className="">
                                <Button className="main-button w-100 me-auto d-block p-3" type="submit" onClick={e => history.push('/customers')}>
                                    <img className="ms-4" src={customerIcon} alt="add-order-icon" width="35px"/>
                                    مشتریان
                                </Button>
                            </Col>
                        </Row>
                    </Row>
                </Container>
                
                <div id="triangle-down"></div>
            </div>
            </Sidebar>
        </>
    )
}
