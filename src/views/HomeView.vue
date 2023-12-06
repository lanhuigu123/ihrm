<template>
  <div>
    <el-container>
      <el-aside
        ref="aside"
        :width="isCollapse ? '64px' : '219px'"
        :class="{ animate: isCollapse, reverAnimate: !isCollapse }"
      >
        <div :class="{ logo: isCollapse }" style="text-align: center">
          <img src="../../public/logo.png" alt="" />
        </div>
        <el-menu
          router
          :collapse-transition="true"
          :collapse="isCollapse"
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="transparent"
          text-color="#fff"
          active-text-color="#fff"
        >
          <el-menu-item index="dashboard">
            <i><svg-icon icon-class="home"></svg-icon></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="employees">
            <i><svg-icon icon-class="people"></svg-icon></i>
            <span slot="title">员工</span>
          </el-menu-item>
          <el-menu-item index="setting">
            <i><svg-icon icon-class="settings"></svg-icon></i>
            <span slot="title">公司设置</span>
          </el-menu-item>
          <el-menu-item index="permission">
            <i><svg-icon icon-class="post"></svg-icon></i>
            <span slot="title">权限管理</span>
          </el-menu-item>
          <el-menu-item index="social_securitys">
            <i><svg-icon icon-class="text"></svg-icon></i>
            <span slot="title">社保</span>
          </el-menu-item>
          <el-menu-item index="approvals">
            <i><svg-icon icon-class="edit"></svg-icon></i>
            <span slot="title">审批</span>
          </el-menu-item>
          <el-menu-item index="attendances">
            <i><svg-icon icon-class="copy"></svg-icon></i>
            <span slot="title">考勤</span>
          </el-menu-item>
          <el-menu-item index="salarys">
            <i><svg-icon icon-class="pay"></svg-icon></i>
            <span slot="title">工资</span>
          </el-menu-item>
          <el-menu-item index="departments">
            <i><svg-icon icon-class="sortlight"></svg-icon></i>
            <span slot="title">组织架构</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="body">
            <div class="div1">
              <div
                style="vertical-align: middle; padding-top: 5px"
                @click="isCollapse = !isCollapse"
              >
                <svg
                  class="hamburger"
                  :class="{ 'is-active': !isCollapse }"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#fff"
                >
                  <path
                    d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
                  />
                </svg>
              </div>
              <span style="font-size: 18px; color: #fff; padding: 0 10px"
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
                <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                    管理员<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item commadn="user">管理员</el-dropdown-item>
                    <el-dropdown-item command="logout"
                      >退出登录</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </el-dropdown>
              </span>
            </div>
          </div>
        </el-header>
        <el-main>
          <div class="bread"></div>
          <div class="view">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { removeToken } from '../utils/auth'
export default {
  components: {},
  data() {
    return {
      isCollapse: false
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleCommand(command) {
      if (command == 'logout') {
        removeToken()
        this.$router.push('/login')
        this.$notify({
          title: '提示',
          message: '退出登录成功',
          type: 'warning',
          duration: 2000
        })
      }
    }
  }
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
  background: url('../assets/leftnavBg.png') no-repeat 0 100%,
    -webkit-linear-gradient(bottom, #409eff, #4879fb);
  background-color: 100vw 100vh;
  background-repeat: no-repeat;
  overflow: hidden;

  div {
    margin: auto;
    width: 100%;
    height: 60px;
    padding: 5px 15%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .el-menu {
    border-right: 0;
    width: 101%;
    .el-menu-item {
      vertical-align: middle;
      font-size: 16px;
      svg-icon {
        margin-top: 5px;
      }
      span {
        margin-left: 10px !important;
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
  width: 100%;
  padding: 0 10px;
  height: 60px;
  background-color: #4879fb;
  .el-dropdown {
    margin-left: 20px;
    .el-dropdown-link {
      color: #fff;
    }
  }
  .body {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .div1,
  .div2 {
    display: flex;
    align-items: center;
    justify-content: space-around;
    // padding: 6px;
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
  animation: fade linear 0.5s;
}
.reverAnimate {
  animation: reverFade linear 0.5s;
}

.is-active {
  transform: rotateY(180deg);
}
</style>
