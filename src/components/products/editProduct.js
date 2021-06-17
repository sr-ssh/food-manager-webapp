import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { productActions } from '../../actions';
import { Header } from '../base/header2';
import { Container , Form , Button , Row , Col } from 'react-bootstrap';


export const EditProduct = ({location}) => {
    
    let product = location.state;

    const [newProduct, setnewProduct] = useState(product)
    const dispatch = useDispatch()

    let handleChange = (e) => {
        e.preventDefault()
        if(e.target.id === 'active1')
            setnewProduct({...newProduct, active: true})
        else if (e.target.id === 'active0')
            setnewProduct({...newProduct, active: false})
        else setnewProduct({...newProduct, [e.target.id]: e.target.value})
        console.log(newProduct)
    }

    let formHandler = (e) => {
        e.preventDefault()
        console.log(location)
        dispatch(productActions.editProduct(newProduct))
    }

    return (
        <div className="order-page add-product">
        <Header title="ویرایش محصول" backLink="/products"/>
        <Container className="m-auto align-items-center justify-content-center d-flex ">
            
            <Form className="order-inputs text-right d-flex flex-column justify-content-around position-absolute bottom-0 order-flex" onSubmit={formHandler} >

            <Row className="m-0 p-0 d-flex justify-content-around align-items-center product-input-edit">
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col>
                            <Form.Group className="fw-bold product-checkbox" onChange={handleChange}>
                                <Row className="text-center">
                                    <Col className="success">
                                        <Form.Check.Input name="activity" id="active1" defaultChecked={newProduct.active} inline type="radio" isValid/>
                                        <Form.Check.Label inline className="me-2">فعال</Form.Check.Label>
                                    </Col>
                                    <Col>
                                        <Form.Check.Input name="activity" id="active0" defaultChecked={!newProduct.active} inline type="radio" isInvalid />
                                        <Form.Check.Label inline className="me-2">غیر فعال</Form.Check.Label>
                                    </Col> 
                                </Row>
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col className="col-5">
                            <Form.Group controlId="name">
                                <Form.Label>نام محصول</Form.Label>
                                <Form.Control className="order-input border-0" type="text" value={newProduct.name} onChange={handleChange}  required/>
                            </Form.Group>
                        </Col>
                        
                        <Col className="col-7"> 
                            <Form.Group controlId="sellingPrice">
                                <Form.Label>قیمت</Form.Label>
                                <Form.Control className="order-input border-0" type="text" value={newProduct.sellingPrice} onChange={handleChange} required/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group controlId="description">
                                <Form.Label>توضیحات</Form.Label>
                                <Form.Control className="order-input border-0 h-100" as="textarea" rows={6} value={newProduct.description} onChange={handleChange}/>
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
