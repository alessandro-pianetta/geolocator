import axios from 'axios'
import { GET_LOCATION, FORMAT_ADDRESS } from './types'

export const getLocation = (api) => {
    return (dispatch) => {
        axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${api}`)
            .then(response => {
                const loc = response.data.location
                console.log(response)
                dispatch({ type: GET_LOCATION, payload: loc })
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const formatAddress = (address, api) => {
    return (dispatch) => {
        axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${api}`)
            .then(response => {
                const loc = response.data.results[0].geometry.location
                dispatch({ type: FORMAT_ADDRESS, payload: loc })
            })
            .catch(error => {
                console.log(error)
            })
    }
}
