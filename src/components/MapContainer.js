import React, { Component } from 'react'

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

export default MapContainer