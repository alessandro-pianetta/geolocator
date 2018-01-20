import axios from 'axios'
import { GET_LOCATION, FORMAT_ADDRESS } from './types'

export const getLocation = (api) => {
    return (dispatch) => {
        const { geolocation } = navigator

        geolocation.getCurrentPosition((pos) => {
            dispatch({ type: GET_LOCATION, payload: pos.coords })
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