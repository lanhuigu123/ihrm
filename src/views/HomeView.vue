<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <div style="text-align: center">
          <img src="../../public/logo.png" alt="" />
        </div>
        <el-menu
          router
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#4f80fc"
          text-color="#fff"
          active-text-color="#fff"
        >
          <el-menu-item index="2">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header> </el-header>
        <el-main>
          <div></div>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.el-aside {
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
  background-image: url('../../public/背景.png');
  background-color: 100vw 100vh;
  background-repeat: no-repeat;
}
.el-header {
  height: 50px;
  background-color: #4879fb;
}
.el-main {
  padding: 0;
  div {
    width: 100%;
    height: 35px;
    background-color: #fff;
    box-shadow: 2px 2px 10px #ccc;
  }
  background-color: #fefefe;
}
</style>
