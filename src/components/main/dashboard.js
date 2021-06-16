import React from 'react'
import { Link } from 'react-router-dom';
import {Offcanvas} from 'react-bootstrap'

export const Dashboard = ({show, handleClose}) => {
    return (
        <div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul>
                        <li>
                            <Link to="/order/add">ثبت سفارش</Link>
                        </li>
                        <li>لیست سفارشات</li>
                        <li>یادآوری</li>
                        <li>
                            <Link to="/products">محصولات</Link>
                        </li>
                        <li>مالی</li>
                        <li>مشتریان</li>
                        <li>حساب کاربری</li>
                        <li>تنظیمات</li>
                        <li>خروج</li>
                    </ul>   

                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
