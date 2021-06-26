import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productActions, orderActions, customerActions  } from '../../actions';
import { Header } from '../base/header2';
import { Basket } from './basket';
import { Container , Form , Button , Row , Col } from 'react-bootstrap';
//import { DatePicker } from "jalali-react-datepicker";
import DatePicker from "react-multi-date-picker";
import moment from 'jalali-moment';
import "react-multi-date-picker/styles/layouts/mobile.css"

export const AddOrder = () => {
    
    const [order, insertOrder] = useState([])
    const [customer, setCustomer] = useState({})
    const dispatch = useDispatch()
    let oldCustomer = {}
    oldCustomer = useSelector(state => state.getCustomer.customer)


    let handleOldCustomer = (e) => {
        e.preventDefault()
        setCustomer(oldCustomer)
    }

    let handleChange = (e) => {
        e.preventDefault()
        if(e.target.name === "mobile")
            dispatch(customerActions.getCustomer(e.target.value))

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

    const submitCalendar = (value, name) => {
        let birthDate = `${value.year}/${value.month.number}/${value.day}`
        birthDate =  moment.from(birthDate, 'fa', 'YYYY/MM/DD').locale('en').format('YYYY-MM-DD');
        setCustomer({...customer, [name]: birthDate})
    }

    return (
        <div className="order-page">
            <Header title="ثبت سفارش" backLink="/dashboard"/>
            <Container fluid className="pt-3 px-3 m-0">
                <Form onSubmit={formHandler} >
                    <Row className="m-0 p-0 order-inputs">
                        <Col className="p-0 col-5 orderInput">
                            <Form.Group >
                                <Form.Label className="pe-2">موبایل</Form.Label>
                                <Form.Control className="order-input" type="number" name="mobile" onChange={handleChange} required/>
                            </Form.Group>
                        </Col>
                        <Col className="col-4">
                            {(oldCustomer && Object.keys(oldCustomer).length != 0) ? <Button onClick={(e) => handleOldCustomer(e)}>تکمیل اطلاعات مشتری</Button> : null}
                        </Col>
                    </Row>
                    <Row className="m-0 p-0 mt-2 order-inputs">
                        <Col className="p-0 col-5 orderInput">
                            <Form.Group >
                                <Form.Label className="pe-2">نام</Form.Label>
                                <Form.Control className="order-input" type="text" name="family" onChange={handleChange} value={customer.family} required/>
                            </Form.Group>
                        </Col> 
                        <Col className="p-0 col-5 me-auto orderInput">
                            <Form.Group controlId="birthday">
                                <Form.Label className="pe-2">تاریخ تولد</Form.Label>
                                <DatePicker 
                                    style = {{
                                        width: "100%"
                                    }}
                                    inputClass="search-input"
                                    className="rmdp-mobile" 
                                    calendar="persian" 
                                    locale="fa" 
                                    value={customer.birthday}
                                    calendarPosition="auto-right" 
                                    editable={false} 
                                    animation
                                    onChange={value => submitCalendar(value, 'birthday')}
                                />
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
                                <Col className="p-0 mt-3 col-3 order-inputs">
                                    <Form.Label>تاریخ یادآوری</Form.Label>
                                    <Form.Control className="text-center order-input" type="number" name="reminder" onChange={handleChange}/>
                                </Col>
                                <Col className="align-self-end p-2">
                                    <span className="mt-2 reminder-span" >روز دیگر</span>
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
