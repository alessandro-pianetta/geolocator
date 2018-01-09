import React, { Component } from 'react'
import { connect } from 'react-redux'

import MapContainer from './MapContainer';
import Form from './Form';

import { getLocation } from '../actions/LocationActions'
import { GET_LOCATION } from '../actions/types'

const DISTANCE_MATRIX_API_KEY = 'AIzaSyBBZHgiSDC29of6ScN06tDP_8Z95Mfntwo'
const GEOLOCATION_API_KEY = 'AIzaSyAaolAhdtSrjlPa6OJUVoOIJ4RucD8gNkA'
const MAPS_API_KEY = 'AIzaSyDRAK9QFWrWXVzlHFO0LXSo_UBrMedOsME'
const GEOCODING_API_KEY = 'AIzaSyAXMR9EuOAD6cUnJpBOEJo1Lxf-behgmCc'
const GOOGLE_MAPS_JS_API_KEY = 'AIzaSyDYkj8Bkx00wOSKafVdMXpF_LTj7nx_uO0'


class RootContainer extends Component {
    componentWillMount() {
        this.props.getLocation(MAPS_API_KEY)
    }


    render() {
        return (
            <div className="root-container">
                <MapContainer api={GOOGLE_MAPS_JS_API_KEY} lat={this.props.lat} lng={this.props.lng} />
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
