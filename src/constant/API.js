import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://192.168.1.9:8000/api',
  header: {
    'Content-Type': 'application/json',
  },
});
