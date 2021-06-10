import React from 'react'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/addOrder">ثبت سفارش</Link>
                </li>
                <li>لیست سفارشات</li>
                <li>یادآوری</li>
                <li>محصولات</li>
                <li>مالی</li>
                <li>مشتریان</li>
                <li>حساب کاربری</li>
                <li>تنظیمات</li>
                <li>خروج</li>
            </ul>
        </div>
    )
}
