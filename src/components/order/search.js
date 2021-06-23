import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { orderActions } from '../../actions';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'

import closeIcon from '../../assets/images/close.svg'

export const OrderSearch = (props) => {

    const [filters, setFilters] = useState({})
    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.preventDefault()

        setFilters({...filters, [e.target.name]: e.target.value})
    }

    const formHandler = (e) => {
        e.preventDefault();
        dispatch(orderActions.getOrders(filters))
        props.onHide(false)
    }

    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
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
                                    <Form.Control className="order-input" type="text" name="customerName" value={filters.customerName} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col className="col-6  order-filter-input">
                            <Form.Group>
                                    <Form.Label className="pe-2">موبایل</Form.Label>
                                    <Form.Control className="order-input" type="number" name="customerMobile" value={filters.customerMobile} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-between">
                        <Col className="col-6 order-filter-input">
                            <Form.Group className="ms-2">
                                    <Form.Label className="pe-2">تاریخ عضویت از</Form.Label>
                                    <Form.Control className="order-input" type="date" name="startDate" value={filters.startDate} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col className="col-6 order-filter-input">
                            <Form.Group className="me-2">
                                <Form.Label className="pe-2">تا</Form.Label>
                                <Form.Control className="order-input" type="date" name="endDate" value={filters.endDate} onChange={handleChange} />
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