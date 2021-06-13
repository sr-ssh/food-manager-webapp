import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../actions/userActions';
import { Container } from 'react-bootstrap';


import logo from './../assets/images/tem-x.png'
import userLogo from './../assets/images/user.svg'
import mobileLogo from './../assets/images/phone.svg'
import emailLogo from './../assets/images/emaill.svg'
import companyLogo from './../assets/images/company-name.svg'
import passwordLogo from './../assets/images/password.svg'



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
        <>
        <div id="triangle-up"></div>
        <img src={logo} alt="logo" className="logo"/>
        <Container>
            
            <form className="text-center form" onSubmit={formHandeler} >
                <img src={userLogo} alt="use-icon" className="form-icon"/><input className="text-right form-input" type="text" name="name" placeholder="نام" onChange={handleChange} required /><br />
                <img src={userLogo} alt="use-icon" className="form-icon"/><input className="text-right form-input" type="text" name="family" placeholder="نام خانوادگی" onChange={handleChange} required /><br />
                <img src={emailLogo} alt="use-icon" className="form-icon"/><input className="text-right form-input" type="text" name="email" placeholder="ایمیل" onChange={handleChange} /><br />
                <img src={mobileLogo} alt="use-icon" className="form-icon"/><input className="text-right form-input" type="text" name="mobile" placeholder="موبایل" onChange={handleChange} required /><br />
                <img src={companyLogo} alt="use-icon" className="form-icon"/><input className="text-right form-input" type="text" name="company" placeholder="نام شرکت" onChange={handleChange} /><br />
                <img src={passwordLogo} alt="use-icon" className="form-icon"/><input className="text-right form-input" type="password" name="password" placeholder="رمز عبور" onChange={handleChange} required /><br />
                <button type="submit" className="form-submit">ثبت نام</button>
            </form>
        </Container>
        <div id="triangle-down"></div>
        </>
    )
}

