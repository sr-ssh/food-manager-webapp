import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { employeeActions } from '../../actions/employeeActions'
import { Modal, Row, Col, Form, Button, Spinner, Alert } from 'react-bootstrap'

import closeIcon from '../../assets/images/close.svg'

export const AddEmployer = (props) => {
    const [validated, setValidated] = useState(false)
    const [employer, setemployer] = useState({})

    let addemployerLoading = useSelector(state => state.addApplication.loading)
    let alert = useSelector(state => state.alert)
    const dispatch = useDispatch()
    const handleChange = (e) => {
        e.preventDefault()
        setemployer({...employer, [e.target.name]: e.target.value})
    }

    const formHandler = (e) => {
        e.preventDefault()
        let form = e.currentTarget
        if (form.checkValidity() === false) {
            e.stopPropagation()
        } else {
            dispatch(employeeActions.addApplication(employer))
            //dispatch(employeeActions.getPermissions())
        }
        setValidated(true)
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
                                <Form.Label className="pe-3">شماره موبایل کارفرما</Form.Label>
                                <Form.Control className="order-input" type="number" name="mobile" defaultValue={employer.mobile} onChange={handleChange} required />
                            </Form.Group>
                        </Col>
                    </Row>

                    {
                        addemployerLoading ? (
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
                                افزودن
                            </Button>
                        )
                    }
                </Form>
                
            </Modal.Body>
            
        </Modal>
    )
}
