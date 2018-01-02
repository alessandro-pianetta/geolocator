import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

import Map from './components/Map'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map api='AIzaSyDRAK9QFWrWXVzlHFO0LXSo_UBrMedOsME' lng='37' lat='-122' />   
      </div>
    )
  }
}

const DISTANCE_MATRIX_API_KEY = 'AIzaSyBBZHgiSDC29of6ScN06tDP_8Z95Mfntwo'
const GEOLOCATION_API_KEY = 'AIzaSyAaolAhdtSrjlPa6OJUVoOIJ4RucD8gNkA'
const MAPS_API_KEY = 'AIzaSyDRAK9QFWrWXVzlHFO0LXSo_UBrMedOsME'

const renderMap = () => {
  axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${GEOLOCATION_API_KEY}`)
    .then(function (response) {
      const location = response.data.location
      // return (
      //   <Map api={MAPS_API_KEY} lng={location.lng} lat={location.lat} />
      // )
    })
    .catch(function (error) {
      console.log(error)
    })
}

export default App
