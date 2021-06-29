import React, { useState, useEffect } from 'react'
import { Row, Button } from 'react-bootstrap'
import { Header } from '../base/employeeHeader'
import { useDispatch, useSelector } from 'react-redux'
import { employeeActions } from '../../actions/employeeActions'

import { AddEmployee } from './addEmployee'

export const Employees = () => {
    const [modalShow, setModalShow] = useState(false)

    let employees = useSelector(state => state.getEmployees.employees)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(employeeActions.getEmployees())
    }, [dispatch])

    return (
        <>
            <Header title="کارمندان" backLink="/dashboard" setModalShow={setModalShow} />
            <Row className="m-0">
                <span>کارمندان شما</span>
            </Row>

            <AddEmployee show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}
