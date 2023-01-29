<template>
  <div class="base-header-main">
    <div class="toggle-aside">
      <button class="toggle-btn" @click="toggleAsideCollapse">
        <i class="el-icon-s-fold"></i>
      </button>
    </div>

    <div class="user-top-menu">
      <div class="drop-down-group">
        <el-dropdown>
          <div class="user-avatar el-dropdown-link">
            <el-avatar class="avatar" />
            <span class="arrow"></span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人设置</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
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
      userAvatarUrl: "@/assets/logo.png",
    };
  },
  methods: {
    toggleAsideCollapse() {
      this.$store.commit("header/toggleAsideCollapse");
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
