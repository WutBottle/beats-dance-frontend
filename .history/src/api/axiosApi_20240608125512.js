import axios from 'axios'
import { message } from 'antd'

const BACKEND_IP_PORT = '192.168.2.21:8000'
// 创建一个 Axios 实例
const instance = axios.create({
  baseURL: `http://${BACKEND_IP_PORT}`, // API 的基础 URL
  timeout: 10000, // 请求超时时间
});

// 请求拦截器
// instance.interceptors.request.use(
//   // config => {
//   //   config.headers['Authorization'] = `Bearer ${yourAuthToken}`;
//   //   return config;
//   // },
//   error => {
//     return Promise.reject(error);
//   }
// );

// 响应拦截器
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      // 对响应错误做些什么
      if (error.response.status === 401) {
        // 处理未授权
      }
      message.error(error.response.data.message || 'Error');
    } else {
      // 处理断网的情况
      message.error('Network Error');
    }
    return Promise.reject(error);
  }
);

// 封装一个通用的请求方法
function request(url, method, data, config) {
  return instance({
    url,
    method,
    data,
    ...config
  }).catch(error => {
    return Promise.reject(error);
  });
}

// 导出封装的方法
export default {
  get: (url, config) => request(url, 'GET', null, config),
  post: (url, data, config) => request(url, 'POST', data, config),
};
