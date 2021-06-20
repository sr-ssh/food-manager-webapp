import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { customerActions } from '../../actions/customerActions';
import { Container } from 'react-bootstrap';
import { Header } from '../base/serachHeader';


// components
import { Customer } from './customer'
import { Filter } from './filter'

export const Customers = () => {

    let customers = useSelector(state => state.getCustomers.customers)
    let filter = useSelector(state => state.setCustomersFilter.filter)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("Customers component mount")
        console.log(filter)
        dispatch(customerActions.getCustomers());      
    }, [dispatch, filter])


    return(
        <>
        {/* <Filter /> */}
        <div className="product-page orders">
            <Header title="مشتریان"/>
            <Container fluid className="m-auto">
                {
                    customers
                    ? (customers.map((customer, index) => <Customer key={index} customer={customer}/>))   
                    : null
                }
            </Container>
        </div>
        </>
    )
}

