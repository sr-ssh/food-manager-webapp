import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { productActions } from '../../actions';
import { Header } from '../base/header';
import { Container , Form , Button , Row , Col } from 'react-bootstrap';


export const EditProduct = () => {
    
    let product = {
        id: "60c98bbbfa4cab1dd8c70d77",
        active: true,
        name: "موهیتو عربی",
        description: "نعنا تازه",
        sellingPrice: "20000"
    }

    const [newProduct, setnewProduct] = useState(product)
    const dispatch = useDispatch()

    let handleChange = (e) => {
        e.preventDefault()
        if(e.target.id === 'active1')
            setnewProduct({...newProduct, active: true})
        else if (e.target.id === 'active0')
            setnewProduct({...newProduct, active: false})
        else setnewProduct({...newProduct, [e.target.id]: e.target.value})
        console.log(newProduct)
    }

    let formHandler = (e) => {
        e.preventDefault()
        dispatch(productActions.editProduct(newProduct))
    }

    return (
        <div className="order-page">
        <Header brand="ویرایش محصول"/>
        <Container>
            
            <Form className="text-right d-flex flex-column justify-content-around align-items-center position-absolute bottom-0 left-0 right-0 order-flex" onSubmit={formHandler} >

                 <Col>
                    <Form.Group onChange={handleChange}>
                        <Form.Check type="radio" label="فعال" name="activity" id="active1" defaultChecked={newProduct.active} />
                        <Form.Check type="radio" label="غیر فعال" name="activity" id="active0" defaultChecked={!newProduct.active}
                        />
                    </Form.Group>
                 </Col>  

                <Col>
                    <Form.Group controlId="name">
                        <Form.Label>نام</Form.Label>
                        <Form.Control className="border-0" type="text" value={newProduct.name} onChange={handleChange}  required/>
                    </Form.Group>
                </Col>
                
                <Col>
                    <Form.Group controlId="sellingPrice">
                        <Form.Label>قیمت فروش</Form.Label>
                        <Form.Control className="border-0" type="text" value={newProduct.sellingPrice} onChange={handleChange} required/>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="description">
                        <Form.Label>توضیحات</Form.Label>
                        <Form.Control className="border-0" type="text" value={newProduct.description} onChange={handleChange}/>
                    </Form.Group>
                </Col>

                <Col>
                    <Button className="fw-bold border-0 col-12" size="lg" type="submit" block>
                        ثبت
                    </Button>
                </Col>
                
            </Form>
        </Container>
        </div>
    )
}
