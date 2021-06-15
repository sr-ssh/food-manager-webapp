import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../actions/userActions';


//css
import logo from './../assets/images/tem-x.png'
import userLogo from './../assets/images/user.svg'
import mobileLogo from './../assets/images/phone.svg'
import emailLogo from './../assets/images/emaill.svg'
import companyLogo from './../assets/images/company-name.svg'
import passwordLogo from './../assets/images/password.svg'
import { Container, Button, Form, Row, Col, Image, InputGroup, FormControl } from 'react-bootstrap';


export const Login = () => {

    const [inputs, setInputs] = useState({ username: '', password: '' });
    const { mobileOrEmail, password } = inputs;
    const dispatch = useDispatch()


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const formHandeler = e => {
        e.preventDefault();
        mobileOrEmail && password && dispatch(userActions.login(mobileOrEmail, password));
    }

    return (
        <>
            <div id="triangle-up"></div>

            <Container fluid className="p-0 d-flex flex-column">
                <Row className="p-0 m-0 mzLogo">
                    <Col className="">
                        <img className="logo" src={logo} alt="logo" width="168px"/>
                    </Col>
                </Row>
                <Row className="ms-0 loginForm">
                    <Col>
                        <Form className="d-flex flex-column justify-content-center"  onSubmit={formHandeler}>
                            <Row className="w-100 me-2">
                                <Col md={1} sm={1} xs={1}>
                                    <Image src={userLogo} className="form-icon" width="20px" height="20px"/>
                                </Col>
                                <Col md={6} sm={6} xs={8}>
                                    <Form.Control size="lg" className="pe-5 pt-2 form-input shadow-none" name="mobileOrEmail" type="text" placeholder="ایمیل / موبایل" onChange={handleChange} required/>
                                </Col>
                            </Row>
                            <Row className="w-100 me-2 mt-4">
                                <Col md={1} sm={1} xs={1}>
                                    <Image src={passwordLogo} className="form-icon" width="20px" height="20px"/>
                                </Col>
                                <Col md={6} sm={6} xs={8}>
                                    <Form.Control size="lg" className="pe-5 form-input shadow-none" name="password" type="password" placeholder="رمز عبور" onChange={handleChange} required/>
                                </Col>
                            </Row>
                            <Row className="w-100 me-2">
                                <Col className="mt-5 register-link ">
                                    <a href="/register">ثبت نام</a>
                                </Col>
                            </Row>
                            <Row className="registerSubmitContainer">
                                <Col xs={7} className="me-auto ms-4">
                                    <Button className="form-submit w-75 me-auto d-block" type="submit" >ورود</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
            
            <div id="triangle-down"></div>
        </>
    )
}

