import React, { useDebugValue, useState } from 'react'
import { Row, Card, Col } from 'react-bootstrap'
import persianJs from 'persianjs/persian.min';
import moment from 'jalali-moment';
import Switch from "react-switch";


import editIcon from '../../assets/images/Products/edit-dark.svg'
import deleteIcon from '../../assets/images/discounts/deletee.svg'
import phoneIcon from './../../assets/images/phone.svg'
import operatorIcon from './../../assets/images/employees/operator-happy.svg'
import deliveryIcon from './../../assets/images/employees/deliveryr-happy.svg'
import cookIcon from './../../assets/images/employees/chef-happy-pizza.svg'
import { Toggle } from './toggle';
import { useDispatch } from 'react-redux';
import { employeeActions } from '../../../actions/employeeActions';


export const Employee = ({key, item, setRemoveModalShow, setEmployee, setEditModalShow}) => {

    const dispatch = useDispatch()
    const blockUnblockEmployee = () => {
        dispatch(employeeActions.blockUnblockEmployee({_id: item._id}))
    }
    
    return (
        <Card  className="m-auto mt-3 productCard employee--card mb-3 pb-3 border-0" >
            <Card.Title>
                <Row className="px-3 py-2 fs-7 align-items-center">
                    <Col>
                        <Card.Text className="pt-1">
                            <span>{item.family && persianJs(item.family).englishNumber().toString()}</span>
                        </Card.Text>
                    </Col>
                    <Col className="px-0">
                        <Card.Text className="pt-1">
                            <span className="text-grey fs-9">استخدام :</span>
                            <span className="pe-3">{item.createdAt && persianJs(moment.from(item.createdAt, 'YYYY/MM/DD').locale('fa').format('DD MMMM YYYY')).englishNumber().toString()}</span>
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Title>
            <Card.Body className="pb-0 pe-2 rounded-3 pt-2 fs-6-sm">
                <Row >
                    <Col>
                        <Card.Text className="pt-1">
                            <img className="" src={phoneIcon} height="20px" alt="edit-icon" />
                            <span className="pe-2">{item.mobile && persianJs(item.mobile).englishNumber().toString()}</span>
                        </Card.Text>
                    </Col>
                    <Col className="text-center">
                        <Card.Text>
                            {
                                item.type.status === 1
                                ? "manager"
                                : item.type.status === 2 
                                ? <img className="" src={operatorIcon} height="26px" alt="edit-icon" />
                                : item.type.status === 3
                                ? <img className="" src={cookIcon} height="30px" alt="edit-icon" />
                                : item.type.status === 4
                                ? <img className="" src={deliveryIcon} height="30px" alt="edit-icon" />
                                : null
                            }
                            <span className="pe-3">{item.type.persianName}</span>
                        </Card.Text>
                    </Col>
                </Row>
                <Row className="justify-content-between mt-3 ps-2 pe-1">
                    <Col xs={6} onClick={() => blockUnblockEmployee()}>
                        <Toggle active={item.active}/>
                    </Col>
                    <Col xs={3} className="me-4 editLogo--employee">
                        <Card.Link className="d-flex justify-content-center pt-2 " onClick={() => {setRemoveModalShow(true); setEmployee(item)}}>
                        <img className="" src={deleteIcon} height="26px" alt="delete-icon" />
                    </Card.Link>
                    </Col>
                    <Col xs={3} className="editLogo--employee">
                        <Card.Link className="d-flex justify-content-center pt-1" onClick={() => {setEditModalShow(true); setEmployee(item)}}>
                        <img className="" src={editIcon} height="36px" alt="edit-icon" />
                        </Card.Link>
                    </Col>
                </Row>
            </Card.Body>
        </Card> 
    )
}
