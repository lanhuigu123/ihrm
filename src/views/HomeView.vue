<template>
  <div>
    <el-button type="primary">按钮</el-button>
  </div>
</template>

<script>
import { setToken } from '@/utils/auth'
export default {
  components: {},
  data() {
    return {}
  },
  created() {
    this.getLogin()
  },
  mounted() {},
  methods: {
    getLogin() {
      this.$http
        .post(this.$http.addURL('/sys/login'), {
          mobile: '13800000002',
          password: 'hm#qd@23!'
        })
        .then((res) => {
          console.log(res)
          if (res.code == 10000) {
            setToken(res.data)
            this.$msg({
              type: 'success',
              message: '登陆成功'
            })
          }
        })
    }
  }
}
</script>
<style scoped lang="scss"></style>
