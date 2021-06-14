import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productActions, orderActions  } from '../../actions';
import { Header } from '../base/header';
import { Basket } from './basket';
import { Container , Form , Button } from 'react-bootstrap';


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
            
            <Form className="text-right" onSubmit={formHandler} >
                <div className="order-flex">

                    <div className="order-inputs">
                   
                        <div className="order-input-group">

                            <div>
                                <Form.Group controlId="mobile">
                                    <Form.Label>موبایل</Form.Label>
                                    <Form.Control className="order-input border-0" type="number" placeholder="شماره موبایل" onChange={handleChange}  required/>
                                </Form.Group>
                            </div>

                            <div>
                                <Form.Group controlId="name">
                                    <Form.Label>نام</Form.Label>
                                    <Form.Control className="order-input border-0" type="text" placeholder="نام" onChange={handleChange}  required/>
                                </Form.Group>
                            </div>
                            
                        </div>

                        <div className="order-input-group">

                        <div>
                            <Form.Group controlId="family">
                                <Form.Label>نام خانوادگی</Form.Label>
                                <Form.Control className="order-input border-0" type="text" placeholder="نام خانوادگی" onChange={handleChange}  required/>
                            </Form.Group>
                        </div>
                        
                        <div>
                            <Form.Group controlId="birthday">
                                <Form.Label>تاریخ تولد</Form.Label>
                                <Form.Control className="order-input border-0" type="date" placeholder="(اختیاری) تاریخ تولد" onChange={handleChange}/>
                            </Form.Group>
                        </div>

                        </div>
                    </div>

                    <div className="order-submit-flex">
                        <Basket order={order} insertOrder={insertOrder} />
                    </div>

                    <div>
                        <h5>تاریخ یادآوری</h5>
                        <input onChange={handleChange} name="reminderDay" type="number" placeholder="5 روز"/>
                    </div>
                    
                    <div className="order-submit-flex">
                    <Button className="order-submit border-0" size="lg" type="submit" block>
                        ثبت
                    </Button>
                    </div>
                
                </div>
            </Form>
        </Container>
        </div>
    )
}
