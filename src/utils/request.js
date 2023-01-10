import axios from 'axios';
const service = axios.create({
  baseURL: 'http://yk.bdhuoke.com/api',
  timeout: 10000,
});
service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.resolve(error.response);
  },
);
export default service;