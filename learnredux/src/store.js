import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootWatcher from "./watchers";

const saga = createSagaMiddleware();
const middlewares = [saga];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

saga.run(rootWatcher);
export default store;
