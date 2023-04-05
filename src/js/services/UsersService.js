import axios from 'axios';
import {
    API_BASE_URL
} from'env';

const USER = "USER";
const TOKEN = "TOKEN";

export const login = (args) => {
    return axios.post(`${API_BASE_URL}/login`, args)
}

export const createSession = (args) => {
    // HTML5 localstorage
    localStorage.setItem(TOKEN, args.token);
    localStorage.setItem(USER, JSON.stringify(args));
}

export const destroySession = () => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(USER);
}

export const getToken = () => {
    return localStorage.getItem(TOKEN);
}

export const getCurrentUser = () => {
    const currentUserStr = localStorage.getItem(USER);

    if (currentUserStr) {
        return JSON.parse(currentUserStr);
    } else {
        return false;
    }
}

export const isLoggedIn = () => {
    return getCurrentUser() != false;
}