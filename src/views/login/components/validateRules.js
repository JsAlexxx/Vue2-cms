export const userNameRegExp =  /^(?=.*[0-9])(?=.*[a-zA-Z])(.{6,10})$/

export const passwordRegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,12}$/

export const checkUsername = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("请输入用户名"));
  } else if (!userNameRegExp.test(value) && value) {
    callback(new Error("用户名格式错误"));
  } else {
    callback();
  }
};

export const checkPassword = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("请输入密码"));
  } else if (!passwordRegExp.test(value) && value) {
    callback(new Error("密码格式错误"));
  } else {
    callback();
  }
};
