import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getLocation } from '../actions/LocationActions'

import { MAPS_JS_API_KEY, GEOCODING_API_KEY } from './apiKeys'

import MapContainer from './MapContainer';
import Form from './Form';

class RootContainer extends Component {
    componentWillMount() {
        this.props.getLocation(MAPS_JS_API_KEY)
    }


    render() {
        const { lat, lng, google } = this.props
        
        return (
            <div className="root-container">
                <MapContainer api={MAPS_JS_API_KEY} lat={lat} lng={lng} google={google} />
                <Form api={GEOCODING_API_KEY} google={google} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lat: state.lat,
        lng: state.lng
    }
}


export default connect(mapStateToProps, { getLocation })(RootContainer)
