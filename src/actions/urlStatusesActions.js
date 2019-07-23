import urlHelper from './../utils/urlHelper';

export const Types = {
    LOADING_URL: "LOADING_URL",

    SAVE_URL_SUCCESS: "SAVE_URL_SUCCESS",
    SAVE_URL_FAIL: "SAVE_URL_FAIL",

    TEST_URL_SUCCESS: "TEST_URL_SUCCESS",
    TEST_URL_FAIL: "TEST_URL_FAIL",

    FAIL_NOTIFICATION: "FAIL_NOTIFICATION",
    DONE_NOTIFICATION: "DONE_NOTIFICATION",
};

export const failNotification = msg => ({
    type: Types.FAIL_NOTIFICATION,
    msg
});

export const doneNotification = msg => ({
    type: Types.DONE_NOTIFICATION,
    msg
});

export const successTestResponse = payload => ({
    type: Types.TEST_URL_SUCCESS,
    payload
});

export const errorTestResponse = payload => ({
    type: Types.TEST_URL_FAIL,
    payload
});

export const successSaveResponse = payload => ({
    type: Types.SAVE_URL_SUCCESS,
    payload
});

export const errorSaveResponse = payload => ({
    type: Types.SAVE_URL_FAIL,
    payload
});

export const urlLoading = () => ({
    type: Types.LOADING_URL,
});

export const testUrl = url => async dispatch => {
    try {
        dispatch(urlLoading());
        const result = await urlHelper.testWebPage(url);
        dispatch(successTestResponse(result.data));
    } catch (err) {
        dispatch(errorTestResponse(err.response));
    }
};

export const addUrl = url => async dispatch => {
    try {
        dispatch(urlLoading());
        const { data } = await urlHelper.saveWebPage(url);
        dispatch(successSaveResponse(data));
        dispatch(doneNotification(`${url} successfully added!`));
    } catch (err) {
        dispatch(errorSaveResponse(err));
        dispatch(failNotification(err.response.data.msg));
    }
};