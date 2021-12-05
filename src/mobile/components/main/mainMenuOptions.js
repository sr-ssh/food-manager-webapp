import React, { useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { history } from '../../../helpers';
import { useDispatch } from 'react-redux';


import customerIcon from '../../assets/images/main/customer.svg'
import ordersIcon from '../../assets/images/main/orders.svg'
import addOrderIcon from '../../assets/images/main/add-order.svg'

//actions
import { employeeActions } from '../../../actions/employeeActions';


export const MainMenuOptions = () => {

    let permissions = JSON.parse(localStorage.getItem('permissions'));
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(employeeActions.getPermissions())
    }, [dispatch])

    return (
        <div className="main">
          <a className="btn btn__mainpage" onClick={(e)  => history.push('/orders')}>
              <img  className="btn__mainpage-icon"  src={addOrderIcon}  alt="add-order-icon"  />
              <span className="btn__mainpage-text">گزارش فروش</span>
          </a>
          <a className="btn btn__mainpage">
              <img  className="btn__mainpage-icon"  src={addOrderIcon}  alt="add-order-icon"  />
              <span className="btn__mainpage-text">محصولات</span>
          </a>
          <a className="btn btn__mainpage">
              <img  className="btn__mainpage-icon"  src={addOrderIcon}  alt="add-order-icon"  />
              <span className="btn__mainpage-text">کارمندان</span>
          </a>
        </div>
    )

    // return (
    //     <div>
    //         {
    //             // permissions && permissions.addOrder && 
    //             <Row  className="my-3 justify-content-center">
    //                 <Col  xs={9}  className="">
    //                     <Button  className="main-button w-100 me-auto d-block p-3"  type="submit"  onClick={e  => history.push('/order/add')}>
    //                     <img  className="ms-4"  src={addOrderIcon}  alt="add-order-icon"  width="35px"/>
    //                     ثبت سفارش
    //                     </Button>
    //                 </Col>
    //             </Row>  
    //         }
        
    //         {
    //             // permissions && permissions.getOrders && 
    //             <Row  className="my-3 justify-content-center">
    //                 <Col  xs={9}  className="">
    //                     <Button  className="main-button w-100 me-auto d-block p-3"  type="submit"  onClick={e  => history.push('/orders')}>
    //                         <img  className="ms-4"  src={ordersIcon}  alt="add-order-icon"  width="35px"/>
    //                         گزارش فروش
    //                     </Button>
    //                 </Col>
    //             </Row>
    //         }
        
    //         {
    //             // permissions && permissions.getCustomers && 
    //             <Row  className="my-3 justify-content-center">
    //                 <Col  xs={9}  className="">
    //                     <Button  className="main-button w-100 me-auto d-block p-3"  type="submit"  onClick={e  => history.push('/customers')}>
    //                         <img  className="ms-4"  src={customerIcon}  alt="add-order-icon"  width="35px"/>
    //                         محصولات
    //                     </Button>
    //                 </Col>
    //             </Row>  
    //         }     
    //     </div>
    // )
}
