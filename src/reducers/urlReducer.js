import { Types } from "./../actions/urlActions";
import urlHelper from "./../utils/urlHelper";

const defaultState = {
    statuses: [],
    isLoading: false,
};

const url = (state = defaultState, action) => {
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
            const { statuses } = state;
            const { url, serverName } = action.payload;

            const newStatuses = urlHelper.markStatusesAsSaved(statuses, url, serverName);

            return Object.assign(
                {},
                {...state},
                {isLoading: false},
                {statuses: newStatuses} );
        default:
            return state;
    }
};

export default url;