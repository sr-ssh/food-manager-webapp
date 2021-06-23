import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { customerActions } from '../../actions/customerActions';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'
import { DatePicker } from "jalali-react-datepicker";

import closeIcon from '../../assets/images/close.svg'

export const CustomerSearch = (props) => {

    const [filters, setFilters] = useState({})
    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.preventDefault()
        setFilters({...filters, [e.target.name]: e.target.value})
    }

    const formHandler = (e) => {
        e.preventDefault();
        console.log(filters)
        dispatch(customerActions.getCustomers(filters))
        props.onHide(false) 
    }

    const submitCalendar = ({ value }, name) => {
        if(value._i)
            setFilters({...filters, [name]: value._i.substr(0, 10)})
    }

    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered className="mx-2 order-serach-modal"
        >
            <Modal.Body className="order-filter-body">
                <Button className="border-0 customer-modal-close" type="button"  onClick={e => props.onHide(false)}>
                    <img className="d-flex m-auto customer-modal-close-svg" src={closeIcon} alt="close-btn" />
                </Button>
                <Form onSubmit={formHandler} >
                    <Row>
                        <Col className="col-6 order-filter-input">
                            <Form.Group>
                                    <Form.Label className="pe-2">نام مشتری</Form.Label>
                                    <Form.Control style={{"width":"94%"}} className="order-input h-100" type="text" name="family" value={filters.family} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="my-2">
                        <Col className="col-6  order-filter-input">
                            <Form.Group>
                                    <Form.Label className="pe-2">موبایل</Form.Label>
                                    <Form.Control style={{"width":"94%"}} className="order-input h-100" type="number" name="mobile" value={filters.mobile} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-between">
                        <Col className="col-6 order-filter-input">
                            <Form.Group className="ms-2">
                                <DatePicker label="تاریخ عضویت از" timePicker={false} DateIcon className="order-input p-2 w-100 h-100 mt-1" onClickSubmitButton={e => submitCalendar(e, "createdAtFrom")}/>
                            </Form.Group>
                        </Col>
                        <Col className="col-6 order-filter-input">
                            <Form.Group className="me-2">
                                <DatePicker label="تا" timePicker={false} DateIcon className="order-input p-2 w-100 h-100 mt-1" onClickSubmitButton={e => submitCalendar(e, "createdAtTo")}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-between">
                        <Col className="col-6 order-filter-input">
                            <Form.Group className="ms-2">
                                <DatePicker label="تاریخ آخرین خرید از" timePicker={false} DateIcon className="order-input p-2 w-100 h-100 mt-1" onClickSubmitButton={e => submitCalendar(e, "lastBuyFrom")}/>
                            </Form.Group>
                        </Col>
                        <Col className="col-6 order-filter-input">
                            <Form.Group className="me-2">
                                <DatePicker label="تا" timePicker={false} DateIcon className="order-input p-2 w-100 h-100 mt-1" onClickSubmitButton={e => submitCalendar(e, "lastBuyTo")}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-between">
                        <Col className="col-6 order-filter-input">
                            <Form.Group className="ms-2">
                                <DatePicker label="تعداد خرید از" timePicker={false} DateIcon className="order-input p-2 w-100 h-100 mt-1" onClickSubmitButton={e => submitCalendar(e, "orderFrom")}/>
                            </Form.Group>
                        </Col>
                        <Col className="col-6 order-filter-input">
                            <Form.Group className="me-2">
                                <DatePicker label="تا" timePicker={false} DateIcon className="order-input p-2 w-100 h-100 mt-1" onClickSubmitButton={e => submitCalendar(e, "orderTo")}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-between">
                        <Col className="col-6 order-filter-input">
                            <Form.Group className="ms-2">
                                <DatePicker label="جمع خرید از" timePicker={false} DateIcon className="order-input p-2 w-100 h-100 mt-1" onClickSubmitButton={e => submitCalendar(e, "totalFrom")}/>
                            </Form.Group>
                        </Col>
                        <Col className="col-6 order-filter-input">
                            <Form.Group className="me-2">
                                <DatePicker label="تا" timePicker={false} DateIcon className="order-input p-2 w-100 h-100 mt-1" onClickSubmitButton={e => submitCalendar(e, "totalTo")}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="px-2 mt-4">
                        <Button className="order-filter-button" type="submit">جست و جو</Button>
                    </Row>
                </Form> 
            </Modal.Body>
        </Modal>
    );
}