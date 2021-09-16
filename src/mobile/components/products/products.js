import React, { useEffect, useState } from 'react'
import { Header } from '../base/productHeader';
import { Container, Card, Row, Alert, Spinner, Col } from 'react-bootstrap';
import { AddProduct } from './addProduct'
import { EditProduct } from './editProduct'
import { useDispatch, useSelector } from 'react-redux'
import { productActions } from '../../../actions'
import moment from 'jalali-moment';
import commaNumber from 'comma-number'

import persianJs from 'persianjs/persian.min';

import editIcon from '../../assets/images/Products/edit.svg'

export const Products = () => {

    
    const [addModalShow, setAddModalShow] = useState(false)
    const [editModalShow, setEditModalShow] = useState(false)
    const [product, setProduct] = useState({})
    const dispatch = useDispatch()
    const products = useSelector(state => state.getProducts.product)
    const productLoading = useSelector(state => state.getProducts.loading)
    const addProductLoading = useSelector(state => state.addProduct.loading)
    
    useEffect(() => {
            if(!editModalShow && !addModalShow)
                dispatch(productActions.getProducts())
    }, [dispatch, editModalShow, addModalShow])

    return (
        <div className="product-page">
            <Header title="محصولات" modalShow={addModalShow} setModalShow={setAddModalShow} />
            <Container className="m-auto">
                {
                (productLoading) &&
                <Row>
                    <Col className="col-3 mt-2 m-auto ">
                        <Spinner className="m-auto d-block" animation="border" />
                    </Col>
                </Row>
                }
                {products ? 
                    (products?.map((item, index) => 
                        <Card key={index} className="m-auto mt-3 border-0 productCard lh-sm" >
                            <Card.Body className="pb-0 ps-1 rounded-3 pt-3">
                                <img src={item.img} alt="product-img" width="120px"  className="product--image"/>
                                <Card.Title>
                                    {item.active 
                                    ? <div className="activeStatus fs-6"><span></span> فعال</div>
                                    : <div className="deActiveStatus fs-6"><span></span> غیرفعال</div>}
                                </Card.Title>
                                <Card.Text className="pt-1 fs-6-sm">
                                    <span style={{ "color": "var(--text-color-one)" }}>نوع :</span>
                                    <span  className="pe-3">{item.type.name && persianJs(item.type.name).englishNumber().toString()}</span>
                                </Card.Text>
                                <Card.Text className="fs-6-sm">
                                    <span style={{"color": "var(--text-color-one)"}}>نام :</span>
                                    <span className="pe-3">{item.name && persianJs(item.name).englishNumber().toString()}</span>
                                </Card.Text>
                                <Card.Text className="fs-6-sm">
                                    <span style={{ "color": "var(--text-color-one)" }}>
                                        قیمت فروش :
                                    </span>
                                    <span className="pe-3">
                                    {item.size[0].price && persianJs(commaNumber(item.size[0].price)).englishNumber().toString()}
                                    </span>
                                    <span className="pe-1">تومان</span>
                                </Card.Text>
                                <Card.Text className="fs-6-sm">
                                    <span style={{ "color": "var(--text-color-one)" }}>تعداد :</span>
                                    <span className="pe-3">{item.supply && persianJs(item.supply).englishNumber().toString()}
                                    </span>
                                    <span className="pe-1">عدد</span>
                                </Card.Text>
                                <Card.Text className="fs-6-sm">
                                    <span style={{"color": "var(--text-color-one)"}}>
                                        تخفیف :
                                    </span>
                                    <span className="pe-3">{item.size[0].discount && persianJs(commaNumber(item.size[0].discount)).englishNumber().toString()}
                                    </span> 
                                    <span className="pe-1">تومان</span>
                                </Card.Text>
                                <Card.Text className="fs-6-sm">
                                    <span style={{"color": "var(--text-color-one)"}}>تاریخ ویرایش :</span>
                                    <span className="pe-3">{item.updatedAt && persianJs(moment.from(item.updatedAt, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')).englishNumber().toString()}
                                    </span>
                                </Card.Text>
                                <Row className="ms-0">
                                    <Col xs={10} className="ps-1 ms-0">
                                        <Card.Text className="fs-6-sm ps-1">
                                        <span style={{"color": "var(--text-color-one)"}}>توضیحات :</span>
                                        <span className="pe-3">{item.description && persianJs(item.description).englishNumber().toString()}
                                        </span>
                                        </Card.Text>
                                    </Col>
                                    <Col xs={2} className="mt-1 ps-0 pb-1">
                                        <Card.Link className="editLogo w-100 d-block m-auto" onClick={() => {setEditModalShow(true); setProduct(item)}}>
                                            <img className="d-block me-auto" src={editIcon} height="36px" alt="back-icon" />
                                        </Card.Link>
                                    </Col>
                                </Row>
                                
                                
                            </Card.Body>
                        </Card>    
                    ))    
                    
                    : null}
                
                     <AddProduct show={addModalShow} onHide={() => setAddModalShow(false)} />
                     <EditProduct show={editModalShow} onHide={() => setEditModalShow(false)} product={product} />
            </Container>
        </div>
    )
}
