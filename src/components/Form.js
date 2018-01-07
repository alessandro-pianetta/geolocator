import React, { Component } from 'react'
import { connect } from 'react-redux'

import { formatAddress } from '../actions/LocationActions'


class Form extends Component {
    componentWillMount() {
        this.state = {
            value: ''
        }
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.props.formatAddress(this.state.value, this.props.api)
        event.preventDefault()        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input
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
