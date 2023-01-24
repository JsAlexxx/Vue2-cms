<template>
  <div class="login-form-main">
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="loginFormRef"
      class="login-form"
    >
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          autocomplete="off"
          placeholder="请输入用户名"
        >
          <i slot="prefix" class="el-input__icon el-icon-user"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          autocomplete="off"
          placeholder="请输入密码"
        >
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('loginFormRef')"
          class="submit-btn"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { checkUsername } from "./rules";

export default {
  data() {
    const checkPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ validator: checkUsername, trigger: "change" }],
        password: [{ validator: checkPassword, trigger: "change" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push("/home");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-form-main {
  width: 580px;
  height: 390px;

  .login-form {
    .el-form-item {
      height: 100px;
      margin-bottom: 0;
      .el-input {
        ::v-deep .el-input__inner {
          height: 60px;
          padding-left: 45px;
          border: none;
          border-bottom: 1px solid $secondColor;
          border-radius: 0;
          font-size: 24px;
          color: $secondColor;
        }

        .el-input__icon {
          width: 30px;
          line-height: 60px;
          font-size: 30px;
          color: $primaryColor;
        }
      }

      .submit-btn {
        width: 390px;
        height: 70px;
        background-color: $primaryColor;
        border-radius: 35px;
        font-size: 24px;
      }

      &:last-of-type {
        text-align: center;
        margin-top: 90px;
      }
    }
  }
}
</style>
