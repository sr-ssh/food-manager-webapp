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

export function addStation(state = initialState, action) {
    switch (action.type) {
        case stationConstants.ADD_STATION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case stationConstants.ADD_STATION_SUCCESS:
            return {
                ...state,
                loading: false,
                station: action.data
            }
        case stationConstants.ADD_STATION_FAILURE:
            return {
                err: action.error
            }
        default:
            return state
    }
}

export function editStation(state = initialState, action) {
    switch (action.type) {
        case stationConstants.EDIT_STATION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case stationConstants.EDIT_STATION_SUCCESS:
            return {
                ...state,
                loading: false,
                station: action.data
            }
        case stationConstants.EDIT_STATION_FAILURE:
            return {
                err: action.error
            }
        default:
            return state
    }
}