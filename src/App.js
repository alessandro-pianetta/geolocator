import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

import Map from './components/Map'
import Form from './components/Form';

const DISTANCE_MATRIX_API_KEY = 'AIzaSyBBZHgiSDC29of6ScN06tDP_8Z95Mfntwo'
const GEOLOCATION_API_KEY = 'AIzaSyAaolAhdtSrjlPa6OJUVoOIJ4RucD8gNkA'
const MAPS_API_KEY = 'AIzaSyDRAK9QFWrWXVzlHFO0LXSo_UBrMedOsME'
const GEOCODING_API_KEY = 'AIzaSyAXMR9EuOAD6cUnJpBOEJo1Lxf-behgmCc'


class App extends Component {
  componentWillMount() {
    this.state = {
      lng: '',
      lat: ''
    }
    this.getLocation()  
  }

  getLocation() {
    axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${GEOLOCATION_API_KEY}`)
      .then(response => {
        const loc = response.data.location
        this.setState({ lat: loc.lat, lng: loc.lng })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="App">
        <Map api={MAPS_API_KEY} lng={this.state.lng} lat={this.state.lat} />
        <Form api={GEOCODING_API_KEY} />
      </div>
    )
  }
}


export default App
