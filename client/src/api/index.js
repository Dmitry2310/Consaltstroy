import axios from "axios";

export const baseURL = 'http://localhost:5000';

const API = axios.create({
    baseURL
});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const createPost = (post) => API.post('/posts', post);
export const updatePost = (id, postData) => API.post(`/posts/${id}`, postData);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);