import React, { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../../actions';
import { Form , Button , Row , Col, Modal, Spinner, Alert, Dropdown } from 'react-bootstrap';
import persianJs from 'persianjs/persian.min';

// icons
import closeIcon from '../../assets/images/close.svg'
import spinnerIcon from './../../assets/images/sppiner.svg'


export const AddProduct = (props) => {
    
    const [dimStatus, setDimStatus] = useState(false)
    const [product, setProduct] = useState({})
    const [selectedItem, setItem] = useState(-1)
    const addProductLoading = useSelector(state => state.addProduct.loading)
    const productTypes = useSelector(state => state.getProductTypes.productTypes)
    const alert = useSelector(state => state.alert)
    const dispatch = useDispatch()

    const handleDropdown = (item) => {
        setItem(item.name)
        setProduct({...product, "typeId": item._id})
    }

    let handleChange = (e) => {
        if(e.target.id === 'price' && e.target.value.length)
            e.target.value = persianJs(e.target.value).toEnglishNumber().toString();
        setProduct({...product, [e.target.id]: e.target.value})
    }

    let formHandler = (e) => {
        e.preventDefault()
        dispatch(productActions.addProduct(product))
    }

    useEffect(() => {
        setProduct()
        dispatch(productActions.getProductTypes())
    }, [dispatch])


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="mx-3 order-serach-modal"
            >
            <Modal.Body className="add-product px-4 add-discount">
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
                    {/* <Row className="mt-3">
                        <Col className="col-12 order-filter-input">
                            <Form.Group controlId="name">
                                <Form.Label className="pe-3">نام محصول</Form.Label>
                                <Form.Control className="order-input" type="text" value={addProductLoading ? "" : null} onChange={handleChange} required />
                            </Form.Group>
                        </Col>
                    </Row> */}
                    <Row className="my-3 justify-content-between">
                        <Col className="col-6 order-filter-input">
                            <Form.Group controlId="name" className="ms-2">
                                <Form.Label className="pe-2">نام محصول</Form.Label>
                                <Form.Control style={{"width":"94%"}} className="order-input h-100" type="text" name="name" value={addProductLoading ? "" : null} onChange={handleChange} required/>
                            </Form.Group>
                        </Col>
                        <Col className="col-6 order-filter-input">
                            <Row>
                                <Col>
                                    <Form.Label className="pe-2">نوع </Form.Label>
                                </Col>
                                <Col className="ps-4 pt-1 text-start">
                                    <img className="me-auto" src={spinnerIcon} height="13px" alt="spinner-icon"/>
                                </Col>
                            </Row>
                            <Dropdown onToggle={(e) => setDimStatus(!dimStatus)} >
                                <Dropdown.Toggle className="d-flex order-filter-input">
                                    {selectedItem !== -1 ? <span>{selectedItem}</span> : null}
                                </Dropdown.Toggle> 
                                <Dropdown.Menu className={`${dimStatus ? "dim" : ""} dropdownProductMenu`}>
                                    {
                                        productTypes?.map((item, index) => 
                                            <Dropdown.Item key={index} onClick={() => handleDropdown(item)} >
                                                <Col className="text-end pe-1 order-filter-input">{item.name}</Col> 
                                            </Dropdown.Item>
                                            )
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col className="col-12 order-filter-input">
                            <Form.Group controlId="price">
                                <Form.Label className="pe-3">قیمت (تومان)</Form.Label>
                                <Form.Control className="order-input" type="number" min="0" value={addProductLoading ? "" : null} onChange={handleChange} required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col className="col-12 order-filter-input">
                            <Form.Group controlId="img">
                                <Form.Label className="pe-3">تصویر</Form.Label>
                                <Form.Control className="order-input" type="text" min="0" value={addProductLoading ? "" : null} onChange={handleChange} required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="description" className="order-filter-input mt-3">
                                <Form.Label className="pe-3">توضیحات</Form.Label>
                                <Form.Control className="order-input border-0 h-100" as="textarea" rows={6} value={addProductLoading ? "" : null} onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {
                                addProductLoading ? (
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
                                        ثبت
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
