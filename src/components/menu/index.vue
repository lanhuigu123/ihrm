<template>
  <div>
    <div
      class="img_logo"
      style="text-align: center"
      :class="{ logo: isCollapse }"
    >
      <img src="/logo.png" alt="" />
    </div>
    <el-menu
      router
      :collapse-transition="false"
      :collapse="isCollapse"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#fff"
    >
      <el-menu-item index="dashboard">
        <svg-icon icon-class="home"></svg-icon>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="employees">
        <svg-icon icon-class="people"></svg-icon>
        <span slot="title">员工</span>
      </el-menu-item>
      <el-menu-item index="setting">
        <svg-icon icon-class="settings"></svg-icon>
        <span slot="title">公司设置</span>
      </el-menu-item>
      <el-menu-item index="permission">
        <svg-icon icon-class="post"></svg-icon>
        <span slot="title">权限管理</span>
      </el-menu-item>
      <el-menu-item index="social_securitys">
        <svg-icon icon-class="text"></svg-icon>
        <span slot="title">社保</span>
      </el-menu-item>
      <el-menu-item index="approvals">
        <svg-icon icon-class="edit"></svg-icon>
        <span slot="title">审批</span>
      </el-menu-item>
      <el-menu-item index="attendances">
        <svg-icon icon-class="copy"></svg-icon>
        <span slot="title">考勤</span>
      </el-menu-item>
      <el-menu-item index="salarys">
        <svg-icon icon-class="pay"></svg-icon>
        <span slot="title">工资</span>
      </el-menu-item>
      <el-menu-item index="departments">
        <svg-icon icon-class="sortlight"></svg-icon>
        <span slot="title">组织架构</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ['isCollapse'],
  name: 'menuView',
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
.img_logo {
  margin: auto;
  width: 100%;
  height: 60px;
  padding: 0 15%;
  img {
    width: 100%;
    height: 100%;
  }
}
.el-menu {
  border-right: 0;
  width: 100%;
  .el-menu-item {
    vertical-align: middle;
    font-size: 16px;
    span {
      margin-left: 10px !important;
    }
  }
  .el-menu-item:hover {
    color: #4879fb !important;
  }
}
.logo {
  padding: 10px 15%;
}
</style>
