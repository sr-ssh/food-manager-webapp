import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { customerActions } from '../../actions/customerActions';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'

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
                                    <Form.Control className="order-input" type="text" name="family" value={filters.family} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col className="col-6  order-filter-input">
                            <Form.Group>
                                    <Form.Label className="pe-2">موبایل</Form.Label>
                                    <Form.Control className="order-input" type="number" name="mobile" value={filters.mobile} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-between">
                        <Col className="col-6 order-filter-input">
                            <Form.Group className="ms-2">
                                    <Form.Label className="pe-2">تاریخ عضویت از</Form.Label>
                                    <Form.Control className="order-input" type="date" name="createdAtFrom" value={filters.createdAtFrom} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col className="col-6 order-filter-input">
                            <Form.Group className="me-2">
                                <Form.Label className="pe-2">تا</Form.Label>
                                <Form.Control className="order-input" type="date" name="createdAtTo" value={filters.createdAtTo} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-between">
                        <Col className="col-6 order-filter-input">
                            <Form.Group className="ms-2">
                                    <Form.Label className="pe-2">تاریخ آخرین خرید از</Form.Label>
                                    <Form.Control className="order-input" type="date" name="lastBuyFrom" value={filters.lastBuyFrom} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col className="col-6 order-filter-input">
                            <Form.Group className="me-2">
                                <Form.Label className="pe-2">تا</Form.Label>
                                <Form.Control className="order-input" type="date" name="lastBuyTo" value={filters.lastBuyTo} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-between">
                        <Col className="col-6 order-filter-input">
                            <Form.Group className="ms-2">
                                    <Form.Label className="pe-2">تعداد خرید از</Form.Label>
                                    <Form.Control className="order-input" type="date" name="orderFrom" value={filters.orderFrom} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col className="col-6 order-filter-input">
                            <Form.Group className="me-2">
                                <Form.Label className="pe-2">تا</Form.Label>
                                <Form.Control className="order-input" type="date" name="orderTo" value={filters.orderTo} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-between">
                        <Col className="col-6 order-filter-input">
                            <Form.Group className="ms-2">
                                    <Form.Label className="pe-2">جمع خرید از</Form.Label>
                                    <Form.Control className="order-input" type="date" name="totalFrom" value={filters.totalFrom} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col className="col-6 order-filter-input">
                            <Form.Group className="me-2">
                                <Form.Label className="pe-2">تا</Form.Label>
                                <Form.Control className="order-input" type="date" name="totalTo" value={filters.totalTo} onChange={handleChange} />
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