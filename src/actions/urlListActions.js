import urlHelper from './../utils/urlHelper';

export const Types = {
    LOADING_LIST: "LOADING_LIST",

    GET_LIST_SUCCESS: "GET_LIST_SUCCESS",
    GET_LIST_FAIL: "GET_LIST_FAIL",

    REMOVE_URL_SUCCESS: "REMOVE_URL_SUCCESS",
    REMOVE_URL_FAIL: "REMOVE_URL_FAILED",

    REMOVE_URL_DONE_NOTIFICATION: "REMOVE_URL_DONE_NOTIFICATION",
    REMOVE_URL_FAIL_NOTIFICATION: "REMOVE_URL_FAIL_NOTIFICATION",
};

export const successRemoveUrlNotification = notification => ({
    type: Types.REMOVE_URL_DONE_NOTIFICATION,
    notification
});

export const failRemoveUrlNotification = notification => ({
    type: Types.REMOVE_URL_FAIL_NOTIFICATION,
    notification
});

export const successGetListResponse = payload => ({
    type: Types.GET_LIST_SUCCESS,
    payload
});

export const errorGetListResponse = payload => ({
    type: Types.GET_LIST_FAIL,
    payload
});

export const listLoading = () => ({
    type: Types.LOADING_LIST,
});

export const removeUrlSuccessfully = id=> ({
    type: Types.REMOVE_URL_SUCCESS,
    id
});
export const removeUrlFail = () => ({
    type: Types.REMOVE_URL_FAIL,
});

export const getUrlList = () => async dispatch => {
    try {
        dispatch(listLoading());
        const { data } = await urlHelper.getListOfUrls();
        dispatch(successGetListResponse(data));
    } catch (err) {
        dispatch(errorGetListResponse(err));
    }
};

export const removeUrl = id => async dispatch => {
    try {
        dispatch(listLoading());
        const { data } = await urlHelper.deleteUrlById(id);
        dispatch(successRemoveUrlNotification(data)); //notification msg should be here! todo
        dispatch(removeUrlSuccessfully(id));
    } catch (err) {
        dispatch(failRemoveUrlNotification(err)); //notification msg should be here! todo
        dispatch(removeUrlFail());
    }
};