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
        return (
            <div className="root-container">
                <MapContainer api={MAPS_JS_API_KEY} lat={this.props.lat} lng={this.props.lng} />
                <Form api={GEOCODING_API_KEY}  />
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
