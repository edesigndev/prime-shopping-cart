import axios from 'axios';

const http = axios.create();

http.interceptors.request.use((config) => {
  return config;
});

http.interceptors.response.use(
  (res) => {
    return Promise.resolve(res);
  },
  (err) => {
    const { status } = err.response;
    if (status === 401) console.log('401 - logout');
    else if (status === 403) {
      console.log('403', err.response);
    }
    return Promise.reject(err);
  }
);

export default http;
