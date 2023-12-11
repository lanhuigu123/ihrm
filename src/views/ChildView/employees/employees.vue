<template>
  <div>
    <el-card shadow>
      <div class="header">
        <div class="left">
          <el-button type="primary" plain style="color: #666"
            ><i class="el-icon-edit"></i>共{{ total }}条记录</el-button
          >
        </div>
        <div class="right">
          <el-button type="danger">简单表头导出</el-button>
          <el-button type="info">复杂表头导出</el-button>
          <el-button type="success">excel导出</el-button>
          <el-button type="primary">新增员工</el-button>
        </div>
      </div>
    </el-card>
    <el-table
      :data="Totaldata"
      style="width: 100%"
      :default-sort="{ prop: 'date', order: 'descending' }"
    >
      <el-table-column type="index" width="50" label="序号"> </el-table-column>
      <el-table-column prop="username" label="姓名" sortable> </el-table-column>
      <el-table-column prop="address" label="头像" :formatter="formatter">
        <!-- <template>
          <img
            :src="require('../../assets/Home-header-img.png')"
            alt="My Image"
            style="width: 100px"
        /></template> -->
      </el-table-column>
      <el-table-column prop="mobile" label="手机号" sortable> </el-table-column>
      <el-table-column prop="workNumber" label="工号" sortable>
      </el-table-column>
      <el-table-column
        prop="formOfEmployment"
        label="聘用形式"
        sortable
        width="180"
        ><template slot-scope="scope">
          {{ scope.row.formOfEmployment == 1 ? '正式' : '非正式' }}</template
        >
      </el-table-column>
      <el-table-column prop="departmentName" label="部门" sortable>
      </el-table-column>
      <el-table-column
        prop="correctionTime"
        label="入职时间"
        sortable
        width="180"
      >
      </el-table-column>
      <el-table-column prop="enableState" label="账户状态" sortable>
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.enableState"
            :active-value="1"
            inactive-value="0"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="250" fixed="right">
        <template slot-scope="scope">
          <el-button type="text" @click="view(scope.row.id)">查看</el-button>
          <el-button type="text">转正</el-button>
          <el-button type="text">调岗</el-button>
          <el-button type="text">离职</el-button>
          <el-button type="text">角色</el-button>
          <el-button type="text" disabled>按钮</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="currentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import * as API from '@/api'
export default {
  name: 'employeesView',
  data() {
    return {
      total: 0,
      Totaldata: [],
      page: 1,
      size: 10
    }
  },
  methods: {
    formatter(row) {
      return row.address
    },

    /**查看*/
    view(id) {
      this.$router.push({
        path: '/view',
        query: {
          // url的参数, 类似get请求的传参
          id: id
        }
      })
    },

    /**获取员工列表*/
    getEmployee() {
      API.getEmployeeApi({
        page: this.page,
        size: this.size
      }).then((res) => {
        console.log(res)
        if (res.success) {
          this.Totaldata = res.data.rows
          this.total = res.data.total
        }
      })
    },

    /**切换页码*/
    currentChange(val) {
      this.page = val
      this.getEmployee()
    }
  },

  computed: {},
  filters: {},
  watch: {},
  created() {
    this.getEmployee()
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-table {
  margin-top: 20px;
}
.page {
  margin-top: 20px;
  text-align: center;
}
</style>
