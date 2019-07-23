import { Types as ListTypes } from "../actions/urlListActions";
import { Types as StatusesTypes } from "../actions/urlStatusesActions";
import { Types as NotificationTypes } from "../actions/notificationActions";

const defaultState = {
    notifications: [],
};

const notifications = (state = defaultState, action) => {
    switch (action.type) {
        case StatusesTypes.DONE_NOTIFICATION:
            return Object.assign(
                {},
                {notifications: [...state.notifications, action.msg]}
            );

        case StatusesTypes.FAIL_NOTIFICATION:
            return Object.assign(
                {},
                {notifications: [...state.notifications, action.msg]}
            );
        case ListTypes.REMOVE_URL_DONE_NOTIFICATION:
            return Object.assign(
                {},
                {notifications: [...state.notifications, action.msg]}
            );

        case ListTypes.REMOVE_URL_FAIL_NOTIFICATION:
            return Object.assign(
                {},
                {notifications: [...state.notifications, action.msg]}
            );

        case NotificationTypes.REMOVE_LAST_NOTIFICATION:
            const notificationsApartLast = state.notifications.slice(0, -1);
            return Object.assign(
                {},
                {notifications: notificationsApartLast}
            );
        default:
            return state;
    }
};

export default notifications;