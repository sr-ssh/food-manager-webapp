import React, { useState, useEffect } from 'react'
import { Header } from '../base/applicationsHeader'
import { useDispatch, useSelector } from 'react-redux'
import { employeeActions } from '../../../actions/employeeActions'
import { Row, Container, Col, Spinner } from 'react-bootstrap'

import { EditEmployee } from './editEmployee'
import { RemoveEmployee } from './removeEmployee'
import { Employee } from './employee'

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
            <Container className="m-auto">
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
                        <Employee key={index} item={item} setRemoveModalShow={setRemoveModalShow} setEmployee={setEmployee} setEditModalShow={setEditModalShow} />
                    ))    
                    
                    : null}
            </Container>
            <EditEmployee show={editModalShow} onHide={() => setEditModalShow(false)} employee={employee} />
            <RemoveEmployee show={removeModalShow} onHide={() => setRemoveModalShow(false)} employee={employee} />
        </div>
    )
}
