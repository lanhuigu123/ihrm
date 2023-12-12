<template>
  <div>
    <el-container>
      <el-aside
        ref="aside"
        :width="isCollapse ? '64px' : '219px'"
        :class="{ animate: isCollapse, reverAnimate: !isCollapse }"
      >
        <!-- menu组件 -->
        <Menu :isCollapse="isCollapse" />
      </el-aside>
      <el-container>
        <div class="right">
          <el-header>
            <Header
              :isCollapse="isCollapse"
              @handleChange="isCollapse = !isCollapse"
            />
          </el-header>
          <el-main>
            <div class="bread"></div>
            <div class="view">
              <router-view />
            </div>
          </el-main>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from '../components/menu/index.vue'
import Header from '../components/header/header.vue'
export default {
  name: 'homeView',
  components: {
    Menu,
    Header
  },
  data() {
    return {
      isCollapse: false
    }
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>
<style scoped lang="scss">
.right {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
}
.el-aside {
  height: 100vh;
  background: url('@/assets/leftnavBg.png') no-repeat 0 100%,
    -webkit-linear-gradient(bottom, #409eff, #4879fb);
  background-repeat: no-repeat;
  overflow: hidden;
}
.el-header {
  width: 100%;
  padding: 0 10px;
  height: 60px;
  background-color: #4879fb;
}
.el-main {
  padding: 0;
  .bread {
    width: 100%;
    height: 35px;
    background-color: #fff;
    box-shadow: 2px 2px 10px #ccc;
  }
  .view {
    width: 100%;
    padding: 20px;
  }
  background-color: #fefefe;
}

@keyframes fade {
  0% {
    width: 210px;
    height: 100vh;
  }
  100% {
    width: 64px;
    height: 100vh;
  }
}

@keyframes reverFade {
  0% {
    width: 64px;
    height: 100vh;
  }
  100% {
    width: 210px;
    height: 100vh;
  }
}

.animate {
  animation: fade linear 0.2s;
}
.reverAnimate {
  animation: reverFade linear 0.2s;
}
</style>
