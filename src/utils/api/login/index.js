import _axios from '../index';

const login = async (userInfo) => {
  return await _axios.post('/user/signin', userInfo)
}

const register = async (userInfo) => {
  return await _axios.post('/user/signup', userInfo)
}

export {
  login,register
}
