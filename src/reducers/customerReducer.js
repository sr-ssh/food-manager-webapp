import { customerConstants } from '../constants'

export function getCustomers(state = {}, action){
    
    switch (action.type) {
        case customerConstants.GET_CUSTOMERS_REQUEST:
            return{
                loading: true
            }
        case customerConstants.GET_CUSTOMERS_SUCCESS:
            return{
                customers: action.customers
            }
        case customerConstants.GET_CUSTOMERS_FAILURE:
    
            break;
    
        default:
            return state;
    }
}

export function getCustomer(state = {}, action){
    switch (action.type) {
        case customerConstants.GET_CUSTOMER_REQUEST:
            return{
                success: false
            }
        case customerConstants.GET_CUSTOMER_SUCCESS:
            return{
                customer: action.customer,
            }
        case customerConstants.GET_CUSTOMER_FAILURE:
            break;
        default:
            return state;
    }
}