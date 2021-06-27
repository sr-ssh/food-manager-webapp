import React, { useEffect, useState } from 'react'
import { Header } from '../base/productHeader';
import { Container, Card, Row, Alert } from 'react-bootstrap';
import { AddProduct } from './addProduct'
import { EditProduct } from './editProduct'
import { useDispatch, useSelector } from 'react-redux'
import { productActions } from '../../actions'
import moment from 'jalali-moment';

import editIcon from '../../assets/images/Products/edit.svg'

export const Products = () => {

    let alertMessage = useSelector(state => state.alert.message)
    let alerType = useSelector(state => state.alert.type)
    
    const [addModalShow, setAddModalShow] = useState(false)
    const [editModalShow, setEditModalShow] = useState(false)
    const [product, setProduct] = useState({})
    const dispatch = useDispatch()
    const products = useSelector(state => state.getProducts.product)
    
    useEffect(() => {
        dispatch(productActions.getProducts())
    }, [dispatch])

    return (
        <div className="product-page">
            <Header title="محصولات" modalShow={addModalShow} setModalShow={setAddModalShow} />
            <Container className="m-auto">
                {
                alertMessage && 
                <Row className="justify-content-center text-center ">
                    <Alert variant={alerType}>
                        {alertMessage}
                    </Alert> 
                </Row>
                }
                {products ? 
                    (products.map((item, index) => 
                        <Card key={index} className="m-auto mt-3 bg-light productCard" >
                            <Card.Body className="pb-0 ps-1 rounded-3">
                                <Card.Title>
                                    {item.active 
                                    ? <div className="activeStatus"><span></span> فعال</div>
                                    : <div className="deActiveStatus"><span></span> غیرفعال</div>}
                                </Card.Title>
                                <Card.Text className="pt-1">
                                    <span style={{"color": "var(--text-color-one)"}}>نام : </span>{item.name}
                                </Card.Text>
                                <Card.Text className="pt-1">
                                    <span style={{"color": "var(--text-color-one)"}}>قیمت فروش : </span>{item.sellingPrice} تومان
                                </Card.Text>
                                <Card.Text className="pt-1">
                                    <span style={{"color": "var(--text-color-one)"}}>تاریخ ویرایش : </span>{moment.from(item.updatedAt, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}
                                </Card.Text>
                                <Card.Text className="pt-1 ps-1">
                                <span style={{"color": "var(--text-color-one)"}}>توضیحات :   </span>{item.description}
                                </Card.Text>
                                <Card.Link className="editLogo w-100 d-block m-auto" onClick={() => {setEditModalShow(true); setProduct(item)}}>
                                    <img className="d-block me-auto" src={editIcon} height="42px" alt="back-icon" />
                                </Card.Link>
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
