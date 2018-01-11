import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Map extends Component {
    
    componentDidUpdate(prevProps, prevState) {
        if (!prevProps.location.lat || !prevProps.location.lng) {
            this.loadMap()
        } else {
            this.recenterMap()
        }
    }

    loadMap() {
        if (this.props && this.props.google) {
            const { google, location } = this.props
            const maps = google.maps

            const mapRef = this.refs.map
            const node = ReactDOM.findDOMNode(mapRef)
            let zoom = 18;
            let lat = location.lat;
            let lng = location.lng;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
            })
            this.map = new maps.Map(node, mapConfig);

        }
    }

    recenterMap() {
        const map = this.map;
        const curr = this.props.location;

        const google = this.props.google;
        const maps = google.maps;

        if (map) {
            let center = new maps.LatLng(curr.lat, curr.lng)
            map.panTo(center)
        }
    }


    render() {
        return (
            <div ref='map' style={{ width: '100vw', height: '50vh' }}>
                Loading map...
            </div>
        )
    }
    
}