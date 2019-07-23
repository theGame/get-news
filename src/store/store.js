import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import addUrls from "../reducers/urlStatusesReducer";
import listUrls from "../reducers/urlListReducer";
import notifications from "../reducers/notificationReducer";
import thunk from 'redux-thunk';

const reducers = combineReducers({
    addUrls,
    listUrls,
    notifications,
});

export default function configureStore() {
  return createStore(reducers, applyMiddleware(logger, thunk));
};