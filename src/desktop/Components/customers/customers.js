import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Container, Spinner, Col, Row, Alert } from 'react-bootstrap';
import { Button } from '@material-ui/core'

// Actions
import { customerActions } from '../../../actions/customerActions';


// components
import { Customer } from './customer'
import { CustomerSearch } from './search';

export const Customers = () => {

    let alertMessage = useSelector(state => state.alert.message)
    let alerType = useSelector(state => state.alert.type)

    const [modalShow, setModalShow] = useState(false)
    let customers = useSelector(state => state.getCustomers.customers)
    let customerLoading = useSelector(state => state.getCustomers.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("_______________********************************")
        dispatch(customerActions.getCustomers());
    }, [dispatch])


    return (
        <>
            <div className="product-page orders">
                <Container fluid className="m-0 w-100 d-flex justify-content-center flex-wrap ">
                    <Row>
                        <Col>
                            <Button variant="contained" size="large" color="primary" className="ff-iranSans " onClick={() => setModalShow(true)}>
                                <span className="text-light">جستجو</span>
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="m-0 w-100 d-flex justify-content-center flex-wrap ">
                    {
                        customerLoading &&
                        <Col className="col-3 mt-2 m-auto d-block align-self-center w-100 mb-4 ">
                            <Spinner className="m-auto d-block" animation="border" />
                        </Col>
                    }
                    {
                        (customers.length === 0 && !customerLoading) ? (
                            <Row className="justify-content-center align-items-center no-result-filter mt-4">
                                <Col className="col-12 text-center">
                                    هیج نتیجه ای یافت نشد!
                                </Col>
                            </Row>
                        ) : null
                    }
                    {/* {
                        alertMessage &&
                        <>
                            <div className="modal-backdrop show"></div>
                            <Row className="justify-content-center text-center ">
                                <Alert variant={alerType}>
                                    {alertMessage}
                                </Alert>
                            </Row>
                        </>
                    } */}
                    {
                        customers
                            ? (customers.map((customer, index) => <Customer key={index} customer={customer} />))
                            : null
                    }
                    <CustomerSearch show={modalShow} onHide={() => setModalShow(false)} />
                </Container>
            </div>
        </>
    )
}

