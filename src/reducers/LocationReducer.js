import { GET_LOCATION } from '../actions/types'

const INITIAL_STATE = {
    lat: '',
    lng: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_LOCATION:
            return { lat: action.payload.lat, lng: action.payload.lng }
        default:
            return state
    }
}
