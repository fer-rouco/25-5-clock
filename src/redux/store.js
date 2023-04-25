import { createStore } from 'redux';
import { applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const configureStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
  return configureStoreWithMiddleware(rootReducer, initialState);
}