import urlHelper from './../utils/urlHelper';

// types of action
export const Types = {
    ADD_URL: "ADD_URL",
    LOADING_URL: "LOADING_URL",
    SAVE_URL: "SAVE_URL",
    SUCCESS_RESPONSE: "SUCCESS_RESPONSE",
    ERROR_RESPONSE: "ERROR_RESPONSE",
};

// actions

export const successResponse = payload => ({
    type: Types.SUCCESS_RESPONSE,
    payload
});

export const errorResponse = payload => ({
    type: Types.ERROR_RESPONSE,
    payload
});

export const urlLoading = () => ({
    type: Types.LOADING_URL,
});

export const testUrl = url => async dispatch => {
    try {
        dispatch(urlLoading());
        const result = await urlHelper.getWebPage(url);
        dispatch(successResponse(result.data));
    } catch (err) {
        dispatch(errorResponse(err.response));
    }
};

export const addUrl = url => async dispatch => {
    try {
        dispatch(urlLoading());
        const result = await urlHelper.getWebPage(url);
        dispatch(successResponse(result.data));
    } catch (err) {
        dispatch(errorResponse(err));
    }
};