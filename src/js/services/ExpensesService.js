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

export const update = (id, args) => {
    return axios.put(`${API_BASE_URL}/expenses/${id}`, args);
}

export const fetchOne = (id) => {
    return axios.get(`${API_BASE_URL}/expenses/${id}`)
}