import React, { useState, useEffect } from 'react'
import { Header } from '../base/employeeHeader'
import { useDispatch, useSelector } from 'react-redux'
import { employeeActions } from '../../actions/employeeActions'
import { Row, Button, Container, Card, Col, Spinner } from 'react-bootstrap'
import moment from 'jalali-moment';
import persianJs from 'persianjs/persian.min';

import { AddEmployee } from './addEmployee'
import { EditEmployee } from './editEmployee'
import { RemoveEmployee } from './removeEmployee'

import editIcon from '../../assets/images/Products/edit.svg'
import deleteIcon from '../../assets/images/discounts/deletee.svg'

export const Employees = () => {
    const [addModalShow, setAddModalShow] = useState(false)
    const [editModalShow, setEditModalShow] = useState(false)
    const [removeModalShow, setRemoveModalShow] = useState(false)
    const [employee, setEmployee] = useState({})
    
    let employees = useSelector(state => state.getEmployees.employees)
    let getEmployeesLoading = useSelector(state => state.getEmployees.loading)
    const dispatch = useDispatch()
    useEffect(() => {
        if(!addModalShow && !editModalShow && !removeModalShow)
            dispatch(employeeActions.getEmployees())
    }, [dispatch, addModalShow, editModalShow, removeModalShow])

    return (
        <div className="product-page">
            <Header title="کارمندان" backLink="/dashboard" setModalShow={setAddModalShow} />
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
                        <Card key={index} className="m-auto mt-3 bg-light productCard" >
                            <Card.Body className="pb-0 ps-1 rounded-3">
                                <Card.Text className="pt-1">
                                    <span style={{"color": "var(--text-color-one)"}}>نام : </span>{persianJs(item.family).englishNumber().toString()}
                                </Card.Text>
                                <Card.Text className="pt-1">
                                    <span style={{"color": "var(--text-color-one)"}}>شماره تماس : </span>{persianJs(item.mobile).englishNumber().toString()}
                                </Card.Text>
                                <Card.Text className="pt-1">
                                    <span style={{"color": "var(--text-color-one)"}}>سطح دسترسی: </span>
                                    {
                                        item.permission.map(per => {
                                            if(per.status) {
                                                switch (per.no) {
                                                    case 1:
                                                        return <span> ثبت سفارش </span>
                                                    case 2:
                                                        return <span> سفارش ها </span>
                                                    case 3:
                                                        return <span> یادآوری </span>
                                                    case 4:
                                                        return <span> محصولات </span>
                                                    case 5:
                                                        return <span> مشتریان </span>
                                                    case 6:
                                                        return <span> کارمندان </span>
                                                    default:
                                                        return
                                                }
                            
                                            }
                                        }) 
                                    }
                                </Card.Text>
                                
                                <Row className="justify-content-end">
                                    <Card.Link className="d-flex justify-content-center editLogo" onClick={() => {setRemoveModalShow(true); setEmployee(item)}}>
                                        <img className="" src={deleteIcon} height="35px" alt="delete-icon" />
                                    </Card.Link>
                                    <Card.Link className="d-flex justify-content-center editLogo" onClick={() => {setEditModalShow(true); setEmployee(item)}}>
                                        <img className="" src={editIcon} height="42px" alt="edit-icon" />
                                    </Card.Link>
                                </Row>
{/*                                 <Card.Link className="editLogo bg-danger" onClick={() => {setEditModalShow(true); setEmployee(item)}}>
                                    <img className="d-block me-auto" src={editIcon} height="42px" alt="back-icon" />
                                </Card.Link> */}
                            </Card.Body>
                        </Card>    
                    ))    
                    
                    : null}
            </Container>
            <AddEmployee show={addModalShow} onHide={() => setAddModalShow(false)} />
            <EditEmployee show={editModalShow} onHide={() => setEditModalShow(false)} employee={employee} />
            <RemoveEmployee show={removeModalShow} onHide={() => setRemoveModalShow(false)} employee={employee} />
        </div>
    )
}
