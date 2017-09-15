import reducers from './reducers';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import penderMiddleware from 'redux-pender';

const logger = createLogger();

const store = createStore(reducers, applyMiddleware(logger, ReduxThunk, penderMiddleware()));

export default store;