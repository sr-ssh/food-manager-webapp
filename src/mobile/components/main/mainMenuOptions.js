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

    
}
