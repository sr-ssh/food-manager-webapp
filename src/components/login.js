import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../actions/userActions';


//css
import logo from './../assets/images/tem-x.png'
import userLogo from './../assets/images/user.svg'
import mobileLogo from './../assets/images/phone.svg'
import emailLogo from './../assets/images/emaill.svg'
import companyLogo from './../assets/images/company-name.svg'
import passwordLogo from './../assets/images/password.svg'
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
        <>
            <div id="triangle-up"></div>
            <img src={logo} alt="logo" className="logo"/>
            <form className="form" onSubmit={formHandeler}>
                <img src={userLogo} alt="use-icon" className="form-icon"/><input className="text-right form-input" type="text" name="mobileOrEmail" placeholder="ایمیل / موبایل" onChange={handleChange} required /><br />
                <img src={passwordLogo} alt="use-icon" className="form-icon"/><input className="text-right form-input" type="password" name="password" placeholder="رمز عبور" onChange={handleChange} required /><br />
                <div className="register-link">
                    <a href="/register">ثبت نام</a>
                </div>
                <button className="form-submit" type="submit">ورود</button> <br />
            </form>
            <div id="triangle-down"></div>
        </>
    )
}

