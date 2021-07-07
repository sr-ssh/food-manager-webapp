import React, { useState } from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'
import { EmployeeRegister } from './employeeRegister'
import { EmployerRegister } from './employerRegister'

import logo from './../assets/images/crm.svg'

export const Determine = () => {

    const [position, setPosition] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const formHandler = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    const handleChange = (e) => {
        setPosition({[e.target.id]: e.target.value})
    }

    return (
        <>
        { !submitted && (
            <div className="form-page d-flex align-items-center">
            <div id="triangle-up"></div>
            <Container fluid className="d-flex determine-container flex-column justify-content-center align-items-center">
                <Row className="p-0 m-0 mzLogo">
                    <Col className="">
                        <img className="logo" src={logo} alt="logo" width="168px"/>
                    </Col>
                </Row>
                <h2 className="text-center ">تعیین سمت</h2>
                <Form onSubmit={formHandler}>
                    <Row className="my-3 mb-4 justify-content-center">
                        <Form.Group onChange={handleChange}>
                            <Col sm={10}>
                                <Form.Check type="radio" label="کارفرما" name="setPosition" id="employer" />
                                <Form.Check type="radio" label="کارمند" name="setPosition" id="employee" />
                            </Col>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <Button type="submit"> ثبت </Button>
                        </Col> 
                    </Row>
                </Form>
            </Container>
            <div id="triangle-down"></div>  
        </div>
        )}
        {submitted && position.employer && <EmployerRegister />}
        {submitted && position.employee && <EmployeeRegister />} 
        </>
    )
}
