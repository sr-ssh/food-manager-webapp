import React, { useState, useEffect } from 'react'
import { Header } from '../base/applicationsHeader'
import { useDispatch, useSelector } from 'react-redux'
import { employeeActions } from '../../../actions/employeeActions'
import { Row, Container, Card, Col, Spinner } from 'react-bootstrap'
import persianJs from 'persianjs/persian.min';
import { translate } from '../../../helpers';


import { EditEmployee } from './editEmployee'
import { RemoveEmployee } from './removeEmployee'

import editIcon from '../../assets/images/Products/edit.svg'
import deleteIcon from '../../assets/images/discounts/deletee.svg'
import checkIcon from '../../assets/images/tick.svg'

export const Employees = () => {
    const [editModalShow, setEditModalShow] = useState(false)
    const [removeModalShow, setRemoveModalShow] = useState(false)
    const [employee, setEmployee] = useState({})
    
    let employees = useSelector(state => state.getEmployees.employees)
    let getEmployeesLoading = useSelector(state => state.getEmployees.loading)
    const dispatch = useDispatch()
    useEffect(() => {
        if(!editModalShow && !removeModalShow)
            dispatch(employeeActions.getEmployees())
    }, [dispatch, editModalShow, removeModalShow])

    return (
        <div className="product-page">
            <Header title="کارمندان" backLink="/dashboard" addLink="/employee/add" />
            <Container className="m-auto emplyees-text-gray">
                {  
                getEmployeesLoading &&
                    <Row>
                        <Col className="col-3 mt-2 m-auto ">
                            <Spinner className="m-auto d-block" animation="border" />
                        </Col>
                    </Row>
                }
                {employees ? 
                    (employees.map((item, index) => 
                        <Card key={index} className="m-auto mt-3 productCard" >
                            <Card.Body className="pb-0 ps-1 rounded-3 ">
                                <Card.Text className="pt-1">
                                    نام : <span>{item.family && persianJs(item.family).englishNumber().toString()}</span>
                                </Card.Text>
                                <Card.Text className="pt-1">
                                    موبایل : <span>{item.mobile && persianJs(item.mobile).englishNumber().toString()}</span>
                                </Card.Text>
                                <Row>
                                    <Col xs={4} className="ps-0">
                                        <Card.Text className="pt-1">
                                            سطح دسترسی: 
                                        </Card.Text>
                                    </Col>
                                    <Col className="pe-0">
                                        <Card.Text className="pt-1">
                                            {
                                                Object.keys(item.permission).map(per => 
                                                    item.permission[per]
                                                    ? <Col><img src={checkIcon} height="27px" alt="tick-icon" className="application-check-icon"/> <span>  {translate(per)}</span></Col>
                                                    : null
                                                ) 
                                            }
                                        </Card.Text>
                                    </Col>
                                </Row>
                                
                                
                                <Row className="justify-content-end">
                                    <Card.Link className="d-flex justify-content-center editLogo" onClick={() => {setRemoveModalShow(true); setEmployee(item)}}>
                                        <img className="" src={deleteIcon} height="29px" alt="delete-icon" />
                                    </Card.Link>
                                    <Card.Link className="d-flex justify-content-center editLogo" onClick={() => {setEditModalShow(true); setEmployee(item)}}>
                                        <img className="" src={editIcon} height="39px" alt="edit-icon" />
                                    </Card.Link>
                                </Row>
                            </Card.Body>
                        </Card>    
                    ))    
                    
                    : null}
            </Container>
            <EditEmployee show={editModalShow} onHide={() => setEditModalShow(false)} employee={employee} />
            <RemoveEmployee show={removeModalShow} onHide={() => setRemoveModalShow(false)} employee={employee} />
        </div>
    )
}
