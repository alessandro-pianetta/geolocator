import axios from 'axios'
import { GET_LOCATION } from './types'

export const getLocation = () => {
    const GEOLOCATION_API_KEY = 'AIzaSyAaolAhdtSrjlPa6OJUVoOIJ4RucD8gNkA'
    return (dispatch) => {
        axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${GEOLOCATION_API_KEY}`)
            .then(response => {
                const loc = response.data.location
                dispatch({ type: GET_LOCATION, payload: loc })
            })
            .catch(error => {
                console.log(error)
            })
    }

}
