import React, { Component } from 'react'
import { connect } from 'react-redux'

import { formatAddress } from '../actions/LocationActions'


class Form extends Component {
    componentWillMount() {
        this.state = {
            address: '',
            radius: '',
            phone: '',
            sender: '',
            recipient: '',
            message: '',
            init: false
        }
    }
    
    componentWillUpdate() {
        if (this.props.google && !this.state.init) {
            this.initAutocomplete()
            this.setState({init: true})
        }
    }

    handleChange(event) {
        const { target } = event;
        this.setState({ [target.id]: target.value })
    }
    
    handleSubmit(event) {
        this.props.formatAddress(this.state.address, this.props.api)
        event.preventDefault()        
    }

    initAutocomplete() {
        const { google } = this.props
        let autocomplete = new google.maps.places.Autocomplete((document.getElementById('address')), { types: ['geocode'] });
        autocomplete.addListener('place_changed', () => {
            let place = autocomplete.getPlace();
            this.setState({ address: place.formatted_address });
        });
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit.bind(this)}
            >
                <input
                    id="address"    
                    type="text"
                    value={this.state.address}
                    onChange={this.handleChange.bind(this)}
                    placeholder="250 Hamilton Ave, Palo Alto, CA 94301"
                />
                <input
                    id="radius"
                    type="number"
                    value={this.state.km}
                    onChange={this.handleChange.bind(this)}
                    placeholder="1.5"
                />
                <input
                    id="phone"
                    type="tel"
                    value={this.state.phone}
                    onChange={this.handleChange.bind(this)}
                    placeholder="5551231234"
                />
                <input
                    id="sender"
                    type="text"
                    value={this.state.sender}
                    onChange={this.handleChange.bind(this)}
                    placeholder="Jemma"
                />
                <input
                    id="recipient"
                    type="text"
                    value={this.state.recipient}
                    onChange={this.handleChange.bind(this)}
                    placeholder="Leo"
                />
                <textarea
                    id="message"
                    value={this.state.message}
                    onChange={this.handleChange.bind(this)}
                    placeholder="Your message here..."
                />

                <button id="submit">Submit</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        targetLat: state.lat,
        targetLng: state.lng
    }
}


export default connect(mapStateToProps, { formatAddress })(Form)
