import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

import CustomMap from './CustomMap'



class MapContainer extends Component {
    componentWillMount() {
        const api = this.props.api
    }
    
    render() {
        const { lat, lng, google } = this.props

        // if (!this.props.loaded) {
        //     return <div>Loading...</div>
        // }

        return (
            <div className="map-container">
                {/* <Map
                    google={google}
                    style={styles.mapStyle}
                    initialCenter={{
                        lat: lat || 37,
                        lng: lng || -122
                    }}
                    center={{ lat, lng }}
                    className='map'
                    zoom={15}
                >
                    <Marker position={{ lat, lng }} />
                </Map>     */}
                <CustomMap google={google} location={{ lat, lng }} />
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
