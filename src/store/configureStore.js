import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reviewsReducer from './reviews/reducer';

import rootSaga from './rootSaga';
import ErrorMiddleware from './middleware/ErrorMiddleware';

const logger = createLogger({
  // ...optionss
});

const appReducer = combineReducers({
  reviews: reviewsReducer,
});

const rootReducer = (state, action) => {
  // maybe some code for later maybe not
  return appReducer(state, action);
};

const sagaMiddleware = createSagaMiddleware();

const middleware = __DEV__
  ? [sagaMiddleware, logger, ErrorMiddleware]
  : [sagaMiddleware, ErrorMiddleware];

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(...middleware));
};

const store = configureStore();

sagaMiddleware.run(rootSaga);

export default store;
