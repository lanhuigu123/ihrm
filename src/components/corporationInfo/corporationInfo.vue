<template>
  <div>
    <div class="tip">
      <svg-icon icon-class="tishi"></svg-icon>
      <span
        >对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改</span
      >
    </div>
    <div class="form">
      <el-form
        label-position="right"
        label-width="120px"
        :model="formLabelAlign"
      >
        <el-form-item label="公司名称">
          <el-input disabled v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="公司地址">
          <el-input disabled v-model="formLabelAlign.address"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input disabled v-model="formLabelAlign.email"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input
            disabled
            type="textarea"
            v-model="formLabelAlign.remark"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'corporationInfo',
  components: {},
  data() {
    return {
      formLabelAlign: {
        name: '江苏传智播客教育科技股份有限公司',
        address: '北京市昌平区建材城西路金燕龙办公楼一层',
        email: 'bd@itcastcn',
        remark: '传智播客官网-好口碑IT培训机构,一样的教育,不一样的品质'
      }
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
.tip {
  padding: 8px 16px;
  border-radius: 5px;
  background-color: #f4f4f5;
  span {
    font-size: 14px;
    color: #999;
    margin-left: 5px;
  }
}
.el-form {
  margin-top: 40px;
  .el-input {
    width: 400px;
  }
  .el-textarea {
    width: 400px;
  }
}
</style>
