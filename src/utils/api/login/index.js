import _axios from '../index';

const login = async (userInfo) => {
  return await _axios.post('/user/signin', userInfo)
}

const register = async (userInfo) => {
  return await _axios.post('/user/signup', userInfo)
}

const sendUsernameForcheck = async (username) => {
  return await _axios.post('/user/checkUsername',username)
}

export {
  login,register,sendUsernameForcheck
}
