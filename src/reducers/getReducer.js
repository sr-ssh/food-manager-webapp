import { getConstants } from '../constants'

export function getConfigPrice(state = {}, action) {

    switch (action.type) {
        case getConstants.GET_CONFIG_PRICE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case getConstants.GET_CONFIG_PRICE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data
            }
        case getConstants.GET_CONFIG_PRICE_SUCCESS:

            break;

        default:
            return state;
    }
}
