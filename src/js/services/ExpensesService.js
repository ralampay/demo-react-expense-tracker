import axios from 'axios';
import { API_BASE_URL } from 'env';

export const getAll = () => {
    return axios.get(`${API_BASE_URL}/expenses`);
}

export const remove = (id) => {
    return axios.delete(`${API_BASE_URL}/expenses/${id}`)
}

export const create = (args) => {
    return axios.post(`${API_BASE_URL}/expenses`, args)
}