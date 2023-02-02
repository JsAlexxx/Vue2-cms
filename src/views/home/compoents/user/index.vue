<template>
  <div>
    <div class="user-main">
      <h2 class="title">用户列表{{ ` (${table.userlistArr.length})` }}</h2>
      <div class="table">
        <div class="table-head">
          <span
            v-for="label in table.tableLabel"
            :key="label"
            class="table-label"
            >{{ label }}</span
          >
        </div>
        <div class="table-items">
          <el-table
            :data="table.tableData[pagination.currentPageIdx]"
            border
            :show-header="false"
          >
            <el-table-column prop="username" width="250"> </el-table-column>
            <el-table-column prop="realname" width="220"> </el-table-column>
            <el-table-column prop="phone" width="220"> </el-table-column>
            <el-table-column prop="role" width="220">
              <template slot-scope="scope">
                <span>{{ formatRole(scope.row.role) }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="lastLogin" width="220"> </el-table-column>
            <el-table-column prop="activeStatus" width="220">
              <template slot-scope="scope">
                <button class="toggle-status-btn" :class="{active: scope.row.activeStatus}" @click="toggleUserStatus">
                  {{ formatStatus(scope.row.activeStatus) }}
                </button>
              </template>
            </el-table-column>
            <el-table-column width="auto">
              <span>
                <i class="el-icon-setting"></i>
                编辑
              </span>
              <span>
                <i class="el-icon-setting"></i>
                删除
              </span>
            </el-table-column>
          </el-table>
        </div>
        <div class="table-page">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[pagination.pagesizeDefault, 15, 20, 25]"
            :page-size="pagination.pagesizeDefault"
            layout="total, sizes, prev, pager, next, jumper"
            :total="table.userlistArr.length"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserlist } from "@/utils/api/user";

export default {
  name: "theUser",

  async mounted() {
    await getUserlist().then((userListRes) => {
      this.table.userlistArr = userListRes.data;
      this.table.tableData = this.splitUserlist(
        this.table.userlistArr,
        this.pagination.pagesizeDefault
      );
      console.log(this.table);
    });
  },
  data() {
    return {
      table: {
        tableLabel: [
          "用户名",
          "姓名",
          "电话",
          "权限",
          "上次登录",
          "状态",
          "操作",
        ],
        userlistArr: [],
        tableData: [],
      },
      pagination: {
        pagesizeDefault: 8,
        currentPageIdx: 0,
      },
    };
  },
  computed: {},
  methods: {
    handleSizeChange(val) {
      this.table.tableData = this.splitUserlist(this.table.userlistArr, val);
    },
    handleCurrentChange(val) {
      this.pagination.currentPageIdx = val - 1;
    },
    splitUserlist(UserListArr, size) {
      if (!UserListArr.length || !size || size < 1) return [];
      let [start, end, result] = [null, null, []];
      for (let i = 0; i < Math.ceil(UserListArr.length / size); i++) {
        start = i * size;
        end = start + size;
        result.push(UserListArr.slice(start, end));
      }
      return result;
    },
    formatRole(role) {
      switch (role) {
        case "supAdmin":
          role = "超级管理员";
          break;
        case "admin":
          role = "管理员";
          break;
        case "user":
          role = "用户";
          break;
      }
      return role;
    },
    formatStatus(status) {
      let statusText = "";
      status ? (statusText = "已启用") : (statusText = "禁用中");
      return statusText;
    },
    toggleUserStatus() {
    }
  },
};
</script>

<style lang="scss" scoped>
.user-main {
  width: 100%;
  height: 100%;
  .title {
    height: 30px;
    font-size: 30px;
    color: $bg;
    font-weight: normal;
    margin-bottom: 35px;
  }

  .table {
    width: 1595px;
    height: 100%;
    .table-head {
      height: 40px;

      .table-label {
        display: inline-block;
        width: 220px;
        font-size: 18px;
        color: $secondary;
        font-weight: 400;
        text-align: center;
        padding-top: 5px;
        background-color: $baseGray;
        &:first-of-type {
          width: 250px;
        }
        &:last-of-type {
          width: calc(100% - 1350px);
        }
      }
    }

    .table-items {
      margin-bottom: 15px;
      .el-table {
        width: 100%;
        height: 602px;
        overflow-y: auto;
        border: 1px solid $border;
        border-bottom: none;
        ::v-deep .el-table__cell {
          border-right: 1px solid $border !important;
          border-bottom: 1px solid $border !important;
        }
      }
      ::v-deep .el-table td {
        height: 75px;
        text-align: center;
        color: $bg;
        font-size: 16px;
        font-weight: 500;
        &:last-of-type {
          span {
            font-size: 18px;
            font-weight: 600;
            color: $main;
            cursor: pointer;
            margin-right: 20px;

            &:last-of-type {
              margin-right: 0;
              color: $baseWarning;
            }
          }
        }

        .toggle-status-btn {
          padding: 11px 17px;
          border: 2px solid $border;
          border-radius: 5px;
          background-color: $baseGray;
          color: $baseWarning;
          cursor: pointer;
          &.active {
            color: $baseSuccess;
          }
        }
      }
    }

    .table-page {
      height: 40px;
      text-align: center;
      .el-pagination {
        padding: 0;
        line-height: 40px;
      }
      ::v-deep button {
        width: 40px;
        height: 40px;
        color: $main;
        background: none;
        padding: 0;
        &:first-of-type {
          margin-right: 7px;
        }

        i {
          font-size: 24px;
        }
      }
      ::v-deep .el-pager li {
        width: 40px;
        height: 40px;
        line-height: 40px;
        margin-right: 7px;
        padding: 0;
        font-size: 16px;
        &.active {
          color: $main;
        }
      }
      ::v-deep .el-pagination__total,
      ::v-deep .el-pagination__sizes,
      ::v-deep .el-pagination__jump {
        font-size: 16px !important;
        vertical-align: middle !important;
        height: 40px;
        line-height: 40px;
      }
    }
  }
}
</style>
