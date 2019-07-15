import { Types } from "./../actions/urlActions";

const defaultState = {
    statuses: [],
    isLoading: false,
};

const url = (state = defaultState, action) => {
    switch (action.type) {
        case Types.LOADING_URL:
            return Object.assign({}, {...state}, {isLoading: true} );
        case Types.ERROR_RESPONSE:
            return Object.assign(
                {},
                {...state},
                {isLoading: false},
                {statuses: [...state.statuses, {
                    url: action.payload.data.hostname,
                    statusCode: action.payload.status,
                    statusMessage: action.payload.statusText,
                }]});
        case Types.SUCCESS_RESPONSE:
            return Object.assign(
                {},
                {...state},
                {isLoading: false},
                {statuses: [...state.statuses, action.payload ]});

            case Types.ADD_URL:
            return Object.assign({}, {...action.payload}, {...state} );
        default:
            return state;
    }
};

export default url;