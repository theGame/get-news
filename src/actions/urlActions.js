import urlHelper from './../utils/urlHelper';

// types of action
export const Types = {
    LOADING_URL: "LOADING_URL",

    SAVE_URL_SUCCESS: "SAVE_URL_SUCCESS",
    SAVE_URL_FAIL: "SAVE_URL_FAIL",

    TEST_URL_SUCCESS: "TEST_URL_SUCCESS",
    TEST_URL_FAIL: "TEST_URL_FAIL",
};

// actions

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
        const result = await urlHelper.saveWebPage(url);
        dispatch(successSaveResponse(result.data));
    } catch (err) {
        dispatch(errorSaveResponse(err));
    }
};