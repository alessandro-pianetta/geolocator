import React, { Component } from 'react'
import { connect } from 'react-redux'

import { formatAddress } from '../actions/LocationActions'


class Form extends Component {
    componentWillMount() {
        console.log(this.props)
        this.state = {
            value: '',
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
        this.setState({ value: event.target.value });
    }
    
    handleSubmit(event) {
        this.props.formatAddress(this.state.value, this.props.api)
        event.preventDefault()        
    }

    initAutocomplete() {
        const { google } = this.props
        let autocomplete = new google.maps.places.Autocomplete((document.getElementById('autocomplete')), { types: ['geocode'] });
        autocomplete.addListener('place_changed', () => {
            let place = autocomplete.getPlace();
            this.setState({ value: place.formatted_address });
        });
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit.bind(this)}
            >
                <input
                    id="autocomplete"    
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                    placeholder="250 Hamilton Ave, Palo Alto, CA 94301"
                />
                <button>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lat: state.lat,
        lng: state.lng
    }
}


export default connect(mapStateToProps, { formatAddress })(Form)
