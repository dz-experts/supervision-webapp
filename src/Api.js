import axios from 'axios';
import Constants from './Constants';

const api = axios.create({
    baseURL: `${Constants.baseURL}`
});

export default api;
