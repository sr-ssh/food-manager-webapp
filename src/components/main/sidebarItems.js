import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import teamxLogo from '../../assets/images/crm.svg'
import accountIcon from '../../assets/images/drawer/account.svg'
import settingIcon from '../../assets/images/drawer/setting.svg'
import exitIcon from '../../assets/images/drawer/exit.svg'

import { userActions } from '../../actions'

export const SidebarItems = () => {
    return (
        <Container fluid className="d-flex flex-column h-100">
            <Row className="my-2">
                <Col>
                    <img src={teamxLogo} height="55px" className="m-auto d-block pt-2" alt="logo" />
                </Col>
            </Row>
            <Row>
                <Col xs={10} sm={10} md={10} lg={10} className="py-3 mx-3 fw-bold sidebarItem">
                    <Link to="/order/add">ثبت سفارش</Link>
                </Col>
                <Col xs={10} sm={10} md={10} lg={10} className="py-3 mx-3 fw-bold sidebarItem">
                    <Link to="/orders">سفارش ها</Link>
                </Col>
                <Col xs={10} sm={10} md={10} lg={10} className="py-3 mx-3 fw-bold sidebarItem">
                    <Link to="/reminders">یادآوری</Link>
                </Col>
                <Col xs={10} sm={10} md={10} lg={10} className="py-3 mx-3 fw-bold sidebarItem">
                    <Link to="/products">محصولات</Link>
                </Col>
                <Col xs={10} sm={10} md={10} lg={10} className="py-3 mx-3 fw-bold sidebarItem">
                    <Link to="/finance">مالی</Link>
                </Col>
                <Col xs={10} sm={10} md={10} lg={10} className="py-3 mx-3 fw-bold sidebarItem">
                    <Link to="/customers">مشتریان</Link>
                </Col>
                <Col xs={10} sm={10} md={10} lg={10} className="py-3 mx-3 fw-bold sidebarItem">
                    <Link to="/discounts">تخفیف ها</Link>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center mt-auto dashboardIcons">
                <Col xs={4} sm={4} md={4} lg={4} className="my-3">
                    <Col onClick={e => userActions.logout()}><img className="m-auto d-block" src={exitIcon} height="40px" alt="exit-icon"/></Col>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} className="my-3">
                    <Link to="/"><img className="m-auto d-block" src={settingIcon} height="40px" alt="setting-icon" /></Link>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} className="my-3">
                    <Col ><img className="m-auto d-block" src={accountIcon} height="40px" alt="acount-icon"/></Col>
                </Col>
            </Row>
        </Container>
    )
}
