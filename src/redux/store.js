import { createStore, applyMiddleware, compose } from 'redux';
import initialState from './initialState';
import rootReducer from './reducers/rootReducer';

const enhancers = [];
const isDevelopment = process.env.NODE_ENV === 'development';
if (
  isDevelopment &&
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
}

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(), ...enhancers)
);

export default store;
