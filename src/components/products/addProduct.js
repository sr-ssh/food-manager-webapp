import React, { useState , useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { productActions } from '../../actions';
import { Form , Button , Row , Col, Modal } from 'react-bootstrap';

import closeIcon from '../../assets/images/close.svg'


export const AddProduct = (props) => {
    
    const [product, setProduct] = useState({})
    const dispatch = useDispatch()

    let handleChange = (e) => {
        setProduct({...product, [e.target.id]: e.target.value})
    }

    let formHandler = (e) => {
        e.preventDefault()
        dispatch(productActions.addProduct(product))
    }

    useEffect(() => {
        setProduct(props.product)
    }, [props.product])


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className=""
            >
            <Modal.Body className="add-product px-4">
                <Button className="border-0 customer-modal-close" type="button"  onClick={e => props.onHide(false)}>
                    <img className="d-flex m-auto customer-modal-close-svg" src={closeIcon} alt="close-btn" />
                </Button>
                <Form onSubmit={formHandler} >
                    <Row className="mt-3">
                        <Col className="col-6 order-filter-input">
                            <Form.Group controlId="name">
                                <Form.Label className="pe-3">نام محصول</Form.Label>
                                <Form.Control className="order-input" type="text" onChange={handleChange} required />
                            </Form.Group>
                        </Col>
                        <Col className="col-6 order-filter-input">
                            <Form.Group controlId="sellingPrice">
                                <Form.Label className="pe-3">قیمت</Form.Label>
                                <Form.Control className="order-input" type="number" onChange={handleChange} required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="description" className="order-filter-input mt-3">
                                <Form.Label className="pe-3">توضیحات</Form.Label>
                                <Form.Control className="order-input border-0 h-100" as="textarea" rows={6} onChange={handleChange}/>
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
