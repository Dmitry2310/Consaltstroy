import * as api from "../api";
import { START_LOADING, END_LOADING, FETCH_ALL/* FETCH_POST, CREATE, UPDATE, DELETE, FETCH_BY_SEARCH, COMMENT, FETCH_USERS_POSTS, CLEAR_POST, IS_FETCHING  */ } from "./../Constants/actionTypes";

// Action creators

/* export const getPost = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchPost(id);
        dispatch({ type: FETCH_POST, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
}; */

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

/* export const getUserPosts = (userId) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchUsersPosts(userId);
        const action = { type: FETCH_USERS_POSTS, payload: data };
        dispatch(action);
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error.message);
    }
};
 */
export const createNews = (post, navigate) => async (dispatch) => {
    try {
        /* dispatch({ type: START_LOADING }); */
        const { data } = await api.createNews(post);
        navigate(`/news`);
        /* dispatch({ type: CREATE, payload: data }); */
        /* dispatch({ type: END_LOADING }); */
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

/* export const clearPost = () => async (dispatch) => {
    try {
        dispatch({ type: CLEAR_POST, payload: '' });
    } catch (error) {
        console.log(error.message);
    }
};
 */
export const deleteNews = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteNews(id);
    } catch (error) {
        console.log(error);
    }
};

/* export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error);
    }
}; */

/* export const commentPost = (value, id) => async (dispatch) => {
    try {
        const { data } = await api.comment(value, id);
        dispatch({ type: COMMENT, payload: data });
        return data.comments;
    } catch (error) {
        console.log(error);
    }
}; */

/* export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: IS_FETCHING, payload: true });
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
        dispatch({ type: FETCH_BY_SEARCH, payload: data });
        dispatch({ type: IS_FETCHING, payload: false });
    } catch (error) {
        console.log(error);
    }
}; */