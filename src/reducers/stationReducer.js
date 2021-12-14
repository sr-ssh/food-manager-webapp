import { stationConstants } from '../constants'

const initialState = {
    stations: []
}

export function getStations(state = initialState, action) {
    switch (action.type) {
        case stationConstants.GET_STATIONS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case stationConstants.GET_STATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                stations: action.data
            }
        case stationConstants.GET_STATIONS_FAILURE:
            return {
                err: action.error
            }
        default:
            return state
    }
}