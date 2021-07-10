import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from 'react-sidebar'
import { Navbar , Nav } from 'react-bootstrap';
import { Container, Button, Form, Row, Col, Image, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'


import { SidebarItems } from './sidebarItems'

import menuIcon from './../../assets/images/menu.svg'
import logo from '../../assets/images/crm.svg'
import customerIcon from '../../assets/images/main/customer.svg'
import ordersIcon from '../../assets/images/main/orders.svg'
import addOrderIcon from '../../assets/images/main/add-order.svg'
import { MainMenuOptions } from './mainMenuOptions'
import { history } from '../../helpers';
import { employeeActions } from '../../actions/employeeActions'
import { userActions } from '../../actions/userActions'
import { productActions } from '../../actions/productActions'


// import logo from './../assets/images/crm.svg'


export const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false)

    const permissions = useSelector(state => state.getPermissions.permissions);
    const userInfo = useSelector(state => state.getUserInfo.user)
    const products = useSelector(state => state.getProducts.product)
    const dispatch = useDispatch()

    useEffect(() => {
            dispatch(userActions.getUserInfo())
            dispatch(productActions.getProducts())
        if (!(permissions)) 
            dispatch(employeeActions.getPermissions())
            
    }, [dispatch, permissions])


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
                        { userInfo && Object.keys(userInfo).indexOf('company') > -1 && !products.length && 
                            <Row>
                                <Col className="text-center">
                                    محصولات خود را وارد کنید:
                                </Col>
                                <Row  className="my-3 justify-content-center">
                                    <Col  xs={9}  className="">
                                        <Button  className="main-button w-100 me-auto d-block p-3"  type="submit"  onClick={e  => history.push('/products')}>
                                            <img  className="ms-4"  src={addOrderIcon}  alt="add-order-icon"  width="35px"/>
                                            محصولات
                                        </Button>
                                    </Col>
                                </Row>
                            </Row>
                        }
                        { userInfo && Object.keys(userInfo).indexOf('company') > -1 && products.length > 0 &&
                            <MainMenuOptions />
                        }
                    </Row>
                </Container>
                
                <div id="triangle-down"></div>
            </div>
            </Sidebar>
        </>
    )
}
