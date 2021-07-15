import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { orderActions, customerActions  } from '../../actions';
import { Header } from '../base/header2';
import { Basket } from './basket';
import { Container , Form , Button , Row , Col, Alert, Spinner } from 'react-bootstrap';
import DatePicker from "react-multi-date-picker";
import moment from 'jalali-moment';
import "react-multi-date-picker/styles/layouts/mobile.css"

import downloadIcon from '../../assets/images/download.svg'

export const WithEmployeeAccount = () => {

    let alertMessage = useSelector(state => state.alert.message)
    let alerType = useSelector(state => state.alert.type)
    
    const [validated, setValidated] = useState(false);
    const [mobileValidated, setMobileValidated] = useState(false);
    const [order, insertOrder] = useState([])
    const [customer, setCustomer] = useState({})
    const dispatch = useDispatch()
    let oldCustomer = useSelector(state => state.getCustomer.customer)
    let addOrderLoading = useSelector(state => state.addOrder.loading)

    let mobileHandler = (value) => {
        let res = value.length === 11 && value[0] === "0" && value[1] === "9"
        if(res) {
            dispatch(customerActions.getCustomer(value))
            setMobileValidated(false)
            return value
        }
        else
            return undefined
    }

    let handleOldCustomer = (e) => {
        e.preventDefault()
        if(oldCustomer && Object.keys(oldCustomer).length !== 0) {
            setCustomer(oldCustomer)
            setMobileValidated(false);
        }
        else if(!customer.name && !customer.length) {
            setMobileValidated(true);
        }
    }

    let handleChange = (e) => {
        e.preventDefault()
        let value = e.target.value
        let name = e.target.name
        if(name === "mobile") {
            value = mobileHandler(value)
        } 
        setCustomer({...customer, [name]: value})
    }

    let formHandler = (e) => {
        e.preventDefault()
        if(order.length && customer.family && customer.mobile && customer.address && customer.duration) {
            dispatch(orderActions.addOrder(order, customer))
        } else {
            console.log('empty order can not be sent')
            setValidated(true);
        }
    }

    const submitCalendar = (value, name) => {
        let birthDate = `${value.year}/${value.month.number}/${value.day}`
        birthDate =  moment.from(birthDate, 'fa', 'YYYY/MM/DD').locale('en').format('YYYY-MM-DD');
        setCustomer({...customer, [name]: birthDate})
    }

    useEffect(() => {
        if(addOrderLoading)
            insertOrder([])
    }, [addOrderLoading])

    return (
        <>
        <Card.Text className="pt-1">
            نام : <span>{user.family && persianJs(user.family).englishNumber().toString()}</span>
        </Card.Text>
        <Card.Text className="pt-1">
            موبایل : <span>{user.mobile && persianJs(user.mobile).englishNumber().toString()}</span>
        </Card.Text>
        <Card.Text className="pt-1">
            ایمیل : <span>{user.email}</span>
        </Card.Text>
        <Card.Text className="pt-1">
            آدرس : <span>{user.address && persianJs(user.address).englishNumber().toString()}</span>
        </Card.Text>
        <Card.Text className="pt-1">
            نوع : <span>کارفرما</span>
        </Card.Text>
        <Card className="background-blue border-0 customer-round">
            <Card.Body className="pe-0 ps-0 ">
                <Row className="flex-nowrap mt-2">
                    <Col>
                        <Card.Text>
                            نام کارفرما: <span>{order.customer.mobile && persianJs(order.customer.mobile).englishNumber().toString()}</span>
                        </Card.Text>
                    </Col>
                </Row>
                <Row className="flex-nowrap mt-2">
                    <Col>
                        <Card.Text>
                            نام شرکت : <span>{order.employee ? order.employee.family : null}</span>
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        </>
    )
}
