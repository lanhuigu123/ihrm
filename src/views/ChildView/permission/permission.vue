<template>
  <div>
    <el-card shadow>
      <div class="card">
        <div></div>
        <div>
          <el-button size="small" type="primary" @click="add"
            >添加权限</el-button
          >
        </div>
      </div>
    </el-card>
    <el-table
      :data="tableData"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="name" label="名称" align="center">
      </el-table-column>
      <el-table-column prop="code" label="标识" align="center">
      </el-table-column>
      <el-table-column prop="description" label="描述" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" v-show="scope.row.pid == '0'" @click="add"
            >添加</el-button
          >
          <el-button type="text" @click="edit(scope.row.id)">编辑</el-button>
          <el-button type="text" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="formRef">
        <el-form-item label="权限名称" label-width="120px" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限标识" label-width="120px" prop="code">
          <el-input v-model="form.code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限描述" label-width="120px">
          <el-input v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="开启" label-width="120px">
          <el-switch
            v-model="form.type"
            :active-value="1"
            :inactive-value="2"
          ></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import * as API from '@/api'
export default {
  name: 'permissionView',
  components: {},
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {},
      title: '新增权限点',
      rules: {
        name: [{ required: true, message: '请输入权限名称', trigger: 'blur' }],
        code: [{ required: true, message: '请输入权限标识', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.getPermission()
  },
  mounted() {},
  methods: {
    /**获取权限列表，并处理数据*/
    getPermission() {
      API.getPermissionApi().then((res) => {
        // console.log(res)
        let result = res.data.filter((ele) => ele.pid == '0')
        // console.log(result)
        let arr = res.data.filter((ele) => ele.pid != '0')
        // console.log(arr)
        result.forEach((item) => {
          item.children = []
          arr.forEach((ele) => {
            if (item.id == ele.pid) {
              item.children.push(ele)
            }
          })
        })
        this.tableData = [...result]
        console.log(this.tableData)
      })
    },

    /**打开添加弹框*/
    add() {
      this.title = '新增权限点'
      this.dialogFormVisible = true
      this.form = {}
    },

    /**打开编辑弹框*/
    edit(id) {
      this.dialogFormVisible = true
      this.title = '编辑权限点'
      API.getUserPermissionInfoApi({
        id: id
      }).then((res) => {
        console.log(res)
        this.form = res.data
      })
    },

    /**确认添加*/
    onSubmit() {
      console.log(this.form)
      if (this.title == '新增权限点') {
        this.$refs.formRef.validate((valid) => {
          if (valid) {
            // alert('submit!')
            API.addPermissionApi({
              ...this.form,
              enVisible: 0
            }).then((res) => {
              console.log(res)
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      } else {
        API.editPermissionApi({
          ...this.form
        }).then((res) => {
          console.log(res)
          this.dialogFormVisible = false
          if (res.success) {
            this.$msg.success(res.message)
            this.getPermission()
          } else {
            this.$msg({
              type: 'warning',
              message: res.message
            })
            this.getPermission()
          }
        })
      }
    },

    /**删除*/
    del(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          API.delPermissionApi({
            id: id
          }).then((res) => {
            console.log(res)
            if (res.success) {
              this.$msg.success(res.message)
              this.getPermission()
            } else {
              this.$msg.warning(res.message)
            }
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  }
}
</script>
<style scoped lang="scss">
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-table {
  margin-top: 5px;
}
::v-deep .el-dialog__header {
  background-color: #66b1ff;
  .el-dialog__title {
    color: #fff;
  }
  .el-dialog__headerbtn {
    .el-dialog__close {
      color: #fff;
    }
  }
}
::v-deep .el-dialog__close {
  .el-button--primary {
    margin-right: 30%;
  }
}

::v-deep .dialog-footer {
  padding-right: 30%;
}
</style>
