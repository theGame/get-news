import { Types } from "../actions/urlStatusesActions";
import urlHelper from "./../utils/urlHelper";

const defaultState = {
    statuses: [],
    isLoading: false,
};

const addUrls = (state = defaultState, action) => {
    switch (action.type) {
        case Types.LOADING_URL:
            return Object.assign({}, {...state}, {isLoading: true} );
        case Types.TEST_URL_FAIL:
            return Object.assign(
                {},
                {...state},
                {isLoading: false},
                {statuses: [{
                        url: action.payload.data.hostname,
                        statusCode: action.payload.status,
                        statusMessage: action.payload.statusText,
                    }, ...state.statuses]});
        case Types.TEST_URL_SUCCESS:
            return Object.assign(
                {},
                {...state},
                {isLoading: false},
                {statuses: [action.payload, ...state.statuses ]});

        case Types.SAVE_URL_SUCCESS:
            return Object.assign(
                {},
                {...state},
                {isLoading: false},
                {statuses: urlHelper.markStatusesAsSaved(state.statuses, action.payload.url, action.payload.serverName)} );

        case Types.SAVE_URL_FAIL:
            return Object.assign(
                {},
                {...state},
                {isLoading: false},
                {statuses: urlHelper.markStatusesAsFailed(state.statuses, action.payload.url, action.payload.serverName)} );

        default:
            return state;
    }
};

export default addUrls;