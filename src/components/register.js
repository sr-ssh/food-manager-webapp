import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../actions/userActions';



export const Register = () => {

    const [inputs, setInputs] = useState({ username: '', password: '' });
    const { name, family, password, email, mobile, company} = inputs;
    const dispatch = useDispatch()


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }


    const formHandeler = e => {
        e.preventDefault();
        let user = { name, family, company, password, email, mobile };
        console.log(user)
        name && family && password && mobile && dispatch(userActions.register(user));     
    }

    return (
        <div className="container register">
            <form className="text-center register-form" onSubmit={formHandeler} >
                <input className="text-right" type="text" name="name" placeholder="نام" onChange={handleChange} required /><br />
                <input className="text-right" type="text" name="family" placeholder="نام خانوادگی" onChange={handleChange} required /><br />
                <input className="text-right" type="text" name="email" placeholder="ایمیل" onChange={handleChange} /><br />
                <input className="text-right" type="text" name="mobile" placeholder="موبایل" onChange={handleChange} required /><br />
                <input className="text-right" type="text" name="company" placeholder="نام شرکت" onChange={handleChange} /><br />
                <input className="text-right" type="password" name="password" placeholder="رمز عبور" onChange={handleChange} required /><br />
                <button type="submit">ثبت نام</button>
            </form>
        </div>
    )
}

