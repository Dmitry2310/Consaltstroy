import * as api from "../api";
import { AUTH, SET_USER, CLEAR_USER, ERROR, CLEAR_ERROR /* ERROR, CLEAR_ERROR  */ } from "../Constants/actionTypes";

export const signIn = (formData, navigate) => async (dispatch) => {
    try {
        dispatch({type: CLEAR_ERROR});
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        navigate('/news');
    } catch (error) {
        if (error.response.status === 400) {
            dispatch({type: ERROR, payload: error.response.data.message})
        }
        console.log(error);
    }
};

export const setUser = (profile) => async (dispatch) => {
    dispatch({ type: SET_USER, payload: profile });
};

export const clearUser = () => async (dispatch) => {
    dispatch({ type: CLEAR_USER });
};