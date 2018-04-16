import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import RootNavigation from './navigation/RootNavigation'

import store from './config/store'

class App extends Component {
  render() {
    return (
        <Provider store={store} >
          <BrowserRouter>
            <RootNavigation />
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
