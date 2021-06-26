import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'jalali-moment';
import { Card , Table , Row , Col, Container } from 'react-bootstrap';

import { orderActions } from '../../actions';
import { Header } from '../base/serachHeader';
import { OrderSearch } from './search'

export const Orders = () => {

    const [modalShow, setModalShow] = useState(false)
    const dispatch = useDispatch()
    const orders = useSelector(state => state.getOrders.orders)

    const getTotalPrice = (order) => {
        let total = 0
        order.map(item => {
            total += item.sellingPrice * item.quantity
        })
        return total
    }
    
    useEffect(() => {
        dispatch(orderActions.getOrders())
    }, [dispatch])


    return (
        <div className="product-page orders">
            <Header title="سفارش ها" modalShow={modalShow} setModalShow={setModalShow} />
            <Container className="m-auto">
                {orders ? 
                    (orders.map((order, index) => 
                        <Card key={index} className="m-auto mt-3 bg-light productCard border-0 lh-lg" >
                            <Card.Body className="pb-0 ps-1 rounded-3 text-gray">
                                <Row className="p-0 ps-2 m-0 ">
                                    <Card className="background-blue border-0 customer-round">
                                        <Card.Body className="pe-0 ps-0 ">
                                            <Row>
                                                <Col>
                                                    <Card.Text>
                                                        نام مشتری: <span>{order.customer.family}</span>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                            <Row className="flex-nowrap mt-2">
                                                <Col>
                                                    <Card.Text>
                                                        موبایل: <span>{order.customer.mobile}</span>
                                                    </Card.Text>
                                                </Col>
                                                <Col>
                                                    <Card.Text>
                                                    تاریخ : <span>{moment.from(order.createdAt, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}</span>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Row>
                                <Row className="mt-2">
                                    <Card.Text className="text-bold">
                                        سبد خرید
                                    </Card.Text>
                                </Row>
                                
                                <Row className="m-0 p-0 ps-2">
                                    
                                    <Table borderless size="sm">
                                        <thead>
                                            <tr>
                                                <th>سفارش</th>
                                                <th>قیمت</th>
                                                <th>تعداد</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            order.products.length 
                                            ? order.products.map(item => {
                                                        return (
                                                            <tr key={item.name}>
                                                                <td>{item.name}</td>
                                                                <td>{item.quantity * item.sellingPrice} تومان</td>
                                                                <td>{item.quantity}</td>
                                                            </tr>
                                                        )
                                                    })
                                                
                                            : null
                                        }
                                        <tr className="border-top-blue">
                                            <td>جمع کل:</td>
                                            <td className="fs-6">{getTotalPrice(order.products)} تومان</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                            
                                        </tbody>
                                    </Table>
                                </Row>

                            </Card.Body>
                        </Card>    
                    ))    
                    
                    : null}
                
                <OrderSearch show={modalShow} onHide={() => setModalShow(false)} />        
            </Container>
        </div>
    )
}
