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

export const successRemoveUrlNotification = msg => ({
    type: Types.REMOVE_URL_DONE_NOTIFICATION,
    msg
});

export const failRemoveUrlNotification = msg => ({
    type: Types.REMOVE_URL_FAIL_NOTIFICATION,
    msg
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
        dispatch(successRemoveUrlNotification(`Url with id: ${id} successfully removed!`));
        dispatch(removeUrlSuccessfully(id));
    } catch (err) {
        console.log(err);
        dispatch(failRemoveUrlNotification(err.response.data.msg));
        dispatch(removeUrlFail());
    }
};