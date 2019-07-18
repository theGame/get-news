import urlHelper from './../utils/urlHelper';

export const Types = {
    LOADING_LIST: "LOADING_LIST",

    GET_LIST_SUCCESS: "GET_LIST_SUCCESS",
    GET_LIST_FAIL: "GET_LIST_FAIL",
};

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

export const getUrlList = () => async dispatch => {
    try {
        dispatch(listLoading());
        const { data } = await urlHelper.getListOfUrls();
        dispatch(successGetListResponse(data));
    } catch (err) {
        dispatch(errorGetListResponse(err));
    }
};