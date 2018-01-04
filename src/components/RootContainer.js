import React, { Component } from 'react'
import { connect } from 'react-redux'

import Map from './Map'
import Form from './Form';

import { getLocation } from '../actions/LocationActions'
import { GET_LOCATION } from '../actions/types'

const DISTANCE_MATRIX_API_KEY = 'AIzaSyBBZHgiSDC29of6ScN06tDP_8Z95Mfntwo'
const GEOLOCATION_API_KEY = 'AIzaSyAaolAhdtSrjlPa6OJUVoOIJ4RucD8gNkA'
const MAPS_API_KEY = 'AIzaSyDRAK9QFWrWXVzlHFO0LXSo_UBrMedOsME'
const GEOCODING_API_KEY = 'AIzaSyAXMR9EuOAD6cUnJpBOEJo1Lxf-behgmCc'


class RootContainer extends Component {
    componentWillMount() {
        this.props.getLocation()
    }


    render() {
        return (
            <div className="RootContainer">
                <Map api={MAPS_API_KEY} lng={this.props.lng} lat={this.props.lat} />
                <Form api={GEOCODING_API_KEY} />
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
