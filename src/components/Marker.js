import { Component } from 'react'

export default class Marker extends Component {
    componentDidUpdate(prevProps) {
        if (this.marker && this.circle) {
            this.marker.setMap(null);
            this.circle.setMap(null);

        }
        if ((this.props.map !== prevProps.map) || (this.props.mapCenter !== prevProps.mapCenter)) {
            this.renderMarker()
        }
    }

    renderMarker() {
        const { google, map, target } = this.props

        const pref = {
            map,
            position: new google.maps.LatLng(target.lat, target.lng),
            animation: google.maps.Animation.DROP,
        }

        this.marker = new google.maps.Marker(pref)

        this.circle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: { lat: target.lat, lng: target.lng },
            radius: 1500 
        });

    }
    
    render() {
        return null
    }
}