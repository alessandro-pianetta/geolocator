import React, { Component } from 'react'
import { GoogleApiWrapper } from 'google-maps-react'

import Map from './Map'
import Marker from './Marker'



class MapContainer extends Component {
    componentWillMount() {
        const api = this.props.api
    }
    
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

const styles = {
    mapStyle: {
        height: '100%',
        width: '100%',
        position: 'relative'
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDYkj8Bkx00wOSKafVdMXpF_LTj7nx_uO0',
    libraries: ['places']
})(MapContainer)
