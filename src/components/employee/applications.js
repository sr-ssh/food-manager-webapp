import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Col, Card , Row, Button } from 'react-bootstrap';
import persianJs from 'persianjs/persian.min';
import moment from 'jalali-moment';

//actions
import { employeeActions } from '../../actions/employeeActions';

//components
import { Header } from '../base/header2';

//icons
import cancelIcon from './../../assets/images/employees/cancel.svg'
import tickIcon from './../../assets/images/employees/tick.svg'

export const Applications = () => {

    let applications = useSelector(state => state.getApplications.applications)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(employeeActions.getApplications())
    }, [dispatch])

    return(
        <>
        <div className="finance-page orders">
            <Header title="درخواست ها" backLink="/employees" />
            <Container fluid className="m-auto">
                {
                    applications
                    ? applications.map((item, index) => 
                        <Card className="m-auto mt-3 productCard border-0 lh-lg pb-2" >
                            <Card.Body className="pb-0 ps-0 text-gray">
                                <Row className="pe-2">
                                    <Row className="mt-2">
                                        <Col>
                                            <Card.Text>
                                                نام : <span>{item.employee.family}</span>
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col>
                                            <Card.Text>
                                                موبایل : <span>{item.employee.mobile}</span>
                                            </Card.Text>
                                        </Col>
                                        <Col>
                                            <Card.Text>
                                                تاریخ : <span>{item.createdAt && persianJs(moment.from(item.createdAt, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')).englishNumber().toString()}</span>
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button className="border-0" type="button" >
                                            <img className="d-flex m-auto" src={cancelIcon} alt="close-btn"/>
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button className="border-0" type="button" >
                                            <img className="d-flex m-auto" src={tickIcon} alt="close-btn" />
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    )
                    : <p>درخواستی موجود نمی باشد</p>
                }
               
            </Container>
        </div>
        </>
    )
}