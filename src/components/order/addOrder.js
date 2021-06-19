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
        {console.log("===========orders======")}
        {console.log(order)}
        {console.log("============customer=======")}
        {console.log(customer)}
        {console.log("============")}
            <Header title="ثبت سفارش"/>
            <Container fluid className="pt-3 px-3 m-0">
                <Form className="" onSubmit={formHandler} >
                    <Row className="m-0 p-0 order-inputs">
                        <Col className="p-0 col-5 orderInput">
                            <Form.Group >
                                <Form.Label className="pe-2">موبایل</Form.Label>
                                <Form.Control className="order-input" type="number" name="mobile" onChange={handleChange}  required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="m-0 p-0 mt-2 order-inputs">
                        <Col className="p-0 col-5 orderInput">
                            <Form.Group >
                                <Form.Label className="pe-2">نام</Form.Label>
                                <Form.Control className="order-input" type="text" name="family" onChange={handleChange}  required/>
                            </Form.Group>
                        </Col> 
                        <Col className="p-0 col-5 me-auto orderInput">
                            <Form.Group controlId="birthday">
                                <Form.Label className="pe-2">تاریخ تولد</Form.Label>
                                <Form.Control className="order-input" type="date" name="birthday" onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="m-0 mt-4 basketContainer">
                        <Col>
                            <Basket order={order} insertOrder={insertOrder} />
                        </Col>
                    </Row>

                    <Row className="m-0 order-input align-self-start me-3 flex-row">
                        <Form.Group controlId="reminder">
                            <Row>
                                <Col className="p-0 mt-3 col-3">
                                    <Form.Label>تاریخ یادآوری</Form.Label>
                                    <Form.Control className="text-center order-input" type="number" name="reminder" onChange={handleChange}/>
                                </Col>
                                <Col className="align-self-end p-2">
                                    <span className="mt-2 reminder-span" ><smal>روز دیگر</smal></span>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                    
                    <Row className="m-0 mt-4 justify-content-center w-100">
                        <Col className="col-12">
                            <Button className="fw-bold order-submit border-0 w-100" size="lg" type="submit" block>
                                ثبت
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}
