import axios from 'axios';
import { SERVER_URL } from '../config';
import { authHeader } from '../helpers';
import { handleResponse, handleError } from '../helpers'

let baseRoute = SERVER_URL;

axios.interceptors.request.use(request => {
    console.log('Starting Request', request)
    return request
  })

export const orderService = {
    getOrders,
    addOrder
};

function getOrders(filter = {}) {
    console.log("into orderService");

    const requestOptions = {
        headers: authHeader()
    };
    
    return axios
        .get(`${baseRoute}/order/${encodeURI("شکوهی")}/${"09527841261"}/${"2021-05-31T05:42:13.845Z"}/${"2021-07-19T09:24:18.663Z"}`, requestOptions )
        .then(res => {
            console.log("res.user >> "); console.log(res.data.data);
            return handleResponse(res)
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                handleError(error.response.status)
            }
        });
}

function addOrder(products, customer) {
    console.log("into orderService");
    const requestOptions = {
        headers: authHeader(),
        body: {products, customer}
    };

    return axios
        .post(`${baseRoute}/order`,requestOptions.body ,{headers: requestOptions.headers} )
        .then(res => {
            console.log("res.user >> "); 
            console.log(res.data);
            return handleResponse(res)
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                handleError(error.response.status)
            }
        });
}