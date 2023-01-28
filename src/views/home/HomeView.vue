<template>
  <div class="home-page">
    <el-container class="home-container">
      <el-aside width="auto" class="aside-container">
        <base-aside />
      </el-aside>
      <el-container>
        <el-header class="header-container" >
          <base-header />
        </el-header>
        <el-main class="main-container">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import BaseAside from '@/components/BaseAside.vue';
import BaseHeader from '@/components/BaseHeader.vue';

export default {
  name: 'HomeView',
  components: {
    BaseAside,
    BaseHeader
  }
};
</script>

<style lang="scss" scoped>
.home-page {
  width: 100vw;
  height: 100vh;

  .home-container {
    width: 100%;
    height: 100%;

    .header-container {
      height: 90px !important;
    }

    .aside-container {
      height: 100vh;
      background-color: $bg;
    }

    .main-container {
      background-color: $baseGray;
      padding: 48px 45px 35px 35px;
    }
  }
}
</style>
