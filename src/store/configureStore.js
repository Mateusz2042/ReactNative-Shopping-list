/* eslint-disable */
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistCombineReducers, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AsyncStorage } from 'react-native';

import reducers from '../reducers';

const config = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'settings',
    'shop',
    'lists',
  ],
};

const composeForEnvironment = func => (__DEV__ ? composeWithDevTools(func) : compose(func));

const configureStore = (initialState) => {
  const middlewares = [
    thunk,
  ];
  const persistReducers = persistCombineReducers(config, reducers);
  const store = createStore(
    persistReducers,
    initialState,
    composeForEnvironment(applyMiddleware(...middlewares)),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/index', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer)
    })
  }
  return {
    store,
    persistor: persistStore(store),
  };
};

export default configureStore;
