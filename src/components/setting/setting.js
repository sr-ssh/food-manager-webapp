import React, { useEffect, useState } from 'react'
import { Col, Row, Button, Card, Form } from 'react-bootstrap'
import { orderActions } from '../../actions'

import { Header } from '../base/settingHeader'
import { SettingMenu } from './settingMenu'
import { OrderSetting } from './orderSetting'

export const Setting = () => {
    const [state, setState] = useState('تنظیمات')

    
    return (
        <div className="product-page">
        
            <Header title={state} setState={setState} />
            {state === 'تنظیمات' && <SettingMenu  state={state} setState={setState} /> }
            {state === 'سفارش' &&  <OrderSetting state={state} setState={setState} />}
        </div>
    )
}
