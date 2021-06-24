import React from 'react';
import moment from 'jalali-moment';
import { Card , Row , Col } from 'react-bootstrap';

export const Discount = ({discount}) => {
    return(
        <Card className="m-auto mt-3 bg-light productCard border-0 lh-lg pb-2" >
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
                        <Col dir="ltr">
                            <Card.Text>
                                درصد: <span>{discount.percentage}</span>
                            </Card.Text>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                            <Card.Text>
                                sms 
                            </Card.Text>
                        </Col>
                    </Row>
                </Row>
            </Card.Body>
        </Card>
    )
}

