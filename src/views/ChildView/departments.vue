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
            <el-dropdown @command="handleCommand">
              <span>
                操作<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="添加">添加子部门</el-dropdown-item>
                <el-dropdown-item command="编辑" v-show="data.pid != '-1'"
                  >编辑部门</el-dropdown-item
                >
                <el-dropdown-item command="删除" v-show="data.pid != '-1'"
                  >删除部门</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </span>
        </span>
      </span>
    </el-tree>
  </div>
</template>

<script>
import { departList } from '../../api'
export default {
  name: 'departementsView',
  data() {
    return {
      array: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  created() {
    departList().then((res) => {
      console.log(res.data.depts)
      const result = res.data.depts
      this.array = result.splice(0, 1)
      this.array[0].children = this.tranListToTreeData(result, '')
      this.array[0].manager = '负责人'
      console.log(this.array)
    })
  },
  methods: {
    /**处理接口返回数据*/
    tranListToTreeData(list, id) {
      var arr = []
      list.forEach((item) => {
        if (item.pid === id) {
          const children = this.tranListToTreeData(list, item.id)
          if (!item.children) {
            item.children = children
          }
          arr.push(item)
        }
      })
      return arr
    },
    handleCommand() {
      // if (command == '添加') {
      // } else if (command == '编辑') {
      // } else {
      // }
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
