import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { productActions } from '../../actions';
import { Header } from '../base/header';
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
        <div className="order-page">
        <Header brand="ثبت محصول"/>
        <Container>
            
            <Form className="text-right d-flex flex-column justify-content-around align-items-center position-absolute bottom-0 left-0 right-0 order-flex" onSubmit={formHandler} >

                   
                <Col>
                    <Form.Group controlId="name">
                        <Form.Label>نام</Form.Label>
                        <Form.Control className="border-0" type="text" placeholder="نام محصول" onChange={handleChange}  required/>
                    </Form.Group>
                </Col>
                
                <Col>
                    <Form.Group controlId="sellingPrice">
                        <Form.Label>قیمت فروش</Form.Label>
                        <Form.Control className="border-0" type="text" placeholder="قیمت فروش" onChange={handleChange} required/>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="description">
                        <Form.Label>توضیحات</Form.Label>
                        <Form.Control className="border-0" type="text" placeholder="توضیحات" onChange={handleChange}/>
                    </Form.Group>
                </Col>

                <Col>
                    <Button className="fw-bold border-0 col-12" size="lg" type="submit" block>
                        ثبت
                    </Button>
                </Col>
                
            </Form>
        </Container>
        </div>
    )
}
