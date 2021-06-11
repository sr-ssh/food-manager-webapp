
import axios from 'axios';
import { SERVER_URL } from '../config';
import { authHeader } from '../helpers';

let baseRoute = SERVER_URL;

export const productService = {
    getProducts
};


function getProducts() {
    console.log("into productService");
    let user = localStorage.getItem('user')
    user = JSON.parse(user)
    let data = {
        headers:{
            'authorization': user.accessToken,
            'idtoken': user.idToken
        }
    }
    return axios
        .get(`${baseRoute}/product`, data)
        .then(res => {
            console.log("res.user >> "); 
            console.log(res.data.data);
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            //localStorage.setItem('user', JSON.stringify(res.data.data));
            return res.data.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}

