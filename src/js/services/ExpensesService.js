import axios from 'axios';
import { API_BASE_URL } from 'env';

export const getAll = () => {
    return axios.get(`${API_BASE_URL}/expenses`);
}