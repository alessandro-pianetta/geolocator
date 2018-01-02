import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

import Map from './components/Map'

const DISTANCE_MATRIX_API_KEY = 'AIzaSyBBZHgiSDC29of6ScN06tDP_8Z95Mfntwo'
const GEOLOCATION_API_KEY = 'AIzaSyAaolAhdtSrjlPa6OJUVoOIJ4RucD8gNkA'
const MAPS_API_KEY = 'AIzaSyDRAK9QFWrWXVzlHFO0LXSo_UBrMedOsME'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lng: '0',
      lat: '0'
    }
  }

  componentDidMount() {
    const self = this
    axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${GEOLOCATION_API_KEY}`)
      .then(function (response) {
        const loc = response.data.location
        console.log(loc)
        self.setState({ lat: loc.lat, lng: loc.lng })
      })
      .catch(function (error) {
        console.log(error)
      })

  }

  render() {
    return (
      <div className="App">
        <Map api={MAPS_API_KEY} lng={this.state.lng} lat={this.state.lat} />
      </div>
    )
  }
}


export default App
