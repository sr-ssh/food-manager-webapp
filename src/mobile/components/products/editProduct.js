import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../../actions';
import { Form , Button , Row , Col, Modal, Spinner, Alert, Dropdown } from 'react-bootstrap';
import persianJs from 'persianjs/persian.min';

// icons
import closeIcon from '../../assets/images/close.svg'
import spinnerIcon from './../../assets/images/sppiner.svg'
import plusIcon from './../../assets/images/Products/pluss.svg'


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
            centered
            className="mx-3 order-serach-modal"
            >
            <Modal.Body className="add-product px-3 add-discount ">
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
                    <Row className="mt-0 mb-3 justify-content-around mx-4 px-2">
                            <Col xs={5} className="ms-3">
                                <Form.Group className="fw-bold product-checkbox" onChange={handleChange}>
                                    <Form.Check.Input name="activity" id="active1" defaultChecked={props.product.active} inline type="radio" isValid/>
                                    <Form.Check.Label htmlFor="active1" inline className="me-2 fs-6">فعال</Form.Check.Label>
                                </Form.Group>
                            </Col>
                            <Col x={5} className="px-0">
                                <Form.Group className="fw-bold product-checkbox" onChange={handleChange}>
                                    <Form.Check.Input name="activity" id="active0" defaultChecked={!props.product.active} inline type="radio" isInvalid />
                                    <Form.Check.Label htmlFor="active0" inline className="me-2 fs-6">غیر فعال</Form.Check.Label>
                                </Form.Group>
                            </Col> 
                        </Row>
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
                                    {selectedItem !== -1 ? <span>{selectedItem}</span> : props.product?.type?.name}
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
                                <Form.Control style={{"width":"94%"}} className="order-input h-100 py-3 input-box-shadow" type="text" name="name" defaultValue={props.product.name} onChange={handleChange} required/>
                            </Form.Group>
                        </Col>
                        <Col xs={5} className="order-filter-input px-0 mx-0">
                            <Form.Group controlId="supply" className="ms-2">
                                <Form.Label className="pe-2 fw-normal">تعداد</Form.Label>
                                <span className="supply-placeholder">عدد</span>
                                <Form.Control style={{"width":"94%"}} className="order-input h-100 py-3 input-box-shadow input--placeholder" type="text" name="name" defaultValue={props.product.supply} onChange={handleChange} required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-0 justify-content-between">
                        <Col xs={7} className="order-filter-input ps-0 mx-0">
                            <Form.Group controlId="price">
                                <Form.Label className="pe-2 fw-normal">قیمت</Form.Label>
                                <span className="price--placeholder">تومان</span>
                                <Form.Control style={{"width":"94%"}} className="order-input py-3 h-100 input-box-shadow" type="number" min="0" value={props.product.size && props.product.size[0].price} onChange={handleChange} required/>
                            </Form.Group>
                        </Col>
                        <Col xs={5} className="order-filter-input px-0 mx-0">
                            <Form.Group controlId="price" className="ms-2">
                                <Form.Label className="pe-3 fw-normal">تخفیف</Form.Label>
                                <Form.Control style={{"width":"94%"}} className="order-input py-3 h-100 input-box-shadow" type="number" min="0" value={props.product.size && props.product.size[0].discount} onChange={handleChange} required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="description" className="order-filter-input mt-3">
                                <Form.Label className="pe-3 fw-normal">توضیحات</Form.Label>
                                <Form.Control className="border-0 h-100 input-box-shadow order-input-no-height" as="textarea" rows="3" value={props.product.description} onChange={handleChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {
                                editProductLoading ? (
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
