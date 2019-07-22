import { Types as ListTypes } from "../actions/urlListActions";

const defaultState = {
    notifications: [],
};

const notifications = (state = defaultState, action) => {
    switch (action.type) {
        case ListTypes.REMOVE_URL_DONE_NOTIFICATION:
        case ListTypes.REMOVE_URL_FAIL_NOTIFICATION:

        default:
            return state;
    }
};

export default notifications;