import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || window.location.origin,
  // withCredentials: true,
});

instance.interceptors.request.use(config => {
  if (config && config.url) {
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
  }

  return config;
});

export default instance;