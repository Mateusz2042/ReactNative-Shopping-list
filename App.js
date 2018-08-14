import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Router from './src/utils/Router';
import configureStore from './src/store/configureStore';

const { store, persistor } = configureStore();

export default class App extends Component {
  componentDidMount() {
    console.disableYellowBox = true;
  }

  disableYellowBoxWarnings = () => {
    // eslint-disable-next-line no-console
    console.disableYellowBox = true;
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    );
  }
}
