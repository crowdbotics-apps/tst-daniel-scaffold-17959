import apiReducer from "./reducers";
import customReducer from "./custom/reducers"
import rootSaga from "./sagas";
import customRootSaga from "./custom/sagas"
import articlesReducer from '../features/ArticleListAndDetail216823/store/reducers'
import articlesSagas from '../features/ArticleListAndDetail216823/store/sagas'

import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

/**
 * this app uses React Native Debugger, but it works without it
 */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware /** more middlewares if any goes here */];

const store = createStore(
  combineReducers({
    apiReducer: apiReducer,
    customReducer: customReducer,
    articlesReducer: articlesReducer
  }),
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
sagaMiddleware.run(customRootSaga);
sagaMiddleware.run(articlesSagas);

export { store };
