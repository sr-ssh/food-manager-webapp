import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../actions';
import { Card , DropdownButton , Dropdown , Button , Table , Row , Col } from 'react-bootstrap';
import TableScrollbar from 'react-table-scrollbar';

//icons
import deleteIcon from './../../assets/images/delete.svg'
import spinnerIcon from './../../assets/images/sppiner.svg'
import plusIcon from './../../assets/images/plus.svg'

export const Basket = ({order, insertOrder}) => {

    const [dimStatus, setDimStatus] = useState(false)
    const [totalPrice, insertPrice] = useState(0)
    const [selectedItem, setItem] = useState("")
    const products = useSelector(state => state.getProducts.product)
    const dispatch = useDispatch()

    let newOrder = (e) => {
        e.preventDefault();
        let product = products.find(item => item.name === selectedItem)
        console.log("producttttttttttt")
        console.log(product)
        console.log("producttttttttttt")
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


    return (
        <>
        <Row>
            <Card className="border-0 p-3 pt-2  basketContainer">
                <Card.Body className="p-0 basket-flex">
                    <Row>
                        <h6 className="order-input fw-bold">سبد خرید</h6>
                    </Row>
                    <Row>
                        <Col className="col-10 pe-2">
                            <Dropdown onToggle={(e) => setDimStatus(!dimStatus)} onClick={(e) => productHandler(e)}>
                                <Dropdown.Toggle className="d-flex">
                                    {selectedItem.length ? <span>{selectedItem}</span> : <span>محصولات</span>} 
                                    <img className="me-auto" src={spinnerIcon} height="20px" />
                                </Dropdown.Toggle> 
                                <Dropdown.Menu className={`${dimStatus ? "dim" : ""} dropdownProductMenu`}>
                                    {products 
                                        ? products.map((item, index) =>  {
                                            return(
                                                <Col key={index}>
                                                    {index ? <Dropdown.Divider  /> : null}
                                                    <Dropdown.Item onClick={() => setItem(item.name) }>
                                                        <Row>
                                                            <Col className="text-end">{item.name}</Col> 
                                                            <Col>{item.sellingPrice} <span className="orderInput">تومان</span></Col>
                                                        </Row>
                                                    </Dropdown.Item>
                                                </Col>   
                                                )    
                                            })  
                                        : null
                                    }
                                </Dropdown.Menu>
                            </Dropdown>

                        </Col>

                        <Col className="col-2 p-0 text-center">
                            <Button className="w-75 products-add border-0 py-1" onClick={(e) => newOrder(e)} type="button">
                                <img className="d-flex m-auto" src={plusIcon} />
                            </Button>
                        </Col>
                    </Row>
                
                    <Row className="pt-2 px-2">
                    <TableScrollbar rows={5}>
                        <table className="" borderless size="sm">
                            <col width="40%" />
                            <col width="35%" />
                            <col width="20%" />
                            <thead>
                                <tr>
                                    <th className="fw-bold">سفارش</th>
                                    <th className="fw-bold">قیمت</th>
                                    <th className="fw-bold">تعداد</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={ order.length ? {"display": "none"} : {}}>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>تست</td>
                                    <td>20 تومان</td>
                                    <td className="pe-3">1</td>
                                    <td><img src={deleteIcon} alt="delete-icon"/></td>
                                </tr>
                            {
                                order.length 
                                ? order.map(item => {
                                            return (
                                                <tr key={item.name}>
                                                    <td>{item.name}</td>
                                                    <td>{item.quantity * item.sellingPrice} تومان</td>
                                                    <td className="pe-3">{item.quantity}</td>
                                                    <td><img onClick={(e) => removeOrder(e, item)} src={deleteIcon} alt="delete-icon"/></td>
                                                </tr>
                                            )
                                        })
                                : null
                            }
                           
                            </tbody>
                        </table>
                        </TableScrollbar>
                        <Row className="border-top-blue pt-2 mt-auto">
                            <Col className="col-5">
                                <span className="">جمع کل</span>
                            </Col>
                            <Col className="px-1">
                                {totalPrice}
                            </Col>
                        </Row>
                    </Row>

                </Card.Body>
            </Card> 
        </Row>
        </>
    )
}