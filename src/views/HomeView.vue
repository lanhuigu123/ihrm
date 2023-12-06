<template>
  <div>
    <el-container>
      <el-aside ref="aside" :width="isCollapse ? '64px' : '219px'">
        <div style="text-align: center">
          <img src="../../public/logo.png" alt="" />
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
            <i style="color: #fff" class="el-icon-setting"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="employees">
            <i style="color: #fff" class="el-icon-setting"></i>
            <span slot="title">员工</span>
          </el-menu-item>
          <el-menu-item index="setting">
            <i style="color: #fff" class="el-icon-setting"></i>
            <span slot="title">公司设置</span>
          </el-menu-item>
          <el-menu-item index="permission">
            <i style="color: #fff" class="el-icon-setting"></i>
            <span slot="title">权限管理</span>
          </el-menu-item>
          <el-menu-item index="social_securitys">
            <i style="color: #fff" class="el-icon-setting"></i>
            <span slot="title">社保</span>
          </el-menu-item>
          <el-menu-item index="approvals">
            <i style="color: #fff" class="el-icon-setting"></i>
            <span slot="title">审批</span>
          </el-menu-item>
          <el-menu-item index="attendances">
            <i style="color: #fff" class="el-icon-setting"></i>
            <span slot="title">考勤</span>
          </el-menu-item>
          <el-menu-item index="salarys">
            <i style="color: #fff" class="el-icon-setting"></i>
            <span slot="title">工资</span>
          </el-menu-item>
          <el-menu-item index="departments">
            <i style="color: #fff" class="el-icon-setting"></i>
            <span slot="title">组织架构</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <div class="right">
          <el-header>
            <div class="body">
              <div class="div1">
                <span @click="flag == true ? true : false">
                  <i
                    class="el-icon-s-unfold"
                    style="font-size: 22px; color: #fff"
                  ></i>
                </span>
                <span style="font-size: 18px; color: #fff"
                  >江苏传智播客教育科技股份有限公司</span
                >
                <span>
                  <button
                    style="
                      outline: none;
                      color: #fff;
                      border-radius: 3px;
                      padding: 3px 6px;
                      border: 0;
                      background-color: #84a9fe;
                    "
                  >
                    体验版
                  </button>
                </span>
              </div>
              <div class="div2">
                <span
                  style="
                    border-radius: 50%;
                    overflow: hidden;
                    width: 30px;
                    height: 30px;
                  "
                >
                  <img
                    style="width: 100%; height: 100%"
                    src="../assets/img111.jpg"
                    alt=""
                  />
                </span>
                <span>
                  <el-dropdown>
                    <span class="el-dropdown-link">
                      管理员<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>管理员</el-dropdown-item>
                      <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </span>
              </div>
            </div>
          </el-header>
          <el-main v-loading="true">
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
export default {
  components: {},
  data() {
    return {
      isCollapse: false
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.right {
  width: calc(100vw - 210px);
  height: 100vh;
  overflow-y: scroll;
}
.el-aside {
  height: 100vh;
  background: url('../assets/leftnavBg.png') no-repeat 0 100%,
    -webkit-linear-gradient(bottom, #409eff, #4879fb);
  background-color: 100vw 100vh;
  background-repeat: no-repeat;
  overflow: hidden;

  div {
    margin: auto;
    width: 70%;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .el-menu {
    width: 101%;
    .el-menu-item {
      vertical-align: middle;
      font-size: 16px;
      i {
        display: inline-block !important;
        margin-right: 10px !important;
      }
    }
    .el-menu-item:hover {
      color: #4879fb !important;
      i {
        color: #4879fb !important;
      }
    }
  }
}
.el-header {
  height: 50px;
  background-color: #4879fb;
  span {
    margin: 0 6px;
  }
  .body {
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .div1 {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .div1,
  .div2 {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 6px;
  }

  .div2 {
    position: absolute;
    right: 10px;
    display: flex;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
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
    background-image: url('../../public/背景.png');
  }
  100% {
    width: 64px;
    height: 100vh;
    background-image: url('../../public/背景.png');
  }
}

.animate {
  animation: fade 0.5s linear;
}
.reverAnimate {
  animation: fade 0.5s linear;
  animation-direction: reverse;
}
</style>
