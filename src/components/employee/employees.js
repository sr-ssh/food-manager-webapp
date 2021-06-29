import React, { useEffect } from 'react'
import { Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { employeeActions } from '../../actions/employeeActions'

export const Employees = () => {

    let employees = useSelector(state => state.getEmployees.employees)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(employeeActions.getEmployees())
    }, [dispatch])


    return (
        <div>
            {employees && console.log(employees)}
            <Row>
                بخش کارمندان:
            </Row>
            <Row>
                <Button>اضافه کردن کارمند</Button>
            </Row>
            <Row>
                <span>کارمندان شما</span>
            </Row>
        </div>
    )
}
