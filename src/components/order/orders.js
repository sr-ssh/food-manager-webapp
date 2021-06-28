import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'jalali-moment';
import { Card , Table , Row , Col, Container, Alert, Spinner } from 'react-bootstrap';
import persianJs from 'persianjs/persian.min';

import { orderActions } from '../../actions';
import { Header } from '../base/serachHeader';
import { OrderSearch } from './search'

export const Orders = () => {

    let alertMessage = useSelector(state => state.alert.message)
    let alerType = useSelector(state => state.alert.type)
    const [modalShow, setModalShow] = useState(false)
    const dispatch = useDispatch()
    const orders = useSelector(state => state.getOrders.orders)
    let orderLoading = useSelector(state => state.getOrders.loading)

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
                {
                alertMessage && 
                <>
                <div className="modal-backdrop show"></div>
                    <Row className="justify-content-center text-center ">
                        <Alert variant={alerType}>
                            {alertMessage}
                        </Alert> 
                    </Row>
                </>
                }
                {
                orderLoading &&
                    <Row>
                        <Col className="col-3 mt-2 m-auto ">
                            <Spinner className="m-auto d-block" animation="border" />
                        </Col>
                    </Row>
                }
                { 
                    (orders.length === 0 && !orderLoading) ? (
                        <Row className="justify-content-center align-items-center no-result-filter">
                            <Col className="col-8 text-center">
                                هیج نتیجه ای یافت نشد!
                            </Col>
                        </Row>
                    ) : null 
                }
                {(orders.length > 0) ? 
                    (orders.map((order, index) => 
                        <Card key={index} className="m-auto mt-3 bg-light productCard border-0 lh-lg" >
                            <Card.Body className="pb-0 ps-1 rounded-3 text-gray">
                                <Row className="p-0 ps-2 m-0 ">
                                    <Card className="background-blue border-0 customer-round">
                                        <Card.Body className="pe-0 ps-0 ">
                                            <Row>
                                                <Col>
                                                    <Card.Text>
                                                    تاریخ عضویت : <span>{persianJs(moment.from(order.createdAt, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')).englishNumber().toString()}</span>
                                                    </Card.Text>
                                                </Col>
                                                <Col>
                                                    <Card.Text>
                                                    ساعت : <span>{persianJs(moment.from(order.createdAt, 'HH:mm').locale('fa').format('HH:mm')).englishNumber().toString()}</span>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
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
                                                        موبایل: <span>{persianJs(order.customer.mobile).englishNumber().toString()}</span>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Row>
                                <Row className="mt-2">
                                    <Card.Text className="text-bold">
                                        سفارشات
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
                                                                <td>{persianJs(item.name).englishNumber().toString()}</td>
                                                                <td>{persianJs(item.quantity * item.sellingPrice).englishNumber().toString()} تومان</td>
                                                                <td>{persianJs(item.quantity).englishNumber().toString()}</td>
                                                            </tr>
                                                        )
                                                    })
                                                
                                            : null
                                        }
                                        <tr className="border-top-blue">
                                            <td>جمع کل:</td>
                                            <td className="fs-6">{persianJs(getTotalPrice(order.products)).englishNumber().toString()} تومان</td>
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
