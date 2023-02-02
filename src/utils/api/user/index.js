import _axios from '../index';

export const getUserInfo = async () => {
  return await _axios.get('/user/info')
}

export const getUserlist = async () => {
  return await _axios.get('/user/list')
}