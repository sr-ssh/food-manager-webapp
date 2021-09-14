import { settingsConstants } from '../constants'


export function getOrderSettings(state = {}, action) {
    switch (action.type) {
        case settingsConstants.GET_ORDER_SETTINGS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case settingsConstants.GET_ORDER_SETTINGS_SUCCESS:
            return {
                ...state,
                loading: false,
                settings: action.settings
            }
        case settingsConstants.GET_ORDER_SETTINGS_FAILURE:
            return {
                err: action.err,
                loading: false
            }
        case settingsConstants.EDIT_ORDER_SETTINGS:
            return {
                ...state,
                loading: false,
                settings: action.settings
            }
        default:
            return state
    }
}

export function editOrderSms(state = {}, action) {
    switch (action.type) {
        case settingsConstants.EDIT_ORDER_SMS_REQUEST:
            return {
                ...state,
                params: action.params,
                loading: true
            }
        case settingsConstants.EDIT_ORDER_SMS_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.message
            }
        case settingsConstants.EDIT_ORDER_SMS_FAILURE:
            return {
                err: action.err,
                loading: false
            }
        default:
            return state
    }
}
