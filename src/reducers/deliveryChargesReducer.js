import { deliveryChargesConstants } from '../constants'

const initialState = {
    charges: []
}

export function getDeliveryCharges(state = initialState, action) {
    switch (action.type) {
        case deliveryChargesConstants.GET_DELIVERY_CHARGES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case deliveryChargesConstants.GET_DELIVERY_CHARGES_SUCCESS:
            return {
                ...state,
                loading: false,
                charges: action.data
            }
        case deliveryChargesConstants.GET_DELIVERY_CHARGES_FAILURE:
            return {
                err: action.error
            }
        default:
            return state
    }
}