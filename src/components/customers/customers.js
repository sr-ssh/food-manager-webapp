import React, { useEffect, useState } from 'react'

// components
import { Customer } from './customer'
import { Filter } from './filter'

export const Customers = () => {

    const [ customers , setCustomers ] = useState([])

    useEffect(() => {
        ///call api and get customers
    }, [])


    return(
        <>
        <Filter />
        {
            customers.map((customer, index) => <Customer key={index} customer={customer} />)
        }
        </>
    )
}

