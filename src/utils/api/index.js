import axios from "axios";

const config = {
  baseURL: 'http://127.0.0.1:8000/api',
  timeout: 60 * 1000
}

const _axios = axios.create(config)


_axios.interceptors.request.use(
  config => {
    const hasToken = sessionStorage.getItem('token')
    if(hasToken) {
      config.headers.Authorization = 'Bearer ' + hasToken
    }
    return config
  },
  error => Promise.error(error)
)

_axios.interceptors.response.use(
  response => {
    if(response.status === 200) {
      return response.data
    }
    return response
  },
  error => Promise.reject(error)
)

export default _axios

