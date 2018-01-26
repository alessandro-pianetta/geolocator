import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Map extends Component {
    componentDidUpdate(prevProps, prevState) {
        const { location } = prevProps
        const { target } = this.props
        
        if (!location.lat || !location.lng) {
            this.loadMap()
            this.watchLocation()
        } else {
            this.recenterMap(target.lat, target.lng)
            this.map.setZoom(13)
        }
    }

    loadMap() {
        if (this.props && this.props.google) {
            
            const { google, location } = this.props
            const maps = google.maps

            const mapRef = this.refs.map
            const node = ReactDOM.findDOMNode(mapRef)
            let zoom = 18
            let lat = location.lat
            let lng = location.lng
            const center = new maps.LatLng(lat, lng)
            const mapConfig = Object.assign({}, { center, zoom })
            this.map = new maps.Map(node, mapConfig)

            this.showCurrentLocation(lat, lng)
        }
    }

    showCurrentLocation(lat, lng) {
        const { google } = this.props
        const maps = google.maps

        const pref = {
            map: this.map,
            position: new maps.LatLng(lat, lng)
        }

        if (this.currentLocation) {
            this.currentLocation.setMap(null);
        }

        this.currentLocation = new google.maps.Marker(pref)
    }

    watchLocation() {
        const success = (pos) => {
            const { target } = this.props
            const crd = pos.coords
            this.distance = this.checkDistance(crd.latitude, crd.longitude, target.lat, target.lng)

            if (typeof (this.distance) === 'number' && this.distance <= 1.5) {
                if (!this.alerted) {
                    alert('Congratulations, you reached the target');
                    this.alerted = true
                    navigator.geolocation.clearWatch(id);
                }
            } else {
                this.recenterMap(crd.latitude, crd.longitude)
                this.showCurrentLocation(crd.latitude, crd.longitude)
            }
        }

        const error = (err) => {
            console.warn('ERROR(' + err.code + '): ' + err.message);
        }

        const id = navigator.geolocation.watchPosition(success, error);
    }

    recenterMap(lat, lng) {
        const map = this.map
        const maps = this.props.google.maps

        map.panTo(new maps.LatLng(lat, lng))
    }

    renderChildren() {
        const { children } = this.props

        if (!children) return

        return React.Children.map(children, c => {
            return React.cloneElement(c, {
                map: this.map,
                google: this.props.google,
                mapCenter: this.props.location
            });
        })

    }

    checkDistance(currentLat, currentLng, targetLat, targetLng) {
        if (!targetLat || !targetLng) {
            console.log(targetLat, targetLng, 'No target')
            return undefined
        }

        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((targetLat - currentLat) * p) / 2 +
            c(currentLat * p) * c(targetLat * p) *
            (1 - c((targetLng - currentLng) * p)) / 2;

        return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    }

    render() {
        return (
            <div>
                <div ref='map' style={{ width: '100vw', height: '50vh' }}>
                    Loading map...
                </div>
                {this.renderChildren()}
            </div>
        )
    }
    
}