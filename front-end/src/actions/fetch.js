import * as types from "../actionTypes";


export const fetchData = () => ({
    type: types.FETCH_DATA
});

export const fetchDataSuccess = () => ({
    type: types.FETCH_DATA_SUCCESS
});

export const fetchDataError = () => ({
    type: types.FETCH_DATA_ERROR,
    error: "An error has occur"
});