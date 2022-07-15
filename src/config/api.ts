import axios from 'axios';

export const uiApi = axios.create({
  baseURL: 'http://192.168.1.48:5000/api/v1/ui',
  headers: {public_key: ''},
});
