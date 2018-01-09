import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class CustomMap extends Component {
    
    componentDidUpdate(prevProps, prevState) {
        if (this.props.google) {
            this.loadMap()
        }
    }

    loadMap() {
        if (this.props && this.props.google) {
            const { google, location } = this.props
            const maps = google.maps

            const mapRef = this.refs.map
            const node = ReactDOM.findDOMNode(mapRef)
            let zoom = 14;
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

    render() {
        console.log(this.props)
        return (
            <div ref='map' style={{ width: '100vw', height: '50vh' }}>
                Loading map...
            </div>

            // <div className="map">
            //     <iframe
            //         title="map"
            //         width="600"
            //         height="450"
            //         frameBorder="0"
            //         src={`https://www.google.com/maps/embed/v1/view?zoom=17&center=${props.lat}%2C${props.lng}&key=${props.api}`}
            //     />
            // </div>
        )
    }
    
}