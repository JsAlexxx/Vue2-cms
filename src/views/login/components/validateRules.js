import { sendUsernameForcheck } from '@/utils/api/login';

export const userNameRegExp = /^(?=.*[0-9])(?=.*[a-zA-Z])(.{6,10})$/

export const passwordRegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,12}$/


export const checkUsername = async (rule, value, callback) => {
  if (!value) {
    return callback(new Error("请输入用户名"));
  } else if (!userNameRegExp.test(value) && value) {
    return callback(new Error("用户名格式错误"));
  } else {
    return callback();
  }
};

export const checkRegisterUsername = async (rule, value, callback) => {
  if (!value) {
    return callback(new Error("请输入用户名"));
  } else if (!userNameRegExp.test(value) && value) {
    return callback(new Error("用户名格式错误"));
  } else if (userNameRegExp.test(value) && value) {
    const checkedRes = await sendUsernameForcheck({username:value})
    const {isUsernamePass} = checkedRes.data
    if(!isUsernamePass) {
      return callback(new Error(checkedRes.msg));
    }
  } else {
    return callback();
  }
};

export const checkPassword = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("请输入密码"));
  } else if (!passwordRegExp.test(value) && value) {
    return callback(new Error("密码格式错误"));
  } else {
    return callback();
  }
};
