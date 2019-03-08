import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import create from "./../reducers/urlReducer";
import thunk from 'redux-thunk';

const reducers = combineReducers({
    create,
});

export default function configureStore() {
  return createStore(reducers, applyMiddleware(logger, thunk));
};