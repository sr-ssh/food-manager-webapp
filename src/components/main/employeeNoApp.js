import React, { useState } from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import persianJs from 'persianjs/persian.min';

//icons
import cancelIcon from '../../assets/images/Products/pluss.svg';
import { employeeActions } from '../../actions/employeeActions';

//components
import { AddEmployer } from './addEmployer';

export const EmployeeNoApp = () => {
    
    let employer = JSON.parse(localStorage.getItem('employer'));
    let applicationId = JSON.parse(localStorage.getItem('applicationId'));
    const [modalShow, setModalShow] = useState(false)
    const dispatch = useDispatch()

    
    return (
        <>
        <Row className="mb-3 pe-3 justify-content-center mt-4">
            <Col xs={10} className="me-4 ms-auto mt-3">
                <Card className="border-0 lh-lg main-card me-2 py-3" >
                    <Card.Body className="fs-6 fw-bold me-2">
                        <Row>
                            <Card.Text>
                                برای کارمند شدن لطفا اول درخواست بدهید
                            </Card.Text>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row className="my-3 pe-3 justify-content-center">
                <Col  xs={10}  className="">
                    <Button  className="no-product-main-button w-100 me-auto d-block p-2 px-0"  type="submit"  onClick={e  => setModalShow(true)}>
                        <Row>
                            <Col xs={3} className="ms-0 me-4 pe-4"><img src={cancelIcon} alt="add-order-icon"  width="43px"/></Col>
                            <Col className="fs-6 me-0 text-end pt-2 pe-2">ارسال درخواست</Col>
                        </Row>
                    </Button>
                </Col>
        </Row>
        <AddEmployer show={modalShow} onHide={() => setModalShow(false)} />       
        </>
    )
}