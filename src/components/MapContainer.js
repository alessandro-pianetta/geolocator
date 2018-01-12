import React, { Component } from 'react'
import { GoogleApiWrapper } from 'google-maps-react'

import { MAPS_JS_API_KEY } from './apiKeys'

import Map from './Map'
import Marker from './Marker'



class MapContainer extends Component {    
    render() {
        const { lat, lng, google } = this.props

        return (
            <div className="map-container">
                <Map google={google} location={{ lat, lng }}>
                    <Marker />    
                </Map>    
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: MAPS_JS_API_KEY,
    libraries: ['places']
})(MapContainer)
