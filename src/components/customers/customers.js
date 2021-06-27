import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { customerActions } from '../../actions/customerActions';
import { Container } from 'react-bootstrap';
import { Header } from '../base/serachHeader';
import { Row, Alert } from 'react-bootstrap';


// components
import { Customer } from './customer'
import { CustomerSearch } from './search';

export const Customers = () => {

    let alertMessage = useSelector(state => state.alert.message)
    let alerType = useSelector(state => state.alert.type)

    const [modalShow, setModalShow] = useState(false)
    let customers = useSelector(state => state.getCustomers.customers)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(customerActions.getCustomers());      
    }, [dispatch])


    return(
        <>
        <div className="product-page orders">
            <Header title="مشتریان" modalShow={modalShow} setModalShow={setModalShow} />
            <Container fluid className="m-auto">
                {
                alertMessage && 
                <Row className="justify-content-center text-center ">
                    <Alert variant={alerType}>
                        {alertMessage}
                    </Alert> 
                </Row>
                }
                {
                    customers
                    ? (customers.map((customer, index) => <Customer key={index} customer={customer}/>))   
                    : null
                }
                <CustomerSearch show={modalShow} onHide={() => setModalShow(false)} />    
            </Container>
        </div>
        </>
    )
}

