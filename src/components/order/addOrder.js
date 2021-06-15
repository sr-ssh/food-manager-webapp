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

                    <Row className="order-inputs d-flex justify-content-around align-items-center flex-wrap">
                   
                        <Row className="d-flex flex-nowrap justify-content-around">

                            <Col>
                                <Form.Group controlId="mobile">
                                    <Form.Label>موبایل</Form.Label>
                                    <Form.Control className="order-input border-0" type="number" placeholder="شماره موبایل" onChange={handleChange}  required/>
                                </Form.Group>
                            </Col>

                        </Row>

                        <Row className="d-flex flex-nowrap justify-content-around">

                            <Col>
                                <Form.Group controlId="family">
                                    <Form.Label>نام خانوادگی</Form.Label>
                                    <Form.Control className="order-input border-0" type="text" placeholder="نام خانوادگی" onChange={handleChange}  required/>
                                </Form.Group>
                            </Col>
                            
                            <Col>
                                <Form.Group controlId="birthday">
                                    <Form.Label>تاریخ تولد</Form.Label>
                                    <Form.Control className="order-input border-0" type="text" placeholder="(اختیاری) تاریخ تولد" onChange={handleChange}/>
                                </Form.Group>
                            </Col>

                        </Row>
                    </Row>

                    <Row className="order-submit-flex">
                        <Col>
                            <Basket order={order} insertOrder={insertOrder} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h5>تاریخ یادآوری</h5>
                            <input onChange={handleChange} name="reminderDay" type="number" placeholder="5 روز"/>
                        </Col>
                    </Row>
                    
                    <Row className="order-submit-flex align-self-stretch">
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
