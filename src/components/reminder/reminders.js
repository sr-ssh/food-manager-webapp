import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reminderActions } from '../../actions';
import { Header } from './../base/header2'
import { Card , Table , Row , Col, Container , Button } from 'react-bootstrap';
import moment from 'jalali-moment';


export const Reminders = () => {

    let reminders = useSelector(state => state.getReminders.reminders)
    const dispatch = useDispatch()

    const getTotalPrice = (order) => {
        let total = 0
        order.map(item => {
            total += item.sellingPrice * item.quantity
        })
        return total
    }

    useEffect(() => {
        dispatch(reminderActions.getReminders());      
    }, [dispatch])

    return(
        <div className="product-page orders">
            <Header title="یادآوری"/>
            <Container className="m-auto">
                {reminders ? 
                    (reminders.map((reminder, index) => 
                        <Card key={index} className="m-auto mt-3 bg-light productCard border-0 lh-lg" >
                            <Card.Body className="pb-0 ps-1 rounded-3 text-gray">
                                <Row className="p-0 ps-2 m-0 ">
                                    <Card className="background-blue border-0 customer-round">
                                        <Card.Body className="pe-0 ps-0">
                                            <Row >
                                                <Col>
                                                    <Card.Text>
                                                        <span>{reminder.customer.family}</span>
                                                    </Card.Text>
                                                </Col>
                                                <Col dir="ltr">
                                                    <Card.Text>
                                                        موبایل: <span>{reminder.customer.mobile}</span>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                            <Row className="flex-nowrap mt-2 ">
                                                <Col>
                                                    <Card.Text>
                                                        تاریخ تولد :
                                                    </Card.Text>
                                                </Col>
                                                <Col dir="ltr">
                                                    <Card.Text>
                                                        <span dir="rtl">{moment.from(reminder.customer.birthday, 'YYYY/MM/DD').locale('fa').format('DD MMMM YYYY')}</span>
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
                                            reminder.order.products.length 
                                            ? reminder.order.products.map(item => {
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
                                            <td className="fs-6">{getTotalPrice(reminder.order.products)} تومان</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                            
                                        </tbody>
                                    </Table>
                                </Row>
                                <Row className="px-2 text-start ">
                                    <Col>
                                        <Button className="btn-success reminder-sms-button py-1 border-0" type="submit">
                                            sms
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>    
                    ))    
                    : null}
            </Container>
        </div>
    )
}