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
