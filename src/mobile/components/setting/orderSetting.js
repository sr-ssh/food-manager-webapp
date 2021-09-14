import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Card, Form, Col, Row, Button, Spinner } from 'react-bootstrap'

// Actions
import { settingsActions } from '../../../actions'
// Icons
import editIcon from '../../assets/images/Products/edit.svg'

export const OrderSetting = () => {
    let orderSettings = useSelector(state => state.getOrderSettings.settings)
    let [newSettings, setNewSettings] = useState(useSelector(state => state.getOrderSettings.settings))
    let editOrderSettings = useSelector(state => state.editOrderSettings)
    const dispatch = useDispatch();
    const handleChange = (e) => {
        if (e.target.type === "checkbox" && e.target.id !== "isPayNecessary") {
            setNewSettings(
                {
                    ...newSettings, [e.target.id]: {
                        ...newSettings.[e.target.id],
                        text: newSettings.[e.target.id].text,
                        status: e.target.checked
                    }
                }
            )
            return
        }
        if (e.target.type === "textarea") {
            setNewSettings(
                {
                    ...newSettings, [e.target.id]: {
                        ...newSettings.[e.target.id],
                        text: e.target.value,
                        status: newSettings.[e.target.id].status
                    }
                }
            )
            return
        

        }
        if (e.target.id === "isPayNecessary") {
            setNewSettings({...newSettings, [e.target.id]: e.target.checked})
            return
        }
        if (e.target.type === "number") {
            setNewSettings({...newSettings, [e.target.id]: parseInt(e.target.value)})
            return
        }
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        dispatch(settingsActions.editOrderSettings(newSettings))
    }

    useEffect(() => {
        dispatch(settingsActions.orderSettings())
    }, [dispatch])
    useEffect(() => {
        setNewSettings(orderSettings)
    }, [orderSettings])

console.log(newSettings, orderSettings)
    return (
        <div>
            <Container fluid className="m-0 mt-4 w-100 d-flex  ">
                <Row >
                    <Col className="">
                        {orderSettings ?
                            <Form onSubmit={HandleSubmit} className="order-setting">
                                {orderSettings &&
                                    (<>
                                            <Form.Group controlId="addOrderSms" className="mt-2" >
                                                <Row className="m-0 px-4">
                                                    <Col className="col-auto">
                                                        <Form.Check.Input name="addOrderSms" defaultChecked={orderSettings.addOrderSms.status} onChange={handleChange} className="test" type="checkbox" />
                                                        <span className="check"></span>
                                                    </Col>
                                                    <Col className=" text-end">
                                                        <Form.Check.Label htmlFor="addOrderSms">
                                                            <span className="sms-status-label">اس ام اس ثبت سفارش</span>
                                                        </Form.Check.Label>
                                                    </Col>
                                                </Row>
                                                <Card className="m-3 mt-1 sms-text-container border-0 mt-2">
                                                    <Card.Body >
                                                        <Card.Text className="mb-0">
                                                            <Form.Control  className="settings--text--area fs-6" as="textarea" name="addOrderSms" onChange={handleChange} defaultValue={orderSettings.addOrderSms.text} />
                                                        </Card.Text>
                                                        <Card.Link className="editLogo d-block me-auto">
                                                            <img className="edit-sms-icon d-block me-auto" src={editIcon} height="35px" alt="edit-icon" />
                                                        </Card.Link>
                                                    </Card.Body>
                                                </Card>
                                            </Form.Group>
                                        <Form.Group controlId="inProcessOrderSms" className="mt-2" >
                                                <Row className="m-0 px-4">
                                                    <Col className="col-auto">
                                                        <Form.Check.Input name="inProcessOrderSms" defaultChecked={orderSettings.inProcessOrderSms.status} onChange={handleChange} className="test" type="checkbox" />
                                                        <span className="check"></span>
                                                    </Col>
                                                    <Col className=" text-end">
                                                        <Form.Check.Label htmlFor="inProcessOrderSms">
                                                            <span className="sms-status-label">اس ام اس آماده سازی سفارش</span>
                                                        </Form.Check.Label>
                                                    </Col>
                                                </Row>
                                                <Card className="m-3 mt-1 sms-text-container border-0 mt-2">
                                                    <Card.Body >
                                                        <Card.Text className="mb-0">
                                                            <Form.Control  className="settings--text--area fs-6" as="textarea" name="inProcessOrderSms" onChange={handleChange} defaultValue={orderSettings.inProcessOrderSms.text} />
                                                        </Card.Text>
                                                        <Card.Link className="editLogo d-block me-auto">
                                                            <img className="edit-sms-icon d-block me-auto" src={editIcon} height="35px" alt="edit-icon" />
                                                        </Card.Link>
                                                    </Card.Body>
                                                </Card>
                                            </Form.Group>
                                            <Form.Group controlId="inCookingOrderSms" className="mt-2" >
                                                <Row className="m-0 px-4">
                                                    <Col className="col-auto">
                                                        <Form.Check.Input name="inCookingOrderSms" defaultChecked={orderSettings.inCookingOrderSms.status} onChange={handleChange} className="test" type="checkbox" />
                                                        <span className="check"></span>
                                                    </Col>
                                                    <Col className=" text-end">
                                                        <Form.Check.Label htmlFor="inCookingOrderSms">
                                                            <span className="sms-status-label">اس ام اس پخت سفارش</span>
                                                        </Form.Check.Label>
                                                    </Col>
                                                </Row>
                                                <Card className="m-3 mt-1 sms-text-container border-0 mt-2">
                                                    <Card.Body >
                                                        <Card.Text className="mb-0">
                                                            <Form.Control  className="settings--text--area fs-6" as="textarea" name="inCookingOrderSms" onChange={handleChange} defaultValue={orderSettings.inCookingOrderSms.text} />
                                                        </Card.Text>
                                                        <Card.Link className="editLogo d-block me-auto">
                                                            <img className="edit-sms-icon d-block me-auto" src={editIcon} height="35px" alt="edit-icon" />
                                                        </Card.Link>
                                                    </Card.Body>
                                                </Card>
                                            </Form.Group>
                                        <Form.Group controlId="inServiceOrderSms" className="mt-2" >
                                                <Row className="m-0 px-4">
                                                    <Col className="col-auto">
                                                        <Form.Check.Input name="inServiceOrderSms" defaultChecked={orderSettings.inServiceOrderSms.status} onChange={handleChange} className="test" type="checkbox" />
                                                        <span className="check"></span>
                                                    </Col>
                                                    <Col className=" text-end">
                                                        <Form.Check.Label htmlFor="inServiceOrderSms">
                                                            <span className="sms-status-label">اس ام اس ارسال سفارش</span>
                                                        </Form.Check.Label>
                                                    </Col>
                                                </Row>
                                                <Card className="m-3 mt-1 sms-text-container border-0 mt-2">
                                                    <Card.Body >
                                                        <Card.Text className="mb-0">
                                                            <Form.Control  className="settings--text--area fs-6" as="textarea" name="inServiceOrderSms" onChange={handleChange} defaultValue={orderSettings.inServiceOrderSms.text} />
                                                        </Card.Text>
                                                        <Card.Link className="editLogo d-block me-auto">
                                                            <img className="edit-sms-icon d-block me-auto" src={editIcon} height="35px" alt="edit-icon" />
                                                        </Card.Link>
                                                    </Card.Body>
                                                </Card>
                                            </Form.Group>
                                            <Form.Group controlId="successfullPaymentSms" className="mt-2" >
                                                <Row className="m-0 px-4">
                                                    <Col className="col-auto">
                                                        <Form.Check.Input name="successfullPaymentSms" defaultChecked={orderSettings.successfullPaymentSms.status} onChange={handleChange} className="test" type="checkbox" />
                                                        <span className="check"></span>
                                                    </Col>
                                                    <Col className=" text-end">
                                                        <Form.Check.Label htmlFor="successfullPaymentSms">
                                                            <span className="sms-status-label">اس ام اس پرداخت موفق سفارش</span>
                                                        </Form.Check.Label>
                                                    </Col>
                                                </Row>
                                                <Card className="m-3 mt-1 sms-text-container border-0 mt-2">
                                                    <Card.Body >
                                                        <Card.Text className="mb-0">
                                                            <Form.Control  className="settings--text--area fs-6" as="textarea" name="successfullPaymentSms" onChange={handleChange} defaultValue={orderSettings.successfullPaymentSms.text} />
                                                        </Card.Text>
                                                        <Card.Link className="editLogo d-block me-auto">
                                                            <img className="edit-sms-icon d-block me-auto" src={editIcon} height="35px" alt="edit-icon" />
                                                        </Card.Link>
                                                    </Card.Body>
                                                </Card>
                                            </Form.Group>
                                        <Form.Group controlId="finishedOrderSms" className="mt-2" >
                                                <Row className="m-0 px-4">
                                                    <Col className="col-auto">
                                                        <Form.Check.Input name="finishedOrderSms" defaultChecked={orderSettings.finishedOrderSms.status} onChange={handleChange} className="test" type="checkbox" />
                                                        <span className="check"></span>
                                                    </Col>
                                                    <Col className=" text-end">
                                                        <Form.Check.Label htmlFor="finishedOrderSms">
                                                            <span className="sms-status-label">اس ام اس اتمام سفارش</span>
                                                        </Form.Check.Label>
                                                    </Col>
                                                </Row>
                                                <Card className="m-3 mt-1 sms-text-container border-0 mt-2">
                                                    <Card.Body >
                                                        <Card.Text className="mb-0">
                                                            <Form.Control  className="settings--text--area fs-6" as="textarea" name="finishedOrderSms" onChange={handleChange} defaultValue={orderSettings.finishedOrderSms.text} />
                                                        </Card.Text>
                                                        <Card.Link className="editLogo d-block me-auto">
                                                            <img className="edit-sms-icon d-block me-auto" src={editIcon} height="35px" alt="edit-icon" />
                                                        </Card.Link>
                                                    </Card.Body>
                                                </Card>
                                            </Form.Group>
                                            <Form.Group>
                                                <Row className="mt-3 mx-0">
                                                    <Col xs={4} className="order-setting-field-label  align-self-center ">
                                                        مهلت کنسل سفارش
                                                    </Col>
                                                    <Col className="col-5">
                                                        <Form.Group controlId="confirmTime">
                                                            <Form.Control onChange={handleChange} type="number" className="order-setting-field m-auto"  defaultValue={orderSettings.confirmTime} />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Form.Group>
                                            <Form.Group> 
                                                <Row className="mt-3 mx-0">
                                                    <Col xs={4} className="order-setting-field-label align-self-center">
                                                        مقدار پیش فرض پخت
                                                    </Col>
                                                    <Col className="col-5">
                                                        <Form.Group controlId="cookTime">
                                                            <Form.Control onChange={handleChange} type="number" className="order-setting-field m-auto" defaultValue={orderSettings.cookTime} />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Form.Group>
                                            <Form.Group controlId="isPayNecessary" className="mt-2" >
                                                <Row className="mt-3">
                                                    <Col className="col-auto align-self-center">
                                                        <Form.Check.Input name="isPayNecessary" defaultChecked={orderSettings.isPayNecessary} onChange={handleChange} className="test" type="checkbox" />
                                                        <span className="check"></span>
                                                    </Col>
                                                    <Col className="text-end align-self-center">
                                                        <Form.Check.Label htmlFor="isPayNecessary">
                                                            <span className="sms-status-label">پرداخت در ابتدا</span>
                                                        </Form.Check.Label>
                                                    </Col>
                                                </Row>
                                            </Form.Group>
                                    <Button variant="primary" type="submit" className="edit-sms-submit-btn mb-5 py-3">
                                        {
                                            editOrderSettings.loading ?
                                                <Spinner
                                                    as="span"
                                                    animation="grow"
                                                    size="sm"
                                                    role="status"
                                                    variant="light"
                                                    aria-hidden="true"
                                                />
                                                :
                                                <> ثبت </>
                                        }

                                    </Button>
                                    </>)
                                }

                            </Form>
                            :
                            <Spinner className="m-auto d-block" animation="border" />
                        }
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
