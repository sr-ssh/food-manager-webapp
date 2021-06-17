import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../actions/userActions';
import { Container, Button, Form, Row, Col, Image, InputGroup, FormControl } from 'react-bootstrap';

import logo from './../assets/images/tem-x.png'
import userLogo from './../assets/images/user.svg'
import mobileLogo from './../assets/images/phone.svg'
import emailLogo from './../assets/images/emaill.svg'
import companyLogo from './../assets/images/company-name.svg'
import passwordLogo from './../assets/images/password.svg'



export const Register = () => {

    const [inputs, setInputs] = useState({ username: '', password: '' });
    const { name, family, password, email, mobile, company} = inputs;
    const dispatch = useDispatch()


    const handleChange = (e) => {
        const { id, value } = e.target;
        setInputs(inputs => ({ ...inputs, [id]: value }));
    }


    const formHandeler = e => {
        e.preventDefault();
        let user = { name, family, company, password, email, mobile };
        console.log(user)
        family && password && mobile && dispatch(userActions.register(user));     
    }

    return (
        <div className="order-page">
            <div id="triangle-up"></div>

            <Container fluid className="p-0 d-flex flex-column">
                <Row className="p-0 m-0 mzLogo">
                    <Col className="">
                        <img className="logo" src={logo} alt="logo" width="168px"/>
                    </Col>
                </Row>
                <Row className="ms-0 registerForm mt-0">
                    <Col>
                        <Form className="d-flex flex-column justify-content-center"  onSubmit={formHandeler}>

                            <Row className="w-100 me-2 pe-2 order-inputs ">
                                <Col >
                                    <Form.Group controlId="family" >
                                        <Image src={userLogo} width="17px" className="mx-2"/>
                                        <Form.Label>نام خانوادگی</Form.Label>
                                        <Form.Control className="order-input login-input" type="text" onChange={handleChange}  required/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            {/* <Row className="w-100 me-2">
                                <Col md={1} sm={1} xs={1}>
                                    <Image src={userLogo} className="form-icon" width="20px" height="20px"/>
                                </Col>
                                <Col md={6} sm={6} xs={8}>
                                    <Form.Control size="lg" className="pe-5 pt-2 form-input shadow-none" name="family" type="text" placeholder="نام خانوادگی" onChange={handleChange} required />
                                </Col>
                            </Row> */}

                            <Row className="w-100 me-2 pe-2 order-inputs mt-2">
                                <Col >
                                    <Form.Group controlId="mobile" >
                                        <Image src={mobileLogo} width="17px" className="mx-2"/>
                                        <Form.Label>موبایل</Form.Label>
                                        <Form.Control className="order-input login-input" type="number" onChange={handleChange}  required/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* <Row className="w-100 me-2 mt-4">
                                <Col md={1} sm={1} xs={1}>
                                    <Image src={mobileLogo} className="form-icon" width="20px" height="20px"/>
                                </Col>
                                <Col md={6} sm={6} xs={8}>
                                    <Form.Control size="lg" className="pe-5 form-input shadow-none" name="mobile" type="number" placeholder="موبایل" onChange={handleChange} required/>
                                </Col>
                            </Row> */}

                            <Row className="w-100 me-2 pe-2 order-inputs mt-2">
                                <Col >
                                    <Form.Group controlId="email" >
                                        <Image src={emailLogo} width="17px" className="mx-2"/>
                                        <Form.Label>ایمیل</Form.Label>
                                        <Form.Control className="order-input login-input" type="email" onChange={handleChange}  required/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            
                            {/* <Row className="w-100 me-2 mt-4">
                                <Col md={1} sm={1} xs={1}>
                                    <Image src={emailLogo} className="form-icon" width="20px" height="20px"/>
                                </Col>
                                <Col md={6} sm={6} xs={8}>
                                    <Form.Control size="lg" className="pe-5 form-input shadow-none" name="email" type="email" placeholder="ایمیل" onChange={handleChange} required/>
                                </Col>
                            </Row> */}

                            <Row className="w-100 me-2 pe-2 order-inputs mt-2">
                                <Col >
                                    <Form.Group controlId="company" >
                                        <Image src={companyLogo} width="17px" className="mx-2"/>
                                        <Form.Label>نام شرکت</Form.Label>
                                        <Form.Control className="order-input login-input" type="text" onChange={handleChange}  required/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* <Row className="w-100 me-2 mt-4">
                                <Col md={1} sm={1} xs={1}>
                                    <Image src={companyLogo} className="form-icon" width="20px" height="20px"/>
                                </Col>
                                <Col md={6} sm={6} xs={8}>
                                    <Form.Control size="lg" className="pe-5 form-input shadow-none" name="company" type="text" placeholder="نام شرکت" onChange={handleChange} required/>
                                </Col>
                            </Row> */}

                            <Row className="w-100 me-2 pe-2 order-inputs mt-2">
                                <Col >
                                    <Form.Group controlId="password" >
                                        <Image src={passwordLogo} width="17px" className="mx-2"/>
                                        <Form.Label>رمز عبور</Form.Label>
                                        <Form.Control className="order-input login-input" type="password" onChange={handleChange}  required/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* <Row className="w-100 me-2 mt-4">
                                <Col md={1} sm={1} xs={1}>
                                    <Image src={passwordLogo} className="form-icon" width="20px" height="20px"/>
                                </Col>
                                <Col md={6} sm={6} xs={8}>
                                    <Form.Control size="lg" className="pe-5 form-input shadow-none" name="password" type="password" placeholder="رمز عبور" onChange={handleChange} required/>
                                </Col>
                            </Row>
                             */}

                            <Row className="w-100 me-0">
                                <Col className="mt-4 register-link">
                                    <a href="/">ورود</a>
                                </Col>
                            </Row>
                            <Row className="registerSubmitContainer mt-2">
                                <Col xs={8} className="me-auto ms-4">
                                    <Button className="form-submit w-75 me-auto d-block" type="submit">ثبت نام</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
            
            <div id="triangle-down"></div>
        </div>
    )
}

