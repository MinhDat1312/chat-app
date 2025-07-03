import axios from 'axios';

export const baseURL = import.meta.env.REACT_APP_API_URI;
export const httpClient = axios.create({
    baseURL: baseURL,
});
