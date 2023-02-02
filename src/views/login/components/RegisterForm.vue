<template>
  <div class="register-form-main">
    <el-form
      :model="registerForm"
      :rules="rules"
      ref="registerFormRef"
      class="register-form"
    >
      <el-form-item prop="username">
        <el-input
          v-model="registerForm.username"
          autocomplete="off"
          placeholder="创建用户名"
        >
          <i slot="prefix" class="inner-icon el-icon-user"></i>
          <el-tooltip
            slot="suffix"
            class="item"
            effect="dark"
            :content="tooltips.usernameRoles"
            placement="left"
          >
            <i class="inner-icon el-icon-question tip"></i>
          </el-tooltip>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="registerForm.password"
          autocomplete="off"
          placeholder="创建密码"
        >
          <i slot="prefix" class="inner-icon el-icon-lock"></i>
          <el-tooltip
            slot="suffix"
            class="item"
            effect="dark"
            :content="tooltips.passwordRoles"
            placement="left"
          >
            <i class="inner-icon el-icon-question tip"></i>
          </el-tooltip>
        </el-input>
      </el-form-item>
      <el-form-item prop="passwordConfirm">
        <el-input
          type="password"
          v-model="registerForm.passwordConfirm"
          autocomplete="off"
          placeholder="再次输入密码"
        >
          <i slot="prefix" class="inner-icon el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('registerFormRef')"
          class="submit-btn"
          >注册</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { checkRegisterUsername, checkPassword, passwordRegExp } from "./validateRules";
import { register } from "@/utils/api/login";

export default {
  data() {
    const checkPasswordConfirm = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入密码"));
      } else if (!passwordRegExp.test(value) && value) {
        return callback(new Error("密码格式错误"));
      } else if (
        passwordRegExp.test(value) &&
        value !== this.registerForm.password
      ) {
        return callback(new Error("两次密码不一致"));
      } else {
        return callback();
      }
    };
    return {
      registerForm: {
        username: "",
        password: "",
        passwordConfirm: "",
      },
      tooltips: {
        usernameRoles: "6-10位，必须包含英文字母和数字",
        passwordRoles: "8-12位，必须包含大写、小写英文字母，数字，以及特殊符号",
      },
      rules: {
        username: [
          { validator: checkRegisterUsername, trigger: "change" },
        ],
        password: [{ validator: checkPassword, trigger: "change" }],
        passwordConfirm: [
          { validator: checkPasswordConfirm, trigger: "change" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const { username, password } = this.registerForm;
          const registerRes = await register({ username, password });
          if (registerRes) {
            if(registerRes.code === 200) {
              this.$message.success(registerRes.msg);
              this.$emit('watchRegister')
            }
          }
        } else {
          this.$message.warning("请输入正确的用户名和密码");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.register-form-main {
  width: 580px;
  height: 390px;

  .register-form {
    .el-form-item {
      height: 85px;
      margin-bottom: 0;
      .el-input {
        ::v-deep .el-input__inner {
          height: 60px;
          padding-left: 45px;
          border: none;
          border-bottom: 1px solid $secondary;
          border-radius: 0;
          font-size: 24px;
          color: $secondary;
        }

        .inner-icon {
          width: 30px;
          line-height: 60px;
          font-size: 30px;
          color: $main;
          &.tip {
            user-select: none;
            cursor: pointer;
            color: $secondary;
          }
        }
      }

      .submit-btn {
        width: 390px;
        height: 70px;
        background-color: $main;
        border-radius: 35px;
        font-size: 24px;
      }

      &:last-of-type {
        text-align: center;
        margin-top: 35px;
      }
    }
  }
}
</style>

<style lang="scss">
.el-tooltip__popper.is-dark {
  font-size: 16px;
  color: $baseGray;
  background-color: $bg;
}
</style>
