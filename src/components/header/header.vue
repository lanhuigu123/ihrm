<template>
  <div>
    <div class="body">
      <div class="div1">
        <div
          style="vertical-align: middle; padding-top: 5px"
          @click="changeStatus"
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
        <language />
        <span
          style="
            border-radius: 50%;
            overflow: hidden;
            width: 30px;
            height: 30px;
            margin-left: 10px;
          "
        >
          <img
            style="width: 100%; height: 100%"
            src="@/assets/img111.jpg"
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
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { removeToken } from '../../utils/auth'
import language from '../lang/index'
export default {
  props: ['isCollapse'],
  name: 'headerView',
  components: {
    language
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {
    changeStatus() {
      this.$emit('handleChange')
    },
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
.body {
  height: 60px;
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
.el-dropdown {
  margin-left: 20px;
  .el-dropdown-link {
    color: #fff;
  }
}
.is-active {
  transform: rotateY(180deg);
}
</style>
