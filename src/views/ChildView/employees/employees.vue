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
          <el-button type="danger" @click="outExcel">简单表头导出</el-button>
          <el-button type="info" @click="outExcel">复杂表头导出</el-button>
          <el-upload
            style="display: inline-block; margin: 0 10px"
            ref="uploadRef"
            class="upload-demo"
            action=""
            accept=".csv"
            :auto-upload="false"
            :show-file-list="false"
            :on-change="handleUploadChange"
          >
            <el-button type="success">excel导出</el-button>
          </el-upload>
          <el-button type="primary" disabled>新增员工</el-button>
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
import * as XLSX from 'xlsx'
import { readFile, xlsx } from '../../../utils/xlsx.js'
export default {
  name: 'employeesView',
  data() {
    return {
      total: 0,
      Totaldata: [],
      page: 1,
      size: 10,
      listHander: {
        username: '姓名',
        mobile: '手机号',
        workNumber: '工号',
        formOfEmployment: '聘用形式',
        departmentName: '部门',
        correctionTime: '入职时间',
        enableState: '账户状态'
      }
    }
  },
  methods: {
    async handleUploadChange(file) {
      let dataBinary = await readFile(file.raw)
      let workBook = XLSX.read(dataBinary, { type: 'binary', cellDates: true })
      let workSheet = workBook.Sheets[workBook.SheetNames[0]]
      const data = XLSX.utils.sheet_to_json(workSheet)
      console.log(data) //这里已经能拿到转换后的json
    },
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
    },
    outExcel() {
      // this.jsonData是要导出的数据内容（表格里的内容），
      // this.listHander对应要导出内容的表头
      // 学生：指向的是excel文件名
      xlsx(this.Totaldata, this.listHander, '员工管理表格')
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
