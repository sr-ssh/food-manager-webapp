import React from 'react'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/order/add">ثبت سفارش</Link>
                </li>
                <li>
                    <Link to="">سفارش ها</Link>
                </li>
                <li>یادآوری</li>
                <li>
                    <Link to="/products">محصولات</Link>
                </li>
                <li>مالی</li>
                <li>مشتریان</li>
                <li>تخفیفات</li>
                <li>حساب کاربری</li>
                <li>خروج</li>
                <li>تنظیمات</li>
            </ul>
        </div>
    )
}
