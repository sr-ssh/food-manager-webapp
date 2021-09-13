import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../../actions';
import { Form , Button , Row , Col, Modal, Spinner, Alert, Dropdown } from 'react-bootstrap';
import persianJs from 'persianjs/persian.min';

import closeIcon from '../../assets/images/close.svg'
import spinnerIcon from './../../assets/images/sppiner.svg'


export const EditProduct = (props) => {
    const [dimStatus, setDimStatus] = useState(false)
    const [selectedItem, setItem] = useState(-1)
    const productTypes = useSelector(state => state.getProductTypes.productTypes)
    const [newProduct, setnewProduct] = useState(props.product)
    const editProductLoading = useSelector(state => state.editProduct.loading)
    const alert = useSelector(state => state.alert)
    const dispatch = useDispatch()

    const handleDropdown = (item) => {
        setItem(item.name)
        setnewProduct({...newProduct, "typeId": item._id})
    }

    let handleChange = (e) => {
        let { id, value } = e.target;
        if(id === 'price' && value.length)
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
        setItem(-1)
        props.product.size && setnewProduct({
            _id: props.product._id,
            active: props.product.active,
            name: props.product.name,
            typeId: props.product.type?._id,
            img: props.product.img,
            price: props.product.size[0].price,
            discount : props.product.size[0].discount,
            description: props.product.description,
            supply: props.product.supply
        })
        dispatch(productActions.getProductTypes())
    }, [dispatch, props.product])


    return (
       <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered className="mx-3 order-serach-modal"
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
                                    {selectedItem !== -1 ? <span>{selectedItem}</span> : props.product?.type?.name}
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
                        {props.product.size && console.log(props.product.size[0])}
                        <Col className="col-6 order-filter-input">
                            <Form.Group controlId="price">
                                <Form.Label className="pe-3">قیمت</Form.Label>
                                <Form.Control className="order-input" type="number" min="0" defaultValue={props.product.size && props.product.size[0].price} onChange={handleChange} required/>
                            </Form.Group>
                        </Col>
                        <Col className="col-6 order-filter-input">
                            <Form.Group controlId="discount">
                                <Form.Label className="pe-3">تخفیف</Form.Label>
                                <Form.Control className="order-input" type="number" min="0" defaultValue={props.product.size && props.product.size[0].discount} onChange={handleChange} required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="supply" className="order-filter-input mt-3">
                                <Form.Label className="pe-3">موجودی</Form.Label>
                                <Form.Control className="order-input border-0 h-100" type="number" defaultValue={props.product.supply} rows={6} onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="img" className="order-filter-input mt-3">
                                <Form.Label className="pe-3">تصویر</Form.Label>
                                <Form.Control className="order-input border-0 h-100" type="text" defaultValue={props.product.img} rows={6} onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row rows={10}>
                        <Col rows={10}>
                            <Form.Group controlId="description" className="order-filter-input mt-3">
                                <Form.Label className="pe-3">توضیحات</Form.Label>
                                <Form.Control className="order-input border-0 h-100" as="textarea" defaultValue={props.product.description} rows={10} onChange={handleChange}/>
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
