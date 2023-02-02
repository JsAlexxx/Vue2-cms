import axios from "axios";
import { Message } from 'element-ui';

const config = {
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 60000
}

const _axios = axios.create(config)


_axios.interceptors.request.use(
  config => {
    const hasToken = sessionStorage.getItem('token')
    if (hasToken) {
      config.headers.Authorization = 'Bearer ' + hasToken
    }
    return config
  },
  error => Promise.reject(error)
)

_axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      const res = response.data
      return res
    } else {
      return Promise.reject(error)
    }
  },
  error => {
    if (error && error.response) {
      return Message.error(error.message)
    }
    else {
      if (JSON.stringify(error).includes('timeout')) {
        Message({
          message: '服务器响应超时，请刷新当前页',
          type: 'error',
        })
      }
    }
  }
)

export default _axios

