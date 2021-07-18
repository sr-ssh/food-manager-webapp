import React, { useState, useEffect } from 'react'
import { useSelector,  useDispatch} from 'react-redux'
import { Card, Form, Col, Row, Button, Dropdown } from 'react-bootstrap'

import { Header } from '../base/settingHeader'
import { orderActions } from '../../actions'

import editIcon from '../../assets/images/Products/edit.svg'
import tickIcon from '../../assets/images/tick.svg'

export const OrderSetting = () => {
    let orderSms = useSelector(state => state.getOrderSms.sms)
    const [sms, setSms] = useState([])
    const dispatch = useDispatch()

    const handleChange = (e) => {
        console.log('testeststs')
        if(e.target.type === "checkbox") {
            dispatch(orderActions.editNewSms(
                    {...orderSms, [e.target.id]: {
                    ...orderSms.[e.target.id], 
                    text: orderSms.[e.target.id].text, 
                    type: e.target.name, 
                    status: e.target.checked
                }}
            ))
            return
        }


        e.preventDefault()

        dispatch(orderActions.editNewSms({...orderSms, [e.target.id]: {
            ...orderSms.[e.target.id], 
            text: e.target.value, 
            type: e.target.name,
            status: !sms.[e.target.id] ? orderSms.[e.target.id].status : sms[e.target.id].status
        }}))
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
        dispatch(orderActions.getSms())
    }, [dispatch])

    
    return (
        <div>
            <Form onSubmit={handleSubmit} className="order-setting">
                {orderSms &&
                (<>
                    <Form.Group controlId="preSms" className="mt-2" >
                        <Row className="m-0 px-4">
                            <Col className="col-1">
                                <Form.Check.Input name="1" defaultChecked={orderSms.preSms.status} onChange={handleChange} className="test" type="checkbox" />
                                <span className="check"></span>
                            </Col>
                            <Col className="col-8 text-end">
                                <Form.Check.Label htmlFor="preSms">
                                    <span className="sms-status-label">اس ام اس ثبت سفارش</span>
                                </Form.Check.Label>
                            </Col>
                        </Row>
                        <Card className="m-3 mt-1 sms-text-container">
                            <Card.Body>
                                <Card.Text>
                                    {orderSms.preSms.text}
                                </Card.Text>
                                <Card.Link className="editLogo d-block me-auto">
                                    <img className="edit-sms-icon d-block me-auto" src={editIcon} height="35px" alt="edit-icon" />
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Form.Group>

                    <Form.Group controlId="postDeliverySms" className="mt-2" onChange={handleChange}>
                        <Row className="m-0 px-4">
                            <Col className="col-1">
                                <img 
                                className={`${orderSms.postDeliverySms.status ? "edit-permission-tick-show" : "edit-permission-tick-fade" }`} 
                                src={tickIcon} 
                                alt="tick-btn" 
                                height="30px"/>
                                <Form.Check.Input name="2" defaultChecked={orderSms.postDeliverySms.status} type="checkbox" />  
                            </Col>
                            <Col className="col-8 text-end">
                                <Form.Check.Label htmlFor="postDeliverySms">
                                    <span className="sms-status-label">اس ام اس پیک</span>
                                </Form.Check.Label>
                            </Col>
                        </Row>
                        <Card className="m-3 mt-1 sms-text-container">
                            <Card.Body>
                                <Card.Text>
                                    {orderSms.postDeliverySms.text}
                                </Card.Text>
                                <Card.Link className="editLogo d-block me-auto">
                                    <img className="edit-sms-icon d-block me-auto" src={editIcon} height="35px" alt="edit-icon" />
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Form.Group>

                    <Form.Group controlId="postCustomerSms" className="mt-2" onChange={handleChange}> 
                        <Row className="m-0 px-4">
                            <Col className="col-1">
                                <img 
                                className={`${orderSms.postCustomerSms.status ? "edit-permission-tick-show" : "d-none" }`} 
                                src={tickIcon} 
                                alt="tick-btn" 
                                height="30px"/>
                                <Form.Check.Input name="3" defaultChecked={orderSms.postCustomerSms.status} type="checkbox" />  
                            </Col>
                            <Col className="col-8 text-end">
                                <Form.Check.Label className="me-1" htmlFor="postCustomerSms">
                                    <span className="sms-status-label">اس ام اس ارسال محصول</span>
                                </Form.Check.Label>
                            </Col>
                        </Row>
                        <Card className="m-3 mt-1 sms-text-container">
                            <Card.Body>
                                <Card.Text>
                                    {orderSms.postCustomerSms.text}
                                </Card.Text>
                                <Card.Link className="editLogo d-block me-auto">
                                    <img className="edit-sms-icon d-block me-auto" src={editIcon} height="35px" alt="edit-icon" />
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Form.Group>
                    <Form.Group>
                        <Row className="mx-0">
                            <Col className="col-7 order-setting-field-label align-self-center">
                                واحد زمان
                            </Col>
                            <Col className="col-5">
                                <Dropdown className="text-center">
                                    <Dropdown.Toggle className="dropdown-toggle" id="dropdown-basic">
                                        دقیقه
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item >دقیقه</Dropdown.Item>
                                        <Dropdown.Item>ساعت</Dropdown.Item>
                                        <Dropdown.Item >روز</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Row className="mt-3 mx-0">
                            <Col className="col-7 order-setting-field-label  align-self-center">
                                مقدار پیش فرض یاد آوری
                            </Col>
                            <Col className="col-5">
                                <Form.Group controlId="defaultReminder">
                                    <Form.Control type="number" className="order-setting-field m-auto" placeholder="دقیقه"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mt-3 mx-0">
                            <Col className="col-7 order-setting-field-label align-self-center">
                                مقدار پیش فرض آماده سازی
                            </Col>
                            <Col className="col-5">
                                <Form.Group>
                                    <Form.Control type="number" className="order-setting-field m-auto" placeholder="دقیقه" />
                                </Form.Group>
                            </Col>
                        </Row>
                </Form.Group>
                <Button variant="primary" type="submit" className="edit-sms-submit-btn">ثبت</Button>
                </>)
                
                }

            </Form>
        </div>
    )
}
