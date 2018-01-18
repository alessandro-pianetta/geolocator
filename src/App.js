import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { GoogleApiWrapper } from 'google-maps-react'

import { MAPS_JS_API_KEY } from './components/apiKeys'

import './App.css'
import location from './reducers/LocationReducer'
import RootContainer from './components/RootContainer';


class App extends Component {
  render() {
    const store = createStore(location, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <RootContainer google={this.props.google} />
      </Provider>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: MAPS_JS_API_KEY,
  libraries: ['places']
})(App)
