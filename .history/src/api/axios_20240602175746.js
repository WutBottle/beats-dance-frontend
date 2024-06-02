import axios from 'axios'
import { message } from 'antd'

// 创建一个 Axios 实例
const instance = axios.create({
  baseURL: 'http://172.16.1.216:8080', // API 的基础 URL
  timeout: 10000, // 请求超时时间
  headers: { 'X-Custom-Header': 'foobar' } // 头信息
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    config.headers['Authorization'] = `Bearer ${yourAuthToken}`;
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    if (response.data.code === 0) {
      message.success(response.data.message);
    } else {
      message.error(response.data.message);
    }
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
    // 可以在这里处理全局的请求错误
    console.error('There was an error!', error);
    return Promise.reject(error);
  });
}

// 导出封装的方法
export default {
  get: (url, config) => request(url, 'GET', null, config),
  post: (url, data, config) => request(url, 'POST', data, config),
  put: (url, data, config) => request(url, 'PUT', data, config),
  delete: (url, config) => request(url, 'DELETE', null, config),
};
