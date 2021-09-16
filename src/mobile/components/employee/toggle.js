import React, { useState } from 'react'
import { Row, Card, Col } from 'react-bootstrap'
import persianJs from 'persianjs/persian.min';
import moment from 'jalali-moment';
import Switch from "react-switch";


import editIcon from '../../assets/images/Products/edit.svg'
import deleteIcon from '../../assets/images/discounts/deletee.svg'
import phoneIcon from './../../assets/images/phone.svg'
import operatorIcon from './../../assets/images/employees/operator-happy.svg'
import deliveryIcon from './../../assets/images/employees/deliveryr-happy.svg'
import cookIcon from './../../assets/images/employees/chef-happy-pizza.svg'
import lockIcon from './../../assets/images/employees/lock.svg'
import unlockIcon from './../../assets/images/employees/unlock.svg'



export const Toggle = ({active}) => {
    
    let [checked, setCheckd] = useState(active)

    return (
      <label htmlFor="small-radius-switch">
        <Switch
          checked={checked}
          onChange={() => setCheckd(!checked)}
          handleDiameter={35}
          offColor="#ebebeb"
          onColor="#ebebeb"
          offHandleColor="#f44336"
          onHandleColor="#4caf50"
          height={43}
          width={160}
          borderRadius={10}
          activeBoxShadow="0px 0px 1px 2px #646464"
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: "0.75rem",
                color: "#4caf50",
                paddingRight: 2,
                width: "100px",
                marginLeft: "-36px"
              }}
            >
              باز کردن قفل
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: "0.75rem",
                color: "#f44336",
                paddingLeft: 2
              }}  
            >
              قفل
            </div>
          }
          uncheckedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
              }}
            >
              <img src={lockIcon} height="22px" alt="lock-icon" />
            </div>
          }
          checkedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                paddingLeft: "20px",
                paddingRight: "20px"
              }}
            >
              <img src={unlockIcon} height="20px" alt="unlock-icon" />
            </div>
          }
          className="react-switch"
          id="small-radius-switch"
        />
      </label>
    )
}
