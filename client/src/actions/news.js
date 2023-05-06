import * as api from "../api";
import { START_LOADING, END_LOADING, FETCH_ALL } from "./../Constants/actionTypes";

// Action creators

export const getAllNews = (page) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchAllNews(page);
        const action = { type: FETCH_ALL, payload: data };
        dispatch(action);
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
};

export const createNews = (post, navigate) => async (dispatch) => {
    try {
        const { data } = await api.createNews(post);
        navigate(`/news`);
    } catch (error) {
        console.log(error.message);
    }
};

export const updateNews = (id, post, navigate) => async (dispatch) => {
    try {
        const { data } = await api.updateNews(id, post);
        navigate(`/news`);
    } catch (error) {
        console.log(error);
    }
};

export const deleteNews = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteNews(id);
    } catch (error) {
        console.log(error);
    }
};
