import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productActions, orderActions  } from '../../actions';
import { Header } from '../base/header';
import { Basket } from './basket';
import { Container , Form , Button , Row , Col } from 'react-bootstrap';


export const AddOrder = () => {
    
    const [order, insertOrder] = useState([])
    const [customer, setCustomer] = useState({})
    const dispatch = useDispatch()

    let handleChange = (e) => {
        e.preventDefault()
        setCustomer({...customer, [e.target.name]: e.target.value})
    }

    let formHandler = (e) => {
        e.preventDefault()
        if(order.length) {
            dispatch(orderActions.addOrder(order, customer))
        } else {
            console.log('empty order can not be sent')
        }
    }

    return (
        <div className="order-page">
        <Header brand="ثبت سفارش"/>
        <Container>
            
            <Form className="text-right d-flex flex-column justify-content-around align-items-center position-absolute bottom-0 left-0 right-0 order-flex" onSubmit={formHandler} >

                    <Row className="m-0 p-0 order-inputs d-flex justify-content-around align-items-center flex-wrap mt-4">
                   
                        <Row className="d-flex flex-nowrap justify-content-around">

                            <Col>
                                <Form.Group controlId="mobile">
                                    <Form.Label>موبایل</Form.Label>
                                    <Form.Control className="order-input" type="number" onChange={handleChange}  required/>
                                </Form.Group>
                            </Col>

                        </Row>

                        <Row className="d-flex flex-nowrap justify-content-around mt-2">

                            <Col>
                                <Form.Group controlId="family">
                                    <Form.Label>نام خانوادگی</Form.Label>
                                    <Form.Control className="order-input" type="text" onChange={handleChange}  required/>
                                </Form.Group>
                            </Col>
                            
                            <Col>
                                <Form.Group controlId="birthday">
                                    <Form.Label>تاریخ تولد</Form.Label>
                                    <Form.Control className="order-input" type="text" onChange={handleChange}/>
                                </Form.Group>
                            </Col>

                        </Row>
                    </Row>

                    <Row className="m-3 ms-4 p-0 order-submit-flex align-self-stretch">
                        <Col>
                            <Basket order={order} insertOrder={insertOrder} />
                        </Col>
                    </Row>

                    <Row className="d-flex order-inputs align-self-start me-3 flex-row">
                        <Form.Group controlId="reminder">
                            <Row>
                            <Col xs={4} className="p-2">
                            <Form.Label>تاریخ یادآوری</Form.Label>
                            <Form.Control className="text-center order-input" type="number" onChange={handleChange}/>
                            </Col>
                            <Col className="align-self-end p-2">
                                <span className="mt-2 reminder-span" ><smal>روز دیگر</smal></span>
                            </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                    
                    <Row className="m-0 ms-2 p-0 order-submit-flex align-self-stretch">
                        <Col>
                            <Button className="fw-bold order-submit border-0 col-12" size="lg" type="submit" block>
                                ثبت
                            </Button>
                        </Col>
                    </Row>
                
            </Form>
        </Container>
        </div>
    )
}
