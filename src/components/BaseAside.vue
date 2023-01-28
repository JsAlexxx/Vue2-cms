<template>
  <div class="base-aside-main">
    <div class="logo"></div>
    <div class="aisde-menu">
      <el-menu
        default-active="2"
        class="el-menu-vertical"
        background-color="transparent"
        :collapse="isCollapse"
        router
      >
        <el-menu-item
          v-for="item in menu"
          :key="item.path"
          :index="item.path"
          class="aside-menu-item"
        >
          <i :class="`${item.icon}`"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { createAsideMenu } from '@/utils/app';
import {roleMenu  } from '@/utils/data'

export default {
  mounted() {
    this.menu = createAsideMenu(roleMenu, 'admin')
  },
  data() {
    return {
      menu: []
    };
  },
  computed: {
    isCollapse() {
      return this.$store.getters.isAsideCollapse;
    },
  },

};
</script>

<style lang="scss" scoped>
.base-aside-main {
  .aisde-menu {
    .el-menu-vertical {
      min-width: 100px;
      border: none;

      &.el-menu--collapse {
        li {
          ::v-deep .el-tooltip {
            padding: 0 30px !important;
          }
        }
      }

      &:not(.el-menu--collapse) {
        width: 245px;
      }

      .aside-menu-item {
        height: 90px;
        line-height: 90px;
        padding-left: 30px !important;

        &:hover {
          background-color: $secondary !important;

          i,
          span {
            user-select: none;
            color: $baseGray;
          }
        }

        span {
          color: $baseGray;
          font-size: 18px;
          font-weight: normal;
        }

        i {
          color: $main;
          font-size: 30px;
          text-align: center;
          margin-right: 25px;
        }
      }
    }
  }
}
</style>
