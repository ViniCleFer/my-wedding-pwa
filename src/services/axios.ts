import axios from 'axios';

export function getAPIClient() {
  const token = '';

  const api = axios.create({
    baseURL: 'http://localhost:3333',
  });

  api.interceptors.request.use((config) => {
    console.log(config);

    return config;
  });

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}
