<template>
  <div>
    <el-button type="primary" size="small">新增角色</el-button>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="序号" align="center" width="120px">
      </el-table-column>
      <el-table-column prop="name" label="名称" align="center" width="240px">
      </el-table-column>
      <el-table-column prop="description" label="描述" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            type="success"
            size="small"
            @click="assignAuthority(scope.row.id)"
            >分配权限</el-button
          >
          <el-button type="primary" size="small" @click="editOpen(scope.row)"
            >编辑</el-button
          >
          <el-button type="danger" size="small" @click="del(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="pageBox">
      <el-pagination layout="prev, pager, next" :total="total"> </el-pagination>
    </div>
    <!-- 权限弹框 -->
    <el-dialog
      title="分配权限"
      :visible.sync="AuthDialogVisible"
      :before-close="handleClose"
    >
      <el-tree
        :data="array"
        show-checkbox
        node-key="id"
        default-expand-all
        :default-checked-keys="arr"
        :props="defaultProps"
      >
      </el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button
          @click="
            () => {
              this.AuthDialogVisible = false
            }
          "
          >取 消</el-button
        >
        <el-button type="primary" @click="AuthDialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <!-- 编辑弹框 -->
    <el-dialog
      title="编辑"
      :visible.sync="editDialogVisible"
      :before-close="handleClose"
    >
      <el-form
        label-position="right"
        label-width="120px"
        :model="editForm"
        :rules="rules"
      >
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input v-model="editForm.description"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button
          @click="
            () => {
              this.editDialogVisible = false
            }
          "
          >取 消</el-button
        >
        <el-button type="primary" @click="this.editDialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import * as API from '../../api/index'

export default {
  name: 'roleView',
  components: {},
  data() {
    return {
      tableData: [],
      total: 0,
      AuthDialogVisible: false,
      editDialogVisible: false,
      editForm: {},
      rules: {
        name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }]
      },
      array: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      arr: []
    }
  },
  created() {
    this.getRole()
  },
  mounted() {},
  methods: {
    getRole() {
      API.getRoleApi().then((res) => {
        console.log(res)
        if (res.success) {
          this.tableData = res.data.rows
          console.log(this.tableData)
          this.total = res.data.total
        }
      })
    },

    /**删除角色*/
    del(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          API.delRoleApi({
            id: row.id
          }).then((res) => {
            // console.log(res)
            if (res.success) {
              this.$msg({
                type: 'success',
                message: '删除成功!'
              })
            } else {
              this.$msg({
                type: 'warning',
                message: res.message
              })
            }
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },

    /**编辑角色*/
    edit() {
      API.editRoleApi({
        ...this.editForm,
        permIds: []
      }).then((res) => {
        console.log(res)
        this.editDialogVisible = false
        if (res.success) {
          this.$msg.success(res.message)
        } else {
          this.$msg({
            type: 'warning',
            message: res.message
          })
        }
        this.getRole()
      })
    },

    /**打开编辑弹框*/
    editOpen(row) {
      this.editDialogVisible = true
      API.getRoleInfoApi({
        id: row.id
      }).then((res) => {
        console.log(res)
        if (res.success) {
          this.editForm = {
            ...res.data
          }
        }
      })
    },

    /**分配权限*/
    assignAuthority(id) {
      console.log(id)
      this.AuthDialogVisible = true
      this.getAuth(id)
    },

    /**关闭弹框*/
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(() => {
          done()
        })
        .catch(() => {})
    },

    /**获取权限*/
    getAuth(id) {
      API.getPermissionApi().then((res) => {
        console.log(res)
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
        this.array = [...result]
        this.getPermissionInfoApi(id)
        console.log(this.array)
      })
    },

    /**根据id获取*/
    getPermissionInfoApi(id) {
      console.log(id)
      API.getPermissionInfoApi({
        id: id
      }).then((res) => {
        console.log(res)
        this.arr = res.data.permIds
      })
    }
  }
}
</script>
<style scoped lang="scss">
.pageBox {
  margin-top: 20px;
  text-align: center;
}
::v-deep .el-dialog__close {
  .el-button--primary {
    margin-right: 30%;
  }
}

::v-deep .dialog-footer {
  padding-right: 30%;
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
.el-table {
  margin-top: 20px;
}
</style>
