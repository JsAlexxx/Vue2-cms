<template>
  <div class="base-header-main">
    <div class="toggle-aside">
      <button class="toggle-btn" @click="toggleAsideCollapse">
        <i :class="`el-icon-s-${ShowWhichBtnIcon}`"></i>
      </button>
    </div>

    <div class="user-top-menu">
      <div class="drop-down-group">
        <el-dropdown @command="handleDropDown">
          <div class="user-avatar el-dropdown-link">
            <el-avatar class="avatar">{{userAvatarText}}</el-avatar>
            <span class="arrow"></span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="setting">个人设置</el-dropdown-item>
            <el-dropdown-item command="logOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseHeader",
  data() {
    return {
      avatar: {
        userAvatarUrl: "@/assets/logo.png",
      }
    };
  },
  computed: {
    ShowWhichBtnIcon() {
      return this.$store.getters.isAsideCollapse ? 'unfold': 'fold'
    },
    userAvatarText() {
      return this.$store.getters.hasUserInfo.username.charAt(0)
    }
  },
  methods: {
    toggleAsideCollapse() {
      this.$store.commit("header/toggleAsideCollapse");
    },
    logOutAndBackToLogin() {
      sessionStorage.clear()
      this.$router.push('/login')
      this.$message.success('帐号已退出')
    },
    handleDropDown(command) {
      switch (command) {
        case 'logOut':
          this.logOutAndBackToLogin()
          break;
        case 'setting':
          this.$router.push('/home/setting')
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.base-header-main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px 0 35px;
  .toggle-aside {
    height: 100%;
    line-height: 90px;
    .toggle-btn {
      border: none;
      background-color: $baseWhite;
      cursor: pointer;
      display: inline-block;
      vertical-align: middle;

      i {
        color: $bg;
        font-size: 36px;
      }
    }
  }

  .user-top-menu {
    .drop-down-group {
      height: 100%;
      cursor: pointer;
      line-height: 90px;
      .avatar {
        width: 50px;
        height: 50px;
        font-size: 32px;
        line-height: 50px;
        background-color: $main;
        vertical-align: middle;
      }
      .arrow {
        display: inline-block;
        width: 0;
        height: 0;
        border-top: 8px solid $bg;
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
        vertical-align: middle;
        margin-left: 8px;
      }
    }
  }
}
</style>
