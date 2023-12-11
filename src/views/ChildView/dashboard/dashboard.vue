<template>
  <div>
    <el-card shadow>
      <div class="card">
        <div>
          <el-image
            style="width: 100px; height: 100px"
            src="/head.jpg"
            fit="fill"
          ></el-image>
        </div>
        <div class="right" style="margin-left: 10px">
          <p>早安，管理员，祝你开心每一天！</p>
          <div>管理员 | 传智播客 - 总裁办</div>
        </div>
      </div>
    </el-card>
    <el-row :gutter="20">
      <el-col :span="13">
        <el-card shadow>
          <el-calendar v-model="dateValue"> </el-calendar>
        </el-card>
      </el-col>
      <el-col :span="11">
        <el-card shadow>
          <div class="flow">
            <span class="title">流程申请</span>
            <div class="btn">
              <el-button>加班离职</el-button>
              <el-button>请假调休</el-button>
              <el-button>审批列表</el-button>
              <el-button>我的信息</el-button>
            </div>
          </div>
        </el-card>
        <el-card shadow style="margin-top: 10px">
          <div id="echarts">123</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as API from '@/api'
import * as echarts from 'echarts'
export default {
  name: 'dashboardView',
  components: {},
  data() {
    return {
      data: {
        dateValue: new Date()
      }
    }
  },
  created() {
    // this.getUser()
    this.initChart()
  },
  mounted() {},
  methods: {
    getUser() {
      API.getUserInfoApi().then((res) => {
        console.log(res)
        this.getUserInfo(res.data.userId)
      })
    },
    getUserInfo(id) {
      API.getEmployeeInfoApi({
        id: id
      }).then((res) => {
        console.log(res)
        this.data = res.data
      })
    },
    initChart() {
      var chartDom = document.getElementById('echarts')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        title: {
          text: 'Basic Radar Chart'
        },
        legend: {
          data: ['Allocated Budget', 'Actual Spending']
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: 'Sales', max: 6500 },
            { name: 'Administration', max: 16000 },
            { name: 'Information Technology', max: 30000 },
            { name: 'Customer Support', max: 38000 },
            { name: 'Development', max: 52000 },
            { name: 'Marketing', max: 25000 }
          ]
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: 'Allocated Budget'
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: 'Actual Spending'
              }
            ]
          }
        ]
      }

      option && myChart.setOption(option)
    }
  }
}
</script>
<style scoped lang="scss">
.card {
  display: flex;
  justify-content: start;
  align-items: center;
  .right {
    p {
      font-size: 24px;
    }
    div {
      font-size: 22px;
      color: #7f8c8d;
      margin-top: 10px;
    }
  }
}
.el-row {
  margin-top: 20px;
}
.flow {
  padding: 10px;
  .title {
    display: inline-block;
    padding-bottom: 10px;
    border-bottom: 4px solid #8a97f8;
    font-size: 24px;
  }
  .btn {
    margin-top: 20px;
  }
}
#echart {
  width: 100%;
  height: 300px;
}
</style>
