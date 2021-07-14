import React, { useState, useEffect } from 'react'
import { useSelector,  useDispatch} from 'react-redux'
import { Card, Form, Col, Row, Button } from 'react-bootstrap'

import { Header } from '../base/settingHeader'
import { orderActions } from '../../actions'

export const OrderSetting = () => {
    let orderSms = useSelector(state => state.getOrderSms.sms)
    const [sms, setSms] = useState([])
    const dispatch = useDispatch()

    const handleChange = (e) => {
        if(e.target.type === "checkbox") {
            setSms({...sms, [e.target.id]: {
                ...sms.[e.target.id], 
                text: orderSms.[e.target.id].text, 
                type: e.target.name, 
                status: e.target.checked
            }})
            return
        }
        e.preventDefault()
        setSms({...sms, [e.target.id]: {
            ...sms.[e.target.id], 
            text: e.target.value, 
            type: e.target.name,
            status: !sms.[e.target.id] ? orderSms.[e.target.id].status : sms[e.target.id].status
        }})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        for (const property in sms) {
            sms[property].type = sms[property].type && parseInt(sms[property].type)
            if(Object.keys(sms[property]).length) {
                dispatch(orderActions.editSms(sms[property]))
            }
        }
    }

    useEffect(() => {
        console.log('useEfffffect')
        dispatch(orderActions.getSms())
    }, [dispatch])

    return (
        <div className="product-page">
            <Card className="text-center">
                <Card.Body>
                    <hr/>
                    <Form onSubmit={handleSubmit} >
                        {orderSms &&
                        (<>
                            <Form.Group controlId="preSms" className="mt-4">
                                <Form.Label>پیامک ثبت سفارش</Form.Label>
                                <Form.Check className="w-25" onChange={handleChange} name="1" defaultChecked={orderSms.preSms.status} type="checkbox" label='وضعیت' />
                                <Form.Control as="textarea" onChange={handleChange} name="1" defaultValue={orderSms.preSms.text} rows={3} />
                            </Form.Group>
                            <Form.Group controlId="postDeliverySms" className="mt-4">
                                <Form.Label>پیامک پیک (راننده):</Form.Label>
                                <Form.Check className="w-25" onChange={handleChange} name="2" defaultChecked={orderSms.postDeliverySms.status} type="checkbox" label='وضعیت' />
                                <Form.Control as="textarea" onChange={handleChange} name="2" defaultValue={orderSms.postDeliverySms.text} rows={3} />
                            </Form.Group>
                            <Form.Group controlId="postCustomerSms" className="mt-4">
                                <Form.Label>پیامک تحویل کالا به پیک:</Form.Label>
                                <Form.Check className="w-25" onChange={handleChange} name="3" defaultChecked={orderSms.postCustomerSms.status} type="checkbox" label='وضعیت' />
                                <Form.Control as="textarea" onChange={handleChange} name="3" defaultValue={orderSms.postCustomerSms.text} rows={3} />
                            </Form.Group>
                        </>)
                        
                        }
                        <Button variant="primary" type="submit">ثبت</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
