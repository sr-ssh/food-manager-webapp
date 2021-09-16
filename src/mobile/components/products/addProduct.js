import React, { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../../actions';
import { Form , Button , Row , Col, Modal, Spinner, Alert, Dropdown } from 'react-bootstrap';
import persianJs from 'persianjs/persian.min';

// icons
import closeIcon from '../../assets/images/close.svg'
import spinnerIcon from './../../assets/images/sppiner.svg'
import plusIcon from './../../assets/images/Products/pluss.svg'


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
            <Modal.Body className="add-product px-3 add-discount">
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
                    <Row>
                        <Col className="col-5 order-filter-input">
                            <Row>
                                <Col>
                                    <Form.Label className="pe-2 fw-normal">نوع </Form.Label>
                                </Col>
                                <Col className="ps-4 pt-1 text-start">
                                    <img className="me-auto" src={spinnerIcon} height="13px" alt="spinner-icon"/>
                                </Col>
                            </Row>
                            <Dropdown onToggle={(e) => setDimStatus(!dimStatus)} >
                                <Dropdown.Toggle className="w-100 d-flex order-filter-input input-box-shadow">
                                    {selectedItem !== -1 ? <span>{selectedItem}</span> : null}
                                </Dropdown.Toggle> 
                                <Dropdown.Menu className={`${dimStatus ? "dim" : ""} dropdownProductMenu`}>
                                    {
                                        productTypes?.map((item, index) => 
                                            <Dropdown.Item key={index} onClick={() => handleDropdown(item)} >
                                                <Col className="text-end pe-1 order-input">{item.name}</Col> 
                                            </Dropdown.Item>
                                            )
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Button className="fw-bold add-img-btn border-0 w-100 mt-4 px-0 py-0 pb-1" size="lg" type="button" block>
                                <img src={plusIcon} height="30px" alt="plus-icon" />
                                <span className="fs-6-sm fw-bold">اضافه کردن عکس</span>
                            </Button>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-between">
                        <Col xs={7} className="order-filter-input ps-0 mx-0">
                            <Form.Group controlId="name">
                                <Form.Label className="pe-2 fw-normal">نام محصول</Form.Label>
                                <Form.Control style={{"width":"94%"}} className="order-input h-100 py-3 input-box-shadow" type="text" name="name" value={addProductLoading ? "" : null} onChange={handleChange} required/>
                            </Form.Group>
                        </Col>
                        <Col xs={5} className="order-filter-input px-0 mx-0">
                            <Form.Group controlId="name" className="ms-2">
                                <Form.Label className="pe-2 fw-normal">تعداد</Form.Label>
                                <span className="supply-placeholder">عدد</span>
                                <Form.Control style={{"width":"94%"}} className="order-input h-100 py-3 input-box-shadow input--placeholder" type="text" name="name" value={addProductLoading ? "" : null} onChange={handleChange} required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-0 justify-content-between">
                        <Col xs={7} className="order-filter-input ps-0 mx-0">
                            <Form.Group controlId="price">
                                <Form.Label className="pe-2 fw-normal">قیمت</Form.Label>
                                <span className="price--placeholder">تومان</span>
                                <Form.Control style={{"width":"94%"}} className="order-input py-3 h-100 input-box-shadow" type="number" min="0" value={addProductLoading ? "" : null} onChange={handleChange} required/>
                                
                            </Form.Group>
                        </Col>
                        <Col xs={5} className="order-filter-input px-0 mx-0">
                            <Form.Group controlId="price" className="ms-2">
                                <Form.Label className="pe-3 fw-normal">تخفیف</Form.Label>
                                <Form.Control style={{"width":"94%"}} className="order-input py-3 h-100 input-box-shadow" type="number" min="0" value={addProductLoading ? "" : null} onChange={handleChange} required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="description" className="order-filter-input mt-3">
                                <Form.Label className="pe-3 fw-normal">توضیحات</Form.Label>
                                <Form.Control className="border-0 h-100 input-box-shadow order-input-no-height" as="textarea" rows="3" value={addProductLoading ? "" : null} onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {
                                addProductLoading ? (
                                    <Button className="fw-bold product-submit border-0 w-100 mt-4" size="lg" type="submit"  disabled>
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
                                    <Button className="product-submit border-0 w-100 mt-3 fs-6 py-2" size="lg" type="submit" block>
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
