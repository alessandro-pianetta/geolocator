import React, { Component } from 'react'
import axios from 'axios'

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
        axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.value}&key=${this.props.api}`)
            .then(response => {
                const loc = response.data.results[0].geometry.location
                console.log(loc)
            })
            .catch(error => {
                console.log(error)
            })
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

export default Form
