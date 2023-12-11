<template>
  <div>
    <el-card shadow="always">
      <el-tabs v-model="activeName">
        <el-tab-pane label="登录账户设置" name="first">
          <div class="form">
            <el-form
              label-position="right"
              label-width="80px"
              :model="form"
              :rules="rules"
            >
              <el-form-item label="姓名" prop="username">
                <el-input v-model="form.username"></el-input>
              </el-form-item>
              <el-form-item label="新密码" prop="password">
                <el-input type="password" v-model="form.password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="edit">更新</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="个人详情" name="second">2</el-tab-pane>
        <el-tab-pane label="岗位信息" name="third">3</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import * as API from '@/api'
export default {
  name: 'viewView',
  components: {},
  data() {
    return {
      activeName: 'first',
      form: {},
      rules: {
        username: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入新密码', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.getEmployeeInfo(this.$route.query.id)
  },
  mounted() {},
  methods: {
    getEmployeeInfo(id) {
      API.getEmployeeInfoApi({
        id: id
      }).then((res) => {
        console.log(res)
        if (res.success) {
          this.form = {
            ...res.data
          }
        }
      })
    },
    /**更新员工信息*/
    edit() {
      API.editEmployeeInfoApi({
        ...this.form
      }).then((res) => {
        console.log(res)
        if (res.success) {
          this.$msg.success(res.message)
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
.form {
  margin: 30px 0 0 120px;
  .el-input {
    width: 300px;
  }
}
</style>
