<template>
  <div class="content">
    <el-tree
      :data="array"
      :props="defaultProps"
      :default-expand-all="true"
      :expand-on-click-node="true"
    >
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <span>{{ data.manager }}</span>
          &emsp;
          <span>
            <el-dropdown>
              <span>
                操作<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <div @click="addOpen(data.id)">添加子部门</div>
                </el-dropdown-item>
                <el-dropdown-item v-show="data.pid != '-1'"
                  ><div @click="editOpen(data.id)">
                    编辑部门
                  </div></el-dropdown-item
                >
                <el-dropdown-item v-show="data.pid != '-1'"
                  ><div @click="del(data)">删除部门</div></el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </span>
        </span>
      </span>
    </el-tree>
    <!-- 弹出框 -->
    <dialogView
      ref="dialog"
      :role="roleList"
      @reset="reset"
      @handleAdd="handleAdd"
      @handleEdit="handleEdit"
    />
  </div>
</template>

<script>
import * as API from '@/api'
import dialogView from '@/components/dialog/dialog.vue'
export default {
  name: 'departementsView',
  components: {
    dialogView
  },
  data() {
    return {
      array: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      roleList: [],
      id: ''
    }
  },
  created() {
    this.getDepartList()
  },
  methods: {
    /**添加打开弹框*/
    addOpen(id) {
      this.getUser()
      let dialog = this.$refs.dialog
      dialog.title = '新增部门'
      dialog.form = {}
      dialog.dialogFormVisible = true
      this.id = id
    },

    /**编辑打开弹框*/
    editOpen(id) {
      this.$refs.dialog.title = '编辑部门'
      this.$refs.dialog.dialogFormVisible = true

      API.detailDepartApi({
        id: id
      }).then((res) => {
        console.log(res.data)
        this.$refs.dialog.form = res.data
      })
    },

    /**删除方法*/
    del(data) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          API.delDepartApi({
            id: data.id
          }).then((res) => {
            console.log(res)
            if (res.success) {
              this.$msg.success(res.message)
            }
            this.getDepartList()
          })
        })
        .catch(() => {
          this.$msg({
            type: 'info',
            message: '已取消删除'
          })
        })
    },

    /**获取树状结构数据*/
    getDepartList() {
      API.departList().then((res) => {
        console.log(res.data.depts)
        const result = res.data.depts
        this.array = result.splice(0, 1)
        this.array[0].children = this.tranListToTreeData(result, '')
        this.array[0].manager = '负责人'
        console.log(this.array)
      })
    },

    /**处理接口返回数据*/
    tranListToTreeData(list, id) {
      var arr = []
      list.forEach((item) => {
        if (item.pid === id) {
          const children = this.tranListToTreeData(list, item.id)
          console.log(children)
          if (!item.children) {
            item.children = children
          }
          arr.push(item)
        }
      })
      return arr
    },

    /**获取角色列表*/
    getUser() {
      API.getUserApi().then((res) => {
        console.log(res)
        if (res.success) {
          this.roleList = res.data
          console.log(this.roleList)
        }
      })
    },

    /**取消方法*/
    reset() {
      this.$refs.dialog.dialogFormVisible = false
    },

    /**添加方法*/
    handleAdd(form) {
      // console.log(form)
      API.addDepartApi({
        ...form,
        pid: this.id
      }).then((res) => {
        console.log(res)
        if (res.success) {
          this.$msg.success(res.message)
        }
        this.getDepartList()
      })
      this.$refs.dialog.dialogFormVisible = false
    },

    /**编辑方法*/
    handleEdit(form) {
      API.editDepartApi({
        ...form
      }).then((res) => {
        console.log(res)
        if (res.success) {
          this.$notify({
            type: 'success',
            message: res.message,
            title: '提示'
          })
          this.$refs.dialog.dialogFormVisible = false
          this.getDepartList()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.content {
  box-shadow: 2px 2px 10px #ccc;
  width: 100%;
  height: calc(100vh - 50px - 35px - 50px);
  background-color: #fff;
  padding: 20px 100px;
}
</style>
