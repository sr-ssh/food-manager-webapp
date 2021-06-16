import React, { useEffect } from 'react'
import { Header } from '../base/header';
import { Container, Card } from 'react-bootstrap';
import { AddProduct } from './addProduct'
import { useDispatch, useSelector } from 'react-redux'
import { productActions } from '../../actions'

import editIcon from '../../assets/images/Products/edit.svg'

export const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.getProducts.product)
    
    useEffect(() => {
        dispatch(productActions.getProducts())
    }, [])

    return (
        <div className="order-page">
        {console.log(products)}
            <Header title="محصولات"/>
            <Container className="m-auto">
                {products ? 
                    (products.map(item => 
                        <Card className="m-auto mt-3 bg-light productCard" >
                            <Card.Body className="pb-0 ps-1 rounded-3">
                                <Card.Title>
                                    {item.active 
                                    ? <div className="activeStatus"><span></span> فعال</div>
                                    : <div className="deActiveStatus"><span></span> غیرفعال</div>}
                                </Card.Title>
                                <Card.Text className="pt-1">
                                    نام : {item.name}
                                </Card.Text>
                                <Card.Text className="pt-1">
                                    قیمت فروش : {item.sellingPrice} تومان
                                </Card.Text>
                                <Card.Text className="pt-1">
                                    تاریخ ویرایش : {item.updatedAt}
                                </Card.Text>
                                <Card.Text className="pt-1 ps-1">
                                    توضیحات :   {item.description}
                                </Card.Text>
                                <Card.Link className="editLogo w-100 d-block m-auto" href="#">
                                    <img className="d-block me-auto" src={editIcon} height="42px" alt="back-icon" />
                                </Card.Link>
                            </Card.Body>
                        </Card>    
                    ))    
                    
                    : null}
                
                    
            </Container>
        </div>
    )
}
