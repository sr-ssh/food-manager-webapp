import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { orderActions } from '../../actions';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'

export const OrderSearch = (props) => {

    const [inputs, setInputs] = useState({})
    const dispatch = useDispatch()


    const formHandeler = (e) => {
        e.preventDefault();
        dispatch(orderActions.setFilter(inputs))
    }


    return(
         <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="bg-success">
                <Row>
                    <Col className="bg-danger">
                        نام مشتری
                    </Col>
                </Row>
                <Button onClick={props.onHide}>جست و جو</Button>
            </Modal.Body>
        </Modal>
    );
}