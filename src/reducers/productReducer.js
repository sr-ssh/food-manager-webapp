import { productConstants } from '../constants'

const initialState = {
    loading: false,
    product: []
}

export function getProducts(state = initialState, action) {
    switch (action.type) {
        case productConstants.GET_PRODUCT_REQUEST:
            return {
                ...state, 
                loading: true,
            }
        case productConstants.GET_PRODUCT_SUCCESS: 
            return {
                ...state,
                loading: false,
                product: action.product
            }
        case productConstants.GET_PRODUCT_FAILURE:
            return {
                err: action.err
            }
        default:
            return state;
    }

}