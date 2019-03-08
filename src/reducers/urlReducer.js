import { Types } from "./../actions/urlActions";

const defaultState = {
    urls: [],
    isLoading: false,
    isTested: false
};

const url = (state = defaultState, action) => {
    switch (action.type) {
        case Types.LOADING_URL:
            return Object.assign({}, {...state}, {isLoading: false} );
        case Types.TESTED_URL:
            return Object.assign({}, {...state}, {isLoading: false} );
        case Types.LOADING_URL:
            return Object.assign({}, {...state}, {isLoading: false} );

            case Types.ADD_URL:
            return Object.assign({}, {...action.payload}, {...state} );
        default:
            return state;
    }
};

export default url;