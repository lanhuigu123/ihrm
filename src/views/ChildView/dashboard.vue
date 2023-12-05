<template>
  <div>
    <div class="header">
      <span>首页 &emsp; ×</span>
      &ensp;
      <span>员工 &emsp; ×</span>
    </div>
    <div class="con">
      <div
        style="
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 2px solid #ccc;
        "
      >
        <img
          style="width: 99%; height: 99%"
          src="../../assets/img111.jpg"
          alt=""
        />
      </div>
      &emsp;
      <div>
        <h2 style="font-weight: normal">早安，管理员，祝你开心每一天！</h2>
        <h3 style="color: #666; font-weight: normal">
          管理员 | 传智播客 - 总裁办
        </h3>
      </div>
    </div>
    <div class="asi">
      <div class="aside">
        <p style="font-size: 22px">工作日历</p>
        <hr style="background-color: #f2f2f2" />
        <el-calendar v-model="value"> </el-calendar>
      </div>
      <div class="asid">
        <div class="aside1">
          <p style="font-size: 22px">流程申请</p>
          <ul
            style="
              width: 100%;
              margin-top: 15px;
              display: flex;
              flex-wrap: wrap;
            "
          >
            <li>加班离职</li>
            <li>请假调休</li>
            <li>审批列表</li>
            <li>我的信息</li>
          </ul>
        </div>
        <div class="aside2">
          <p style="font-size: 22px">绩效申请</p>
          <hr style="background-color: #f2f2f2" />
        </div>
        <div class="aside3">
          <img
            style="width: 100%; height: 100%"
            src="../../assets/绩效1.png"
            alt=""
          />
        </div>
      </div>
      <div class="as">
        <h4 style="margin-top: 20px">公告</h4>
        <p>&emsp;</p>
        <hr />
        <ul style="height: 220px">
          <li
            style="
              border: 0;
              border-bottom: 1px solid #ccc;
              display: flex;
              align-items: center;
            "
          >
            <span style="border: 0">
              <img
                style="width: 50px; height: 50px"
                src="../../assets/苹果.jpeg"
                alt=""
              />
            </span>
            <span style="border: 0">
              <p style="font-size: 16px">
                <a href="#">朱继柳</a
                >发布了&ensp;第一期“传智大讲堂”互动讨论获奖名单公布
              </p>
              <p>2018-07-21 &emsp; 15：21：38</p>
            </span>
          </li>
          <li
            style="
              border: 0;
              border-bottom: 1px solid #ccc;
              display: flex;
              align-items: center;
            "
          >
            <span style="border: 0">
              <img
                style="width: 50px; height: 50px"
                src="../../assets/苹果.jpeg"
                alt=""
              />
            </span>
            <span style="border: 0">
              <p style="font-size: 16px">
                <a href="#">朱继柳</a
                >发布了&ensp;第一期“传智大讲堂”互动讨论获奖名单公布
              </p>
              <p>2018-07-21 &emsp; 15：21：38</p>
            </span>
          </li>
          <li
            style="
              border: 0;
              border-bottom: 1px solid #ccc;
              display: flex;
              align-items: center;
            "
          >
            <span style="border: 0">
              <img
                style="width: 50px; height: 50px"
                src="../../assets/苹果.jpeg"
                alt=""
              />
            </span>
            <span style="border: 0">
              <p style="font-size: 16px">
                <a href="#">朱继柳</a
                >发布了&ensp;第一期“传智大讲堂”互动讨论获奖名单公布
              </p>
              <p>2018-07-21 &emsp; 15：21：38</p>
            </span>
          </li>
        </ul>
      </div>
      <div class="ass">
        <h2>帮助链接</h2>
        <ul style="display: flex">
          <li style="margin-left: 30px; border: 0">
            <span style="border: 0"
              ><img
                style="width: 60px; height: 60px; border-radius: 50%"
                src="../../assets/苹果.jpeg"
                alt=""
            /></span>
            <p style="font-size: 16px; border: 0">入门指南</p>
          </li>
          <li style="margin-left: 30px; border: 0">
            <span style="border: 0"
              ><img
                style="width: 60px; height: 60px; border-radius: 50%"
                src="../../assets/苹果.jpeg"
                alt=""
            /></span>

            <p style="font-size: 16px; border: 0">在线帮助手册</p>
          </li>
          <li style="margin-left: 30px; border: 0">
            <span style="border: 0"
              ><img
                style="width: 60px; height: 60px; border-radius: 50%"
                src="../../assets/苹果.jpeg"
                alt=""
            /></span>

            <p style="font-size: 16px; border: 0">联系技术支持</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboardView',
  data() {
    return {
      value: new Date()
    }
  },
  methods: {},
  computed: {},
  filters: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
span {
  display: inline-block;
  padding: 5px 8px;
  border: 1px solid #ccc;
  color: #666;
  font-size: 12px;
}

span:hover {
  background-color: #409eff;
  color: #fff;
}

.con {
  display: flex;
  align-items: center;
  margin: 10px 0;
  background-color: #fff;
  box-shadow: 2px 2px 10px #ccc;
}

.header {
  background-color: #fff;
  box-shadow: 2px 2px 10px #ccc;
}

.aside {
  width: 50%;
  // width: 555px;
  margin: 10px 10px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 2px 2px 10px #ccc;
}

.as {
  // width: 550px;
  width: 50%;
  padding: 20px;

  background-color: #fff;
  box-shadow: 2px 2px 10px #ccc;
}

.el-calendar {
  width: 100%;
  background-color: #fff;
}

.ass {
  width: 540px;
  background-color: #fff;
  box-shadow: 2px 2px 10px #ccc;

  margin-left: 10px;
  text-align: center;
  margin: auto;
}

li {
  list-style: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #666;
  font-size: 18px;
  margin: 5px;
}

.aside1 {
  width: 555px;
  height: 170px;
  margin: 10px 15px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 2px 2px 10px #ccc;
}

.asi {
  display: flex;
  flex-wrap: wrap;
}

.aside3 {
  width: 550px;
  height: 390px;
  background-color: #fff;
  box-shadow: 2px 2px 10px #ccc;
  padding: 5px;
  margin-left: 10px;
}
</style>
