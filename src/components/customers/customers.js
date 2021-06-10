import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { customerActions } from '../../actions/customerActions'

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
        <Filter />
        {
            customers
            ? customers.map((customer, index) => <><hr/><Customer key={index} customer={customer} /></>)
            : <p>هیچ مشتری وجود ندارد</p>
        }
        </>
    )
}

