import React from 'react'
import { Modal, Row, Col, Form, Button, Spinner,Alert  } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { orderActions } from '../../actions'

import closeIcon from '../../assets/images/close.svg'

export const CancelOrder = (props) => {
    const dispatch = useDispatch()
    
    let alert = useSelector(state => state.alert)
    let editLoading = useSelector(state => state.editOrderStatus.loading)

    const editHandler = (e) => {
        setTimeout(() => {
            props.onHide(false)
        }, 700);
    }

    const formHandler = (e) => {
        e.preventDefault()
        dispatch(orderActions.editOrderStatus(props.order.id, "2"))
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
                    <Col className="text-center">
                        <span className="">آیا مطمئنید؟</span>
                    </Col>
                </Row>
                <Form onSubmit={formHandler} className="d-flex justify-content-around">
                    <Button className="fw-bold order-submit border-0 w-25 mt-4 text-light" onClick={e => props.onHide(false)} size="lg" block>
                        خیر
                    </Button>
                    {
                        editLoading ? (
                            <Button className="fw-bold order-submit border-0 w-50 mt-4"  onClick={e => editHandler(e)} size="lg" type="submit" disabled>
                                <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                />
                                در حال حذف...
                            </Button>
                        ) : (
                            <Button className="fw-bold order-submit border-0 bg-danger text-light w-25 mt-4" size="lg" onClick={e => editHandler(e)} type="submit" block>
                                بله
                            </Button>
                        )
                    }
                </Form>
                
            </Modal.Body>
            
        </Modal>
    )
}
