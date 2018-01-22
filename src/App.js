import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { GoogleApiWrapper } from 'google-maps-react'

import { MAPS_JS_API_KEY } from './components/apiKeys'

import './App.css'
import location from './reducers/LocationReducer'
import RootContainer from './components/RootContainer';

const store = createStore(location, {}, applyMiddleware(ReduxThunk))

class App extends Component {
  state = {
    googleReady: false
  }

  constructor(props) {
    super(props)

    const { googleReady } = this.state;

    if (!googleReady) {
      // console.log('waiting for google')
      this.interval = setInterval(() => {
        if (window.google) {
          // console.log('google is available')
          this.setState({ googleReady: true })
          clearInterval(this.interval)
        }
      }, 100);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { googleReady } = this.state;

    if (googleReady) {
      return (
        <Provider store={store}>
          <RootContainer google={this.props.google} />
        </Provider>
      );
    }

    return null
  }
}

export default GoogleApiWrapper({
  apiKey: MAPS_JS_API_KEY,
  libraries: ['places']
})(App)
