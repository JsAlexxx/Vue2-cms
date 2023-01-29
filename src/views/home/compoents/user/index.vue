<template>
  <div>
    <div class="user-main">
      <h2 class="title">用户列表(21313)</h2>
      <div class="table">
        <div class="table-head">
          <span v-for="label in tableLabel" :key="label" class="table-label">{{
            label
          }}</span>
        </div>
        <div class="table-items">
          <el-table
            :data="tableData"
            style="width: 100%, height: 670px"
            border
            :show-header="false"
          >
            <el-table-column prop="username" width="250"> </el-table-column>
            <el-table-column prop="realname" width="220"> </el-table-column>
            <el-table-column prop="role" width="220"> </el-table-column>
            <el-table-column prop="phone" width="220"> </el-table-column>
            <el-table-column prop="lastLogin" width="220"> </el-table-column>
            <el-table-column prop="active" width="220"> </el-table-column>
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
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "theUser",
  data() {
    return {
      tableLabel: ["用户名","姓名","电话", "权限", "上次登录", "状态", "操作"],
      // tableData: [
      //   {
      //     date: "2016-05-02",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1518 弄",
      //   },
      // ],
    };
  },
  computed: {
    tableData() {
      const res = [];
      for (let i = 0; i < 8; i++) {
        const item = {};
        item.username = "xiaohu";
        item.realname = "王小虎"
        item.role = "管理员";
        item.phone = "123456";
        item.lastLogin = "2016-05-02";
        item.active = "启用";
        res.push(item);
      }
      return res;
    },
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
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
      margin-bottom: 20px;
      .el-table {
        height: 600px;
        border: 1px solid $border;
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
