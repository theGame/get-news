import { Types } from "../actions/urlListActions";

const defaultState = {
    list: new Map(),
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
            const listMap = action.payload.list.length
                ? new Map(action.payload.list.map(item => ([item.id, { ...item }])))
                : new Map();

            return Object.assign(
                {},
                {isLoading: false},
                {list: listMap},
            );

        case Types.REMOVE_URL_SUCCESS:
            const filteredList = new Map(state.list);
            const { id } = action;

            if(id && filteredList.has(id)){
                filteredList.delete(id);
            }

            return Object.assign(
                {},
                {...state},
                {list: filteredList},
                {isLoading: false},
            );

        case Types.REMOVE_URL_FAIL:
            return Object.assign(
                {},
                {...state},
                {isLoading: false},
            );

        default:
            return state;
    }
};

export default urlList;