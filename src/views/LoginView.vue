<template>
  <div class="content">
    <div class="formBox">
      <h3>
        <img src="../../public/login-logo.png" alt="" />
      </h3>
      <el-form :model="formLabelAlign">
        <el-form-item>
          <!-- <svg-icon icon-class="yonghu"></svg-icon> -->
          <el-input
            @input="log"
            prefix-icon="el-icon-user-solid"
            v-model="formLabelAlign.mobile"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <!-- <svg-icon icon-class="mima"></svg-icon> -->
          <el-input
            prefix-icon="el-icon-lock"
            v-model="formLabelAlign.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item style="width: 100%">
          <el-button @click="handlerLogin" style="width: 100%" type="primary"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <p>
        仅用于IT培训教学使用，为保障您的个人信息安全，请勿向平台录入任何个人敏感信息
        (如手机号、身份证号等)!
      </p>
    </div>
  </div>
</template>

<script>
import { setToken } from '@/utils/auth'
import * as API from '../api'
export default {
  components: {},
  data() {
    return {
      formLabelAlign: {
        mobile: '13800000002',
        password: 'hm#qd@23!'
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    handlerLogin() {
      API.loginApi({
        mobile: this.formLabelAlign.mobile,
        password: this.formLabelAlign.password
      }).then((res) => {
        console.log(res)
        if (res.success) {
          setToken(res.data)
          // this.$msg({
          //   type: 'success',
          //   message: res.message
          // })
          this.$notify({
            message: res.message,
            type: 'success'
          })
          this.$router.push('/')
        } else {
          this.$msg({
            type: 'error',
            message: res.message
          })
        }
      })
    },
    log() {
      console.log(this.formLabelAlign.mobile)
    }
  }
}
</script>
<style scoped lang="scss">
.content {
  width: 100vw;
  height: 100vh;
  background-image: url('../../public/背景.png');
  position: relative;
  .formBox {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 500px;
    height: 360px;
    // background-color: #fff;
    padding: 20px;
    h3 {
      text-align: center;
    }
    .el-form {
      margin-top: 30px;
    }
    p {
      margin-top: 20px;
      color: #fff;
    }
  }
}
</style>
