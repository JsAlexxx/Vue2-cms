import _axios from '../index';

export const getHomeData = async () => {
  return await _axios.get('/home')
}