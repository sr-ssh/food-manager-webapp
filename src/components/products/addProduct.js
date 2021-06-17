import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { productActions } from '../../actions';
import { Header } from '../base/header2';
import { Container , Form , Button , Row , Col } from 'react-bootstrap';




export const AddProduct = () => {
    
    const [product, setProduct] = useState({})
    const dispatch = useDispatch()

    let handleChange = (e) => {
        e.preventDefault()
        setProduct({...product, [e.target.id]: e.target.value})
    }

    let formHandler = (e) => {
        e.preventDefault()
        dispatch(productActions.addProduct(product))
    }

    return (
        <div className="order-page add-product">
        <Header title="اضافه کردن محصول" backLink="/products"/>
        <Container className="m-auto align-items-center justify-content-center d-flex ">
            
            <Form className="order-inputs text-right d-flex flex-column justify-content-around position-absolute bottom-0 order-flex" onSubmit={formHandler} >

                <Row className="m-0 p-0 d-flex justify-content-around align-items-center product-input-add">
                    
                    <Row>
                        <Col>
                            <Form.Group controlId="name">
                                <Form.Label>نام محصول</Form.Label>
                                <Form.Control className="order-input border-0" type="text" onChange={handleChange}  required/>
                            </Form.Group>
                        </Col>
                        
                        <Col> 
                            <Form.Group controlId="sellingPrice">
                                <Form.Label>قیمت</Form.Label>
                                <Form.Control className="order-input border-0" type="text" onChange={handleChange} required/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group controlId="description">
                                <Form.Label>توضیحات</Form.Label>
                                <Form.Control className="order-input border-0 h-100" as="textarea" rows={6} onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Row>

                <Row className="p-0 m-0 d-flex justify-content-center align-items-center">
                    <Col className="col-11">
                        <Button className="order-submit fw-bold border-0 w-100" size="lg" type="submit" block>
                            ثبت
                        </Button>
                    </Col>
                </Row>
                
            </Form>
        </Container>
        </div>
    )
}
