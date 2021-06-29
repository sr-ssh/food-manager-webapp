import React, { useState, useEffect } from 'react'
import { Modal, Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { employeeActions } from '../../actions/employeeActions'



import closeIcon from '../../assets/images/close.svg'

export const AddEmployee = (props) => {

    const [ employee, setEmployee ] = useState({})
    const dispatch = useDispatch()

    const formHandler = (e) => {
        e.preventDefault()
        // dispatch(employeeActions.addEmployee(employee))
        dispatch(employeeActions.editEmployee(employee))
    }


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
                <Form onSubmit={formHandler} >
                    اضافه کردن کارمند
                </Form>
                
            </Modal.Body>
            
        </Modal>
    )
}
