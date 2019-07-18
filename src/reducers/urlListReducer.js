import { Types } from "../actions/urlListActions";

const defaultState = {
    list: null,
    isLoading: false,
};

const urlList = (state = defaultState, action) => {
    switch (action.type) {
        case Types.LOADING_LIST:
            return Object.assign({}, {...state}, {isLoading: true} );

        case Types.GET_LIST_FAIL:
            return Object.assign(
                {},
                {list: null},
                {error: true},
                {isLoading: false}
            );

        case Types.GET_LIST_SUCCESS:
            return Object.assign(
                {},
                {isLoading: false},
                {list: [...action.payload.list]});

        default:
            return state;
    }
};

export default urlList;