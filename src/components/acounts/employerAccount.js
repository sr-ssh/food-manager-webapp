import React, { useState } from 'react'
import { Row , Col, Card } from 'react-bootstrap';
import persianJs from 'persianjs/persian.min';

//icons
import editIcon from '../../assets/images/Products/edit.svg'

//components
import { EditField } from './editField.js'


export const EmployerAccount = ({user}) => {

    const [editModalShow, setEditModalShow] = useState(false)
    const [input, setInput] = useState('')

    const edit = (name) => {
        setInput(user.family)
        setEditModalShow(true); 
        console.log(input)
    }

    return (
        <>
        <Card.Text className="pt-1">
            <Row className="ms-0 align-items-center">
                <Col xs={2}>
                    نام : 
                </Col>
                <Col className="pe-0">
                    <span className="fw-bold">{user.family && persianJs(user.family).englishNumber().toString()}</span>
                </Col>
                <Col className="text-start my-0" onClick={() => edit(user.family)}>
                    <img className="" src={editIcon} height="34px" alt="edit-icon" />
                </Col>
            </Row>
        </Card.Text>

        <Card.Text className="pt-1">
            <Row className="ms-0 align-items-center">
                <Col xs={3}>
                    موبایل :        
                </Col>
                <Col className="pe-0">
                    <span className="fw-bold">{user.mobile && persianJs(user.mobile).englishNumber().toString()}</span>
                </Col>
            </Row>
        </Card.Text>

        <Card.Text className="pt-1">
            <Row className="ms-0 align-items-center">
                <Col xs={3}>
                    ایمیل :  
                </Col>
                <Col className="pe-0">
                    <span className="fw-bold">{user.email}</span>
                </Col>
            </Row>
        </Card.Text>

        <Card.Text className="pt-1">
            <Row className="ms-0 align-items-center">
                <Col xs={4}>
                    نام شرکت : 
                </Col>
                <Col className="pe-0">
                    <span className="fw-bold">{user.company && persianJs(user.company).englishNumber().toString()}</span>
                </Col>
                <Col className="text-start my-0" onClick={() => {setEditModalShow(true); setInput(user.company)}}>
                    <img className="" src={editIcon} height="34px" alt="edit-icon" />
                </Col>
            </Row>
        </Card.Text>

        <Card.Text className="pt-1">
            <Row className="ms-0 align-items-center">
                <Col xs={4}>
                    آدرس شرکت : 
                </Col>
                <Col xs={6} className="pe-0">
                    <span className="fw-bold">{user.address && persianJs(user.address).englishNumber().toString()}</span>
                </Col>
                <Col className="text-start my-0" onClick={() => {setEditModalShow(true); setInput(user.address)}}>
                    <img className="" src={editIcon} height="34px" alt="edit-icon" />
                </Col>
            </Row>
        </Card.Text>

        <Card.Text className="pt-1">
            <Row className="ms-0 align-items-center">
                <Col xs={2}>
                    نوع : 
                </Col>
                <Col className="pe-0">
                    <span className="fw-bold">کارفرما</span>
                </Col>
            </Row>
            
        </Card.Text>
        <EditField show={editModalShow} onHide={() => setEditModalShow(false)} input={input}/>
        </>
    )
}
