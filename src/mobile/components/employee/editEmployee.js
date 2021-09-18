import React, { useState, useEffect } from 'react'
import { Modal, Button, Row, Col, Alert, Form, Spinner, Card, Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import persianJs from 'persianjs/persian.min';
import {  employeeActions } from '../../../actions/employeeActions';

import closeIcon from '../../assets/images/close.svg'
import spinnerIcon from './../../assets/images/sppiner.svg'

export const EditEmployee = (props) => {
    const [dimStatus, setDimStatus] = useState(false)
    const [selectedItem, setItem] = useState(-1)
    const [validated, setValidated] = useState(false)
    const userTypes = useSelector(state => state.getEmployeeTypes.employeeTypes)
    const dispatch = useDispatch()
    let [newEmployee, setNewEmployee] = useState(props.employee)
    let editEmployeeLoading = useSelector(state => state.editEmployee.loading)
    let alert = useSelector(state => state.alert)

    const handleDropdown = (item) => {
        setItem(item.persianName)
        setNewEmployee({...newEmployee, "typeId": item._id})
    }
    const handleChange = (e) => {
        e.preventDefault()
        setNewEmployee({...newEmployee, [e.target.id]: e.target.value})
    }

    const formHandler = (e) => {
        e.preventDefault()
        let employee = {...newEmployee, _id: props.employee._id}
        dispatch(employeeActions.editEmployee(employee))
    }
    
    useEffect(() => {
        setItem(-1)
        props.employee.type && setNewEmployee({
            _id: props.employee._id,
            family: props.employee.family,
            typeId: props.employee.type._id,
            mobile: props.employee.mobile
        })
        dispatch(employeeActions.getEmployeeTypes())
    }, [dispatch, props.employee])

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="mx-3 order-serach-modal"
            >
            <Modal.Body className="lh-lg add-product px-3 permission-card applications-text-gray add-discount ">
                <Button className="border-0 customer-modal-close" type="button"  onClick={e => props.onHide(false)}>
                    <img className="d-flex m-auto customer-modal-close-svg" src={closeIcon} alt="close-btn" />
                </Button>
             
                <Form onSubmit={formHandler} noValidate validated={validated}>
                    <Row >
                        <Col className="order-filter-input ">
                            <Form.Group controlId="family">
                                <Form.Label className="pe-1 fw-normal fs-7 mb-0">نام</Form.Label>
                                <Form.Control className="fs-6-sm w-100 order-input py-3 h-100 input-box-shadow text-dark-grey" type="text" defaultValue={props.employee.family} onChange={handleChange} required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3 justify-content-between">
                        <Col xs={7} className="order-filter-input ps-0 mx-0">
                            <Form.Group controlId="mobile">
                                <Form.Label className="pe-1 fw-normal fs-7 mb-0">موبایل</Form.Label>
                                <Form.Control style={{"width":"94%"}} className="fs-6-sm order-input py-3 h-100 input-box-shadow text-dark-grey" type="number" min="0" defaultValue={props.employee.mobile} onChange={handleChange} required/>
                            </Form.Group>
                        </Col>
                        <Col className="col-5 order-filter-input">
                            <Row>
                                <Col>
                                    <Form.Label className="pe-1 fw-normal fs-7 mb-0">شغل</Form.Label>
                                </Col>
                                <Col className="ps-4 pt-1 text-start">
                                    <img className="me-auto" src={spinnerIcon} height="13px" alt="spinner-icon"/>
                                </Col>
                            </Row>
                            <Dropdown onToggle={(e) => setDimStatus(!dimStatus)} >
                                <Dropdown.Toggle className="w-100 d-flex order-filter-input input-box-shadow fs-6-sm text-dark-grey fw-normal">
                                    {selectedItem !== -1 ? <span>{selectedItem}</span> : props.employee?.type?.persianName}
                                </Dropdown.Toggle> 
                                <Dropdown.Menu className={`${dimStatus ? "dim" : ""} dropdownProductMenu`}>
                                    {
                                        userTypes?.map((item, index) => 
                                            <Dropdown.Item key={index} onClick={() => handleDropdown(item)} >
                                                <Col className="text-end pe-1 order-input fs-6-sm">{item.persianName}</Col> 
                                            </Dropdown.Item>
                                            )
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {
                                editEmployeeLoading ? (
                                    <Button className="fw-bold product-submit border-0 w-100 mt-4" size="lg" type="submit"  disabled>
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
                                    <Button className="product-submit border-0 w-100 mt-3 fs-6 py-2" size="lg" type="submit" block>
                                        ثبت
                                    </Button>
                                )
                            }
                        </Col>
                    </Row>
                </Form>  
            </Modal.Body>
        </Modal>
    )
}
