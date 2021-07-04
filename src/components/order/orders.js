import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row , Col, Container, Alert, Spinner } from 'react-bootstrap';

import { orderActions } from '../../actions';
import { Header } from '../base/serachHeader';
import { OrderSearch } from './search'
import { Order } from './order';

export const Orders = () => {

    let alertMessage = useSelector(state => state.alert.message)
    let alerType = useSelector(state => state.alert.type)
    const [modalShow, setModalShow] = useState(false)
    const dispatch = useDispatch()
    const orders = useSelector(state => state.getOrders.orders)
    let orderLoading = useSelector(state => state.getOrders.loading)

    useEffect(() => {
        dispatch(orderActions.getOrders())
    }, [dispatch])


    return (
        <div className="product-page orders ">
            <Header title="سفارش ها" modalShow={modalShow} setModalShow={setModalShow}/>
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
                    (orders.map((order, index) => <Order key={index} order={order}/>))    
                    
                    : null}
                
                <OrderSearch show={modalShow} onHide={() => setModalShow(false)} />        
            </Container>
        </div>
    )
}
