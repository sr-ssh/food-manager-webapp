import React, { useState } from 'react'

// components
import {Header} from '../base/header'
import { Dashboard } from './dashboard';

export const Main = () => {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
        <div className="order-page">
            {/* <Header brand=" "/> */}
            <Dashboard show={show} onHide={handleClose}/>
        </div>
    )
}