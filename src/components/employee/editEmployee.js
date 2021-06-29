import React, { useState } from 'react'
import { Modal, Button, Row, Col, Alert, Form, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import closeIcon from '../../assets/images/close.svg'

export const EditEmployee = (props) => {
    const [validated, setValidated] = useState(false)
    const [employee, setEmployee] = useState({})

    let editEmployeeLoading = useSelector(state => state.editEmployee.loading)

    const handleChange = (e) => {
        e.preventDefault()
    }

    const formHandler = (e) => {
        e.preventDefault()
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="mx-3 order-serach-modal"
            >
            <Modal.Body className="add-product px-4">
                <Button className="border-0 customer-modal-close" type="button"  onClick={e => props.onHide(false)}>
                    <img className="d-flex m-auto customer-modal-close-svg" src={closeIcon} alt="close-btn" />
                </Button>
                {
                alert.message && 
                <>
                <div className="modal-backdrop show"></div>
                    <Row className="justify-content-center text-center ">
                        <Alert variant={alert.type}>
                            {alert.message}
                        </Alert> 
                    </Row>
                </>
                }
                <Form onSubmit={formHandler} noValidate validated={validated}>
                    <Row className="mt-3">
                        <Col className="order-filter-input">
                            <Form.Group controlId="name">
                                <Form.Label className="pe-3">شماره موبایل کارمند جدید را وارد کنید:</Form.Label>
                                <Form.Control className="order-input" type="number" name="usernameOrMobile" defaultValue={employee.usernameOrMobile} onChange={handleChange} required />
                            </Form.Group>
                        </Col>
                    </Row>

                    {
                        editEmployeeLoading ? (
                            <Button className="fw-bold order-submit border-0 w-100 mt-4" size="lg" type="submit"  disabled>
                                <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                />
                                در حال انجام عملیات...
                            </Button>
                        ) : (
                            <Button className="fw-bold order-submit border-0 w-100 mt-4" size="lg" type="submit" block>
                                ویرایش کردن
                            </Button>
                        )
                    }
                </Form>
                
            </Modal.Body>
            
        </Modal>
    )
}
