import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { DoubleInputDate } from './doubleInputDate';
import { customerActions } from '../../actions'


export const Filter = () => {

    const [inputs, setInputs] = useState({});
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
        console.log(inputs)
    }

    const formHandeler = e => {
        e.preventDefault();
        dispatch(customerActions.setFilter(inputs));       
    } 

    return(
        <>
            <form onSubmit={formHandeler} >
                <label htmlFor="name">نام: </label>
                <input type="text" name="name" id="name" placeholder="ریحانه" onChange={handleChange}/><br/>

                <label htmlFor="mobile">موبایل: </label>
                <input type="text" name="mobile" id="mobile" placeholder="09306214745" onChange={handleChange}/><br/>

                <DoubleInputDate name="registry-date" label="عضویت" handleChange={handleChange} />
                <DoubleInputDate name="last-buy" label="آخرین خرید" handleChange={handleChange} />
                <DoubleInputDate name="count" label="تعداد" handleChange={handleChange} />
                <DoubleInputDate name="total" label="جمع خرید" handleChange={handleChange} />
                <input type="submit" />
            </form>
        </>
    )
}