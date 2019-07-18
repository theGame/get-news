import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import addUrls from "../reducers/urlStatusesReducer";
import listUrls from "../reducers/urlListReducer";
import thunk from 'redux-thunk';

const reducers = combineReducers({
    addUrls,
    listUrls,
});

export default function configureStore() {
  return createStore(reducers, applyMiddleware(logger, thunk));
};