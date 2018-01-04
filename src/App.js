import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux'

import './App.css'
import location from './reducers/LocationReducer'
import RootContainer from './components/RootContainer';


class App extends Component {
  render() {
    const store = createStore(location, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

export default App
