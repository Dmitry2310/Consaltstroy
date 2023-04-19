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


export const updateNews = (id, postData) => API.post(`/news/${id}`, postData);
export const createNews = (post) => API.post('/news', post);
export const deleteNews = (id) => API.delete(`/news/${id}`);
export const fetchAllNews = (page) => API.get(`/news?page=${page}`);

export const signIn = (formData) => API.post('/user/signin', formData);