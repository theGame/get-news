import urlHelper from './../utils/urlHelper';

// types of action
export const Types = {
    ADD_URL: "ADD_URL",
    LOADING_URL: "LOADING_URL",
    TESTED_URL: "TESTED_URL",
    SAVE_URL: "SAVE_URL",
};

// actions
export const addUrl = payload => ({
    type: Types.ADD_URL,
    payload: payload
});


export const saveResponse = payload => ({
    type: Types.LOADING_URL,
    payload
});

export const urlLoading = () => ({
    type: Types.LOADING_URL,
});

export const testUrl = url => {
    return async (dispatch) => {
        dispatch(urlLoading());

        try {
            const result = await urlHelper.getWebPage(url);
            dispatch(addUrl(result));
        } catch (err) {
            dispatch(addUrl(err));
        }
    };
};

export const saveUrl = url => {
    return async (dispatch) => {
        dispatch(urlLoading());

        try {
            const result = await urlHelper.getWebPage(url);
            dispatch(saveResponse(result));
        } catch (err) {
            dispatch(saveResponse(err));
        }
    };
};