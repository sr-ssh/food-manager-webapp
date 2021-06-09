import React from 'react';

export const Customer = ({customer}) => {
    return(
        <div>
            <p>نام: {customer.name}</p>
            <p>نام خانوادگی: {customer.family}</p>
            <p>نام کاربری: {customer.username}</p>
            <p>موبایل: {customer.mobile}</p>
            <p>تاریخ تولد: {customer.birthday}</p>
            <p>آدرس: {customer.address}</p>
        </div>
    )
}

