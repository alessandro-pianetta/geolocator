import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Map extends Component {
    
    componentDidUpdate(prevProps, prevState) {
        const { location } = prevProps

        if (!location.lat || !location.lng) {
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
            let zoom = 18
            let lat = location.lat
            let lng = location.lng
            const center = new maps.LatLng(lat, lng)
            const mapConfig = Object.assign({}, { center, zoom })
            this.map = new maps.Map(node, mapConfig)

        }
    }

    recenterMap() {
        const map = this.map
        const { lat, lng } = this.props.location

        const google = this.props.google
        const maps = google.maps

        if (map) {
            let center = new maps.LatLng(lat, lng)
            map.panTo(center)
        }
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