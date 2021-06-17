import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../actions';
import { Card , DropdownButton , Dropdown , Button , Table , Row , Col } from 'react-bootstrap';

//icons
import deleteIcon from './../../assets/images/delete.svg'

export const Basket = ({order, insertOrder}) => {

    const [totalPrice, insertPrice] = useState(0)
    const products = useSelector(state => state.getProducts.product)
    const dispatch = useDispatch()

    let newOrder = (e, product) => {
        e.preventDefault();
        insertPrice(totalPrice + parseInt(product.sellingPrice))
        let newOrder = {
          _id: product._id,
          name: product.name,
          quantity: 1,
          buyingPrice: product.buyingPrice,
          sellingPrice: product.sellingPrice,
        };
        const isOrderPresent = order.some((item) => item._id === product._id);
        if (isOrderPresent) {
          const updatedOrder = order.map((item) => {
            if (item._id === product._id) {
              return {...item, quantity: ++item.quantity};
            }
            return item;
          });
          insertOrder(updatedOrder);
        } else {
          insertOrder((prevOrderState) => [...prevOrderState, newOrder]);
        }
    };

    let removeOrder = (e, product) => {
        e.preventDefault()
        insertPrice(totalPrice - parseInt(product.sellingPrice))
        let updatedOrder = order.map((item) => {
            if (item._id === product._id) {
                return {...item, quantity: --item.quantity};
            }
            return item;
        });
        
        if(product.quantity === 0) {
            updatedOrder = updatedOrder.filter(item => item._id !== product._id)
        }
        
        insertOrder(updatedOrder)
    }

    let productHandler = (e) => {
        e.preventDefault()
        dispatch(productActions.getProducts())
    }


    return(
        <>
        <Row>
            <Card className="border-0 p-1">
                <Card.Body className="basket-flex d-flex flex-column justify-content-around">
                    <Row>
                        <h6 className="order-input">سبد خرید</h6>
                    </Row>
                    <Row className="d-flex flex-row justify-content-around text-right">

                        <Col>
                            <DropdownButton onClick={(e) => productHandler(e)} title="محصولات">
                                {products 
                                    ? products.map((item, index) =>  {
                                        return(
                                            <Col key={index}>
                                                {index ? <Dropdown.Divider /> : null}
                                                <Dropdown.Item onClick={(e) => newOrder(e, item)}>
                                                    <Row><Col>{item.name}</Col> <Col>{item.sellingPrice} تومان</Col></Row>
                                                </Dropdown.Item>
                                            </Col>   
                                            )    
                                        })  
                                    : null
                                }
                            </DropdownButton>
                        </Col>

                        <Col>
                            <Button className="products-add border-0" type="button">
                                +
                            </Button>
                        </Col>
                    
                    </Row>
                
                    <Row>
                        <Table borderless size="sm">
                            <thead>
                                <tr>
                                    <th>سفارش</th>
                                    <th>قیمت</th>
                                    <th>تعداد</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                order.length 
                                ? order.map(item => {
                                            return (
                                                <tr key={item.name}>
                                                    <td>{item.name}</td>
                                                    <td>{item.quantity * item.sellingPrice} تومان</td>
                                                    <td>{item.quantity}</td>
                                                    <td><img onClick={(e) => removeOrder(e, item)} src={deleteIcon} alt="delete-icon"/></td>
                                                </tr>
                                            )
                                        })
                                : null
                            }
                                <tr className="border-top-blue">
                                    <td>جمع کل:</td>
                                    <td>{totalPrice} تومان</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>

                </Card.Body>
            </Card> 
        </Row>
        </>
    )
}