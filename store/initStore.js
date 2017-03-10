import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers/index';
import initialState from './initialState';

export default () => {
  // TODO - Remove in production !!!
  const composeEnhancers = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; // eslint-disable-line no-underscore-dangle
  const middlewares = composeEnhancers(applyMiddleware(
    thunkMiddleware,
  ));

  return createStore(reducers, initialState, middlewares);
};
