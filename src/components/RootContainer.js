import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getLocation } from '../actions/LocationActions'

import { MAPS_JS_API_KEY, GEOCODING_API_KEY } from './apiKeys'

import Map from './Map';
import Marker from './Marker';
import Form from './Form';

class RootContainer extends Component {
    componentWillMount() {
        this.props.getLocation(MAPS_JS_API_KEY)
    }


    render() {
        const { lat, lng, google } = this.props
        
        return (
            <div className="root-container">
                <Map
                    api={MAPS_JS_API_KEY}
                    google={google}
                    location={{ lat, lng }}
                    getLocation={this.props.getLocation}
                    target={{ lat: this.props.targetLat, lng: this.props.targetLng }}
                >
                    <Marker target={{ lat: this.props.targetLat, lng: this.props.targetLng }}/>
                </Map>    

                <Form api={GEOCODING_API_KEY} google={google} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lat: state.lat,
        lng: state.lng,
        targetLat: state.targetLat,
        targetLng: state.targetLng
    }
}


export default connect(mapStateToProps, { getLocation })(RootContainer)
