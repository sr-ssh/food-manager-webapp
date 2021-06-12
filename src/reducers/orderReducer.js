import { orderConstants } from '../constants'

const initialState = {
    order: []
}

export function addOrder(state = initialState, action) {
    switch (action.type) {
        case orderConstants.ADD_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case orderConstants.ADD_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                order: action.order
            }
        case orderConstants.ADD_ORDER_FAILURE:
            return {
                err: action.err
            }
        default:
            return state
    }
}