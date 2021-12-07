import React, { useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { history } from '../../../helpers';
import { useDispatch } from 'react-redux';


import employeesIcon from '../../assets/images/main/employee.svg'
import salesReportIcon from '../../assets/images/main/Sales-reports.svg'
import productsIcon from '../../assets/images/main/Products.svg'

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
              <img  className="btn__mainpage-icon me-4"  src={salesReportIcon}  alt="sales-report-icon"  />
              <span className="btn__mainpage-text">گزارش فروش</span>
          </a>
          <a className="btn btn__mainpage" onClick={(e)  => history.push('/products')}>
              <img  className="btn__mainpage-icon me-4"  src={productsIcon}  alt="add-order-icon"  />
              <span className="btn__mainpage-text">محصولات</span>
          </a>
          <a className="btn btn__mainpage" onClick={(e)  => history.push('/employees')}>
              <img  className="btn__mainpage-icon me-4"  src={employeesIcon}  alt="add-order-icon"  />
              <span className="btn__mainpage-text">کارمندان</span>
          </a>
        </div>
    )

    
}
