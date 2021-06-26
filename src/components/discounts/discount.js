import React from 'react';
import moment from 'jalali-moment';
import { Card , Row , Col } from 'react-bootstrap';
import { history } from '../../helpers';

// icons 
import editIcon from '../../assets/images/discounts/edit.svg'
import deleteIcon from '../../assets/images/discounts/deletee.svg'

export const Discount = ({discount}) => {
    return(
        <Card className="m-auto mt-3 bg-light productCard border-0 lh-lg pb-2" >
        {console.log('======================')}
        {console.log(history)}
            <Card.Body className="pb-0 ps-0 text-gray">
                <Row className="pe-2">
                    <Row className="mt-2">
                        <Col>
                            <Card.Text>
                                نام تخفیف: <span>{discount.name}</span>
                            </Card.Text>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                            <Card.Text>
                                نوع: <span>{discount.type}</span>
                            </Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>
                                درصد: % <span>{discount.percentage}</span>
                            </Card.Text>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col className="col-2">
                            <Card.Text className={`${discount.sms ? "discount-sms-active" : "discount-sms-deActive"}`}>
                                sms 
                            </Card.Text>
                        </Col>

                        <Col className="d-flex justify-content-end mt-3">
                            <Card.Link onClick={e => history.push('/product/edit', discount)} >
                                <img className="ms-1" src={editIcon} height="38px" />
                            </Card.Link>
                            <img src={deleteIcon} height="30px" />
                        </Col>
                    </Row>
                </Row>
            </Card.Body>
        </Card>
    )
}

