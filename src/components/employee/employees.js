import React from 'react'
import { Row, Button } from 'react-bootstrap'

export const Employees = () => {
    return (
        <div>
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
