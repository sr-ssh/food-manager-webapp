import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

//actions
import { financeActions } from '../../actions'

export const AddBill = () => {

    const [inputs, setInputs] = useState({});
    const { name, cost } = inputs
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const formHandeler = e => {
        e.preventDefault();
        name && cost && dispatch(financeActions.addBill(inputs));       
    } 

    return(
        <>
        <form onSubmit={formHandeler} >
            <label htmlFor="name">نام: </label>
            <input type="text" name="name" id="name" placeholder="اجاره" onChange={handleChange}/><br/>

            <label htmlFor="name">هزینه: </label>
            <input type="text" name="cost" id="cost" placeholder="22000000" onChange={handleChange}/><br/>

            <input type="submit" />
        </form>
        </>
    )
}