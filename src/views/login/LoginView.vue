<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-header">
        <div class="logo">
          <img src="@/assets/logo.png" alt="logo" class="logo-img" />
          <span class="info">VueAdmin</span>
        </div>
        <div class="login-form-toggle-menu">
          <div
            v-for="(item, idx) in formMenuTags"
            :key="item.index"
            class="menu-tags"
            :class="{ active: currentTag === idx }"
            @click="toggleForm(idx)"
          >
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
      <div class="form">
        <h5 class="form-title">
          {{ currentTag === 0 ? '后台管理登录' : '用户注册' }}
        </h5>
        <div class="form-container">
          <login-form v-if="currentTag === 0" />
          <register-form v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm";
import registerForm from './components/RegisterForm'
export default {
  name: "loginPage",
  data() {
    return {
      formMenuTags: [
        { title: "登录", index: "login" },
        { title: "注册", index: "register" },
      ],
      currentTag: 0,
    };
  },
  methods: {
    toggleForm(tagIdx) {
      this.currentTag = tagIdx
    }
  },
  components: {
    LoginForm,
    registerForm
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  background-color: $bg;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-container {
    min-width: 580px;
    width: 1220px;
    height: 850px;
    background-color: $baseWhite;
    box-shadow: 0 0 139px 0 rgba(147, 161, 185, 0.59);

    .login-header {
      width: 100%;
      height: 145px;
      line-height: 145px;
      background-color: $bg;
      display: flex;
      justify-content: space-between;
      .logo {
        width: 320px;
        height: 100%;
        // padding: 37px 45px 45px 45px;
        // display: flex;
        padding-left: 45px;
        .logo-img {
          width: 65px;
          height: 65px;
          vertical-align: middle;
        }

        .info {
          padding-left: 20px;
          font-size: 30px;
          color: $baseWhite;
          text-align: center;
          vertical-align: middle;
          user-select: none;
        }
      }

      .login-form-toggle-menu {
        height: 100%;
        display: flex;

        .menu-tags {
          width: 170px;
          text-align: center;
          font-size: 24px;
          color: $baseWhite;
          cursor: pointer;
          font-weight: 300;
          &.active {
            border-bottom: 10px solid $main;
          }
        }
      }
    }

    .form {
      height: 705px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 80px 0 105px 0;
      .form-title {
        width: 580px;
        height: 65px;
        color: $secondary;
        font-weight: 300;
        font-size: 42px;
        text-align: center;
        letter-spacing: 2px;
        margin-bottom: 65px;
        user-select: none;
      }
    }
  }
}
</style>
