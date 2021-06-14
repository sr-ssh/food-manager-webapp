import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../actions';
import { Card , DropdownButton , Dropdown , Button , Table } from 'react-bootstrap';

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
        <h6>سبد خرید</h6>
        <Card>
            <Card.Body className="basket-flex">
                
                <div className="products-dropdown text-right">

                    <DropdownButton onClick={(e) => productHandler(e)} title="محصولات">
                        {products 
                            ? products.map((item, index) =>  {
                                return(
                                    <div key={index}>
                                        {index ? <Dropdown.Divider /> : null}
                                        <Dropdown.Item onClick={(e) => newOrder(e, item)}>
                                            <span>{item.name}</span> {item.sellingPrice} تومان
                                        </Dropdown.Item>
                                    </div>   
                                    )    
                                })  
                            : null
                        }
                    </DropdownButton>

                    <Button className="products-add border-0" type="button">
                        +
                    </Button>
                
                </div>
            
                <div>
                    {
                        order.length 
                        ? <Table borderless size="sm">
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
                                order.map(item => {
                                    return (
                                        <tr key={item.name}>
                                            <td>{item.name}</td>
                                            <td>{item.quantity * item.sellingPrice} تومان</td>
                                            <td>{item.quantity}</td>
                                            <td><img onClick={(e) => removeOrder(e, item)} src={deleteIcon} alt="delete-icon"/></td>
                                        </tr>
                                    )
                                })
                            }
                            <tr className="border-top">
                                <td>جمع کل:</td>
                                <td>{totalPrice} تومان</td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </Table>
                      
                      : <span>هیچ محصولی انتخاب نشده است</span>   
                    }
                </div>

        </Card.Body>
        </Card>
        </>
    )
}