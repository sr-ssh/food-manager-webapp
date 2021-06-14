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
import { Container, Button, Form, Row, Col } from 'react-bootstrap';


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
                        <img src={logo} alt="logo" width="136px"/>
                    </Col>
                </Row>
                <Row className="p-0 m-0 loginForm">
                    <Col>
                        <Form>
                            <Row className="w-100 m-auto">
                                <Col md={6} sm={6} xs={6}>
                                    <Form.Control className="w-100 mr-5" type="text" placeholder="ایمیل / موبایل" />
                                </Col>
                            </Row>
                            <Row className="w-100 m-auto">
                                <Col md={6} sm={6} xs={6}>
                                    <Form.Control className="w-100 mr-5" type="password" placeholder="رمز عبور" />
                                </Col>
                            </Row>
                            <Row className="m-0 ">
                                <Col>
                                    <a>ثبت نام</a>
                                </Col>
                            </Row>
                            <Row className="m-0 ">
                                <Col>
                                    <Button>ورود</Button>
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

