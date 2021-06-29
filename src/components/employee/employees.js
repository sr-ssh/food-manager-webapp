import React, { useState } from 'react'
import { Row, Button } from 'react-bootstrap'
import { Header } from '../base/employeeHeader'
import { AddEmployee } from './addEmployee'

export const Employees = () => {
    const [modalShow, setModalShow] = useState(false)

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
