import { addConstants } from '../constants'

export function getConfigPrice(state = {}, action) {

    switch (action.type) {
        case addConstants.EDIT_CONFIG_PRICE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case addConstants.EDIT_CONFIG_PRICE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data
            }
        case addConstants.EDIT_CONFIG_PRICE_FAILURE:

            break;

        default:
            return state;
    }
}
