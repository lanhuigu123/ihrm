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
      <el-menu-item
        v-for="item in childRoute"
        :key="item.path"
        :index="item.path"
      >
        <svg-icon :icon-class="item.meta.icon"></svg-icon>
        <span slot="title">{{ item.meta.title }}</span>
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
    return {
      childRoute: JSON.parse(localStorage.getItem('Routes'))
    }
  },
  created() {},
  mounted() {
    console.log(this.childRoute)
  },
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
