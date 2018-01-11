import { GET_LOCATION, FORMAT_ADDRESS } from '../actions/types'

const INITIAL_STATE = {
    lat: '',
    lng: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_LOCATION:
            return { ...state, lat: action.payload.latitude, lng: action.payload.longitude }
        case FORMAT_ADDRESS:
            return { ...state, lat: action.payload.lat, lng: action.payload.lng }
        default:
            return state
    }
}
