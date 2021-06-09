import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../actions/userActions';


//css

import { Container } from 'react-bootstrap';


export const Login = () => {

    const [inputs, setInputs] = useState({ username: '', password: '' });
    const { mobileOrEmail, password } = inputs;
    const dispatch = useDispatch()


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    const formHandeler = e => {
        e.preventDefault();

        mobileOrEmail && password && dispatch(userActions.login(mobileOrEmail, password));       

    }

    return (
        <Container>
            <form  onSubmit={formHandeler} >
                <input className="text-right" type="text" name="mobileOrEmail" placeholder="نام کاربری" onChange={handleChange} required /><br />
                <input className="text-right" type="password" name="password" placeholder="رمز عبور" onChange={handleChange} required /><br />
                <button type="submit">ورود</button> <br />
                <a href="/register">ثبت نام</a> <br />
            </form>
        </Container>
    )
}

