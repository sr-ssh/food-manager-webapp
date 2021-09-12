import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../../actions';
import { Form , Button , Row , Col, Modal, Spinner, Alert } from 'react-bootstrap';
import persianJs from 'persianjs/persian.min';

import closeIcon from '../../assets/images/close.svg'

export const EditProduct = (props) => {
    const [newProduct, setnewProduct] = useState(props.product)
    const editProductLoading = useSelector(state => state.editProduct.loading)
    const alert = useSelector(state => state.alert)
    const dispatch = useDispatch()

    let handleChange = (e) => {
        let { id, value } = e.target;
        if(id === 'sellingPrice' && value.length)
            value = persianJs(value).toEnglishNumber().toString();
        if(id === 'active1')
            setnewProduct({...newProduct, active: true})
        else if (id === 'active0')
            setnewProduct({...newProduct, active: false})
        else setnewProduct({...newProduct, [id]: value})
    }

    let formHandler = (e) => {
        e.preventDefault()
        dispatch(productActions.editProduct(newProduct))
    }

    useEffect(() => {
        setnewProduct(props.product)
    }, [props.product])


    return (
       <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered className="mx-3 order-serach-modal"
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
                <Form onSubmit={formHandler} >
                    <Row className="my-3 mb-4 justify-content-center">
                        <Col className="ms-3">
                            <Form.Group className="fw-bold product-checkbox" onChange={handleChange}>
                                <Form.Check.Input name="activity" id="active1" defaultChecked={props.product.active} inline type="radio" isValid/>
                                <Form.Check.Label htmlFor="active1" inline className="me-1">فعال</Form.Check.Label>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="fw-bold product-checkbox" onChange={handleChange}>
                                <Form.Check.Input name="activity" id="active0" defaultChecked={!props.product.active} inline type="radio" isInvalid />
                                <Form.Check.Label htmlFor="active0" inline className="me-1">غیر فعال</Form.Check.Label>
                            </Form.Group>
                        </Col> 
                    </Row>
                    <Row className="mt-3">
                        <Col className="col-6 order-filter-input">
                            <Form.Group controlId="name">
                                <Form.Label className="pe-3">نام محصول</Form.Label>
                                <Form.Control className="order-input" type="text" defaultValue={props.product.name} onChange={handleChange} required/>
                            </Form.Group>
                        </Col>
                        <Col className="col-6 order-filter-input">
                            <Form.Group controlId="sellingPrice">
                                <Form.Label className="pe-3">قیمت</Form.Label>
                                <Form.Control className="order-input" type="number" min="0" defaultValue={props.product.sellingPrice} onChange={handleChange} required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="description" className="order-filter-input mt-3">
                                <Form.Label className="pe-3">توضیحات</Form.Label>
                                <Form.Control className="order-input border-0 h-100" as="textarea" defaultValue={props.product.description} rows={6} onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {
                                editProductLoading ? (
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
                        </Col>
                    </Row>
                </Form>
                
            </Modal.Body>
            
        </Modal>
    )
}
