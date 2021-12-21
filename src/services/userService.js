
import axios from 'axios';
import { SERVER_URL } from '../config';
import { history } from '../helpers';
import { authHeader } from '../helpers';

let baseRoute = SERVER_URL;

export const userService = {
    login,
    register,
    appInfo,
    userInfo,
    editUserInfo,
    verificationCode
};


function login(mobileOrEmail, password) {
    console.log("into userService");
    return axios
        .post(`${baseRoute}/login`, {mobileOrEmail, password})
        .then(res => {
            console.log("res.user >> "); 
            console.log(res.data.data);
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(res.data.data));
            
            return res.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}

function register(user) {
    console.log("into userService");

    return axios
        .post(`${baseRoute}/`, user)
        .then(res => {
            console.log("res.user >> "); console.log(res.data.data);
            localStorage.setItem('user', JSON.stringify(res.data.data));
            return res.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log('errrrrrrrrrrrror')
                console.log(error.response.data);
                console.log(error.response.status);
            }
            return error
        });
}

function verificationCode(mobile) {
    console.log('into userService')

    const requestOptions = {
        headers: authHeader(),
        body: {mobile}
    };

    return axios
        .post(`${baseRoute}/verificationcode`, requestOptions.body)
        .then(res => {
            console.log("res.data >> "); 
            console.log(res.data);
            return res.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}

function userInfo() {
    console.log("into userService");

    const requestOptions = {
        headers: authHeader(),
        body: {}
    };
    console.log(requestOptions)
    return axios
        .get(`${baseRoute}/account`, {headers: requestOptions.headers})
        .then(res => {
            console.log("res.user >> "); 
            console.log(res.data);
            return res.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}

function editUserInfo(user) {
    console.log("into userService");

    const requestOptions = {
        headers: authHeader(),
        body: user
    };

    console.log(requestOptions)
    return axios
        .put(`${baseRoute}/account`, requestOptions.body, {headers: requestOptions.headers})
        .then(res => {
            console.log("res.user >> "); 
            console.log(res.data);
            return res.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}

function appInfo() {
    console.log("into userService");
    
    let app = {
        "versionCode": 1,
        "os": "android"
    }

    const requestOptions = {
        headers: authHeader(),
        body: app
    };

    return axios
        .post(`${baseRoute}/app/info`, requestOptions.body, {headers: requestOptions.headers})
        .then(res => {
            console.log("res.user >> "); 
            console.log(res.data.data);
            if(res.data.success)
                history.push('/dashboard');
            return res.data.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}


