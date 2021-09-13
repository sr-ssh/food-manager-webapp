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

export function addProduct(state = {}, action) {
    switch (action.type) {
        case productConstants.ADD_PRODUCT_REQUEST:
            return {
                ...state, 
                loading: true,
            }
        case productConstants.ADD_PRODUCT_SUCCESS: 
            return {
                ...state,
                loading: false,
                product: action.data
            }
        case productConstants.ADD_PRODUCT_FAILURE:
            return {
                err: action.error
            }
        default:
            return state;
    }

}

export function editProduct(state = {}, action) {
    switch (action.type) {
        case productConstants.EDIT_PRODUCT_REQUEST:
            return {
                ...state, 
                loading: true,
            }
        case productConstants.EDIT_PRODUCT_SUCCESS: 
            return {
                ...state,
                loading: false,
                product: action.data
            }
        case productConstants.EDIT_PRODUCT_FAILURE:
            return {
                err: action.error
            }
        default:
            return state;
    }
}

export function getProductTypes(state = {}, action) {
    switch (action.type) {
        case productConstants.GET_PRODUCT_TYPES_REQUEST:
            return {
                ...state, 
                loading: true,
            }
        case productConstants.GET_PRODUCT_TYPES_SUCCESS: 
            return {
                ...state,
                loading: false,
                productTypes: action.data
            }
        case productConstants.GET_PRODUCT_TYPES_FAILURE:
            return {
                err: action.err
            }
        default:
            return state;
    }

}