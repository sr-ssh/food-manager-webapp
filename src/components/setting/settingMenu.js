import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

export const SettingMenu = ({state, setState}) => {
    return (
        <>
            <Row className="setting-btn-row">
                <Button className="setting-order-btn" onClick={() => setState('سفارش')}>سفارش</Button>
            </Row>  
        </>
    )
}
