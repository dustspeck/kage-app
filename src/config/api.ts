import axios from 'axios';

export const dataApi = axios.create({baseURL: 'http://192.168.1.48:5000/data'});
export const uiApi = axios.create({baseURL: 'http://192.168.1.48:5000/ui'});
