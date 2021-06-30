import React, { useState, useEffect } from 'react'
import { Modal, Button, Row, Col, Alert, Form, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import persianJs from 'persianjs/persian.min';
import {  employeeActions } from '../../actions/employeeActions'

import closeIcon from '../../assets/images/close.svg'

export const EditEmployee = (props) => {
    const [validated, setValidated] = useState(false)
    const [newPermission, setNewPermission] = useState([])
    const dispatch = useDispatch()
    let editEmployeeLoading = useSelector(state => state.editEmployee.loading)
    let alert = useSelector(state => state.alert)

    const handleChange = (e) => {
        if(e.target.type != "checkbox") {
            e.preventDefault()
        }
        setNewPermission(
            newPermission.map(item =>
            item.no == e.target.id
                ? { ...item, status: e.target.checked }
                : item
            )
        )
        
    }

    const formHandler = (e) => {
        e.preventDefault()
        let employee = {permissions: newPermission, _id: props.employee._id}
        dispatch(employeeActions.editEmployee(employee))
    }
    
    useEffect(() => {
        setNewPermission(props.employee.permission)
    }, [props.employee, props.show])

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="mx-3 order-serach-modal"
            >
            <Modal.Body className="add-product px-4">
                <Button className="border-0 customer-modal-close" type="button"  onClick={e => props.onHide(false)}>
                    <img className="d-flex m-auto customer-modal-close-svg" src={closeIcon} alt="close-btn" />
                </Button>
                {
                    alert.message && 
                    <>
                        <div className="modal-backdrop show"></div>
                        <Row className="justify-content-center text-center ">
                            <Alert variant={alert.type}>
                                {alert.message}
                            </Alert> 
                        </Row>
                    </>
                }
                
                <Row>
                    <Col>
                        <span className="ms-2">نام کارمند:</span>
                        <span>{props.employee.family}</span>
                    </Col>
                </Row>
                <Row className="my-2">
                    <Col>
                        <span className="ms-2">شماره تماس:</span>
                        {props.show && persianJs(props.employee.mobile).englishNumber().toString()}
                    </Col>
                </Row>
                <Form onSubmit={formHandler} noValidate validated={validated}>
                    {
                        props.show && props.employee.permission.map((item, index) => {
                            return(
                                <Form.Group key={index} className="fw-bold" onChange={handleChange}>
                                    <Row className="my-2">
                                        <Col  className="col-6">
                                            <Form.Check.Label className="ms-2" htmlFor="active1">
                                                {(() => {
                                                switch (item.no) {
                                                    case 1:
                                                        return "ثبت سفارش";
                                                        break;
                                                    case 2:
                                                        return "سفارش ها";
                                                        break;
                                                    case 3:
                                                        return "یادآوری";
                                                        break;
                                                    case 4:
                                                        return "محصولات";
                                                        break;
                                                    case 5:
                                                        return "مشتریان";
                                                        break;
                                                    case 6:
                                                        return "کارمندان";
                                                        break;
                                                    default:
                                                        return;
                                                }
                                                })()}
                                            </Form.Check.Label>
                                        </Col>
                                        <Col>
                                            <Form.Check.Input name="no" id={`${item.no}`} defaultChecked={item.status} type="checkbox" />
                                        </Col>
                                    </Row>

                                </Form.Group>
                            )
                        })
                    }
                    {
                        editEmployeeLoading ? (
                            <Button className="fw-bold order-submit border-0 w-100 mt-4" size="lg" type="submit"  disabled>
                                <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                />
                                در حال انجام عملیات...
                            </Button>
                        ) : (
                            <Button className="fw-bold order-submit border-0 w-100 mt-4" size="lg" type="submit" block>
                                ویرایش کردن
                            </Button>
                        )
                    }
                </Form>
                
            </Modal.Body>
            
        </Modal>
    )
}
