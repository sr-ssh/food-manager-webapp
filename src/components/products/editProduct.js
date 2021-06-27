import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { productActions } from '../../actions';
import { Header } from '../base/header2';
import { Container , Form , Button , Row , Col, Modal } from 'react-bootstrap';

import closeIcon from '../../assets/images/close.svg'

export const EditProduct = (props) => {
    const [newProduct, setnewProduct] = useState(props.product)
    const dispatch = useDispatch()

    let handleChange = (e) => {
        e.preventDefault()
        if(e.target.id === 'active1')
            setnewProduct({...newProduct, active: true})
        else if (e.target.id === 'active0')
            setnewProduct({...newProduct, active: false})
        else setnewProduct({...newProduct, [e.target.id]: e.target.value})
    }

    let formHandler = (e) => {
        e.preventDefault()
        dispatch(productActions.editProduct(newProduct))
    }

    useEffect(() => {
        setnewProduct(props.product)
    }, [props.product])


    return (
       <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            {console.log(newProduct)}
            <Modal.Body className="add-product px-4">
                <Button className="border-0 customer-modal-close" type="button"  onClick={e => props.onHide(false)}>
                    <img className="d-flex m-auto customer-modal-close-svg" src={closeIcon} alt="close-btn" />
                </Button>
                <Form onSubmit={formHandler} >
                    <Row className="my-3 mb-4">
                        <Col className="col-4 ms-3">
                            <Form.Group className="fw-bold product-checkbox" onChange={handleChange}>
                                <Form.Check.Input name="activity" id="active1" defaultChecked={props.product.active} inline type="radio" isValid/>
                                <Form.Check.Label inline className="me-2">فعال</Form.Check.Label>
                            </Form.Group>
                        </Col>
                        <Col className="col-4 me-5">
                            <Form.Group className="fw-bold product-checkbox" onChange={handleChange}>
                                <Form.Check.Input name="activity" id="active0" defaultChecked={!props.product.active} inline type="radio" isInvalid />
                                <Form.Check.Label inline className="me-2">غیر فعال</Form.Check.Label>
                            </Form.Group>
                        </Col> 
                    </Row>
                    <Row className="mt-3">
                        <Col className="col-6 order-filter-input">
                            <Form.Group controlId="name">
                                <Form.Label className="pe-3">نام محصول</Form.Label>
                                <Form.Control className="order-input" type="text" defaultValue={props.product.name} onChange={handleChange} required/>
                            </Form.Group>
                        </Col>
                        <Col className="col-6 order-filter-input">
                            <Form.Group controlId="sellingPrice">
                                <Form.Label className="pe-3">قیمت</Form.Label>
                                <Form.Control className="order-input" type="number" defaultValue={props.product.sellingPrice} onChange={handleChange} required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="description" className="order-filter-input mt-3">
                                <Form.Label className="pe-3">توضیحات</Form.Label>
                                <Form.Control className="order-input border-0 h-100" as="textarea" defaultValue={props.product.description} rows={6} onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button className="add-product-btn mt-4 w-100" type="submit" onClick={e => props.onHide(false)}>ثبت</Button>
                        </Col>
                    </Row>
                </Form>
                
            </Modal.Body>
            
        </Modal>
    )
}
