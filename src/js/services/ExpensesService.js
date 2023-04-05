import axios from 'axios';
import { API_BASE_URL } from 'env';
import { buildHeaders } from './UsersService';

export const getAll = (q) => {
    let url = `${API_BASE_URL}/expenses`;

    if (q) {
        url = `${url}?q=${q}`;
    }

    return axios.get(url, { headers: buildHeaders() });
}

export const remove = (id) => {
    return axios.delete(`${API_BASE_URL}/expenses/${id}`, { headers: buildHeaders() })
}

export const create = (args) => {
    return axios.post(`${API_BASE_URL}/expenses`, args, { headers: buildHeaders() })
}

export const update = (id, args) => {
    return axios.put(`${API_BASE_URL}/expenses/${id}`, args, { headers: buildHeaders() });
}

export const fetchOne = (id) => {
    return axios.get(`${API_BASE_URL}/expenses/${id}`, { headers: buildHeaders() });
}