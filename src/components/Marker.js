import React, { Component } from 'react'

export default class Marker extends Component {
    componentDidUpdate(prevProps) {
        if (this.marker) {
            this.marker.setMap(null);
        }
        if ((this.props.map !== prevProps.map) || (this.props.mapCenter !== prevProps.mapCenter)) {
            this.renderMarker()
        }
    }

    renderMarker() {
        let { map, google, mapCenter } = this.props

        const pref = {
            map,
            position: new google.maps.LatLng(mapCenter.lat, mapCenter.lng),
            animation: google.maps.Animation.DROP,
        }

        this.marker = new google.maps.Marker(pref)
    }
    
    render() {
        return null
    }
}