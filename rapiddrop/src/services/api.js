import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:7230/', // Your backend URL
});

export default api;

