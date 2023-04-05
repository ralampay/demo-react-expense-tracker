import axios from 'axios';
import { API_BASE_URL } from 'env';
import { buildHeaders } from './UsersService';

export const getAll = () => {
    return axios.get(`${API_BASE_URL}/categories`, { headers: buildHeaders() });
}

export const remove = (id) => {
    return axios.delete(`${API_BASE_URL}/categories/${id}`, { headers: buildHeaders() })
}