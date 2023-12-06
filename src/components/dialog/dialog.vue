<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="dialogFormVisible"
      :headerStayle="{ background: '#66b1ff', color: '#fff' }"
    >
      <el-form :model="form" :rules="rules" ref="formRef">
        <el-form-item label="部门名称" label-width="120px" prop="name">
          <el-input
            v-model="form.name"
            autocomplete="off"
            placeholder="1-50个字符"
          ></el-input>
        </el-form-item>
        <el-form-item label="部门编码" label-width="120px" prop="code">
          <el-input
            v-model="form.code"
            autocomplete="off"
            placeholder="1-50个字符"
          ></el-input>
        </el-form-item>
        <el-form-item label="部门负责人" label-width="120px" prop="manager">
          <el-select v-model="form.manager" placeholder="请选择">
            <el-option
              v-for="item in role"
              :key="item.id"
              :label="item.username"
              :value="item.username"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="部门介绍" label-width="120px" prop="introduce">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 2 }"
            placeholder="1-300个字符"
            v-model="form.introduce"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm">取 消</el-button>
        <el-button type="primary" @click="submitForm()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['role'],
  name: 'DialogView',
  components: {},
  data() {
    return {
      form: {},
      dialogFormVisible: false,
      title: '',
      rules: {
        name: [{ required: true, message: '请输入部门名称', trigger: 'blur' }],
        code: [{ required: true, message: '请输入部门编码', trigger: 'blur' }],
        manager: [
          { required: true, message: '请选择部门负责人', trigger: 'blur' }
        ],
        introduce: [
          { required: true, message: '请输入部门介绍', trigger: 'blur' }
        ]
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          // alert('submit!')
          if (this.title === '新增部门') {
            this.$emit('handleAdd', this.form)
          } else {
            console.log(this.form)
            this.$emit('handleEdit', this.form)
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm() {
      this.$refs.formRef.resetFields()
      this.$emit('reset')
    }
  }
}
</script>
<style scoped lang="scss">
::v-deep .el-dialog__header {
  background-color: #66b1ff;
  .el-dialog__title {
    color: #fff;
  }
  .el-dialog__headerbtn {
    .el-dialog__close {
      color: #fff;
    }
  }
}
.el-form {
  margin-right: 100px;
}
::v-deep .el-dialog__close {
  .el-button--primary {
    margin-right: 30%;
  }
}

::v-deep .dialog-footer {
  padding-right: 30%;
}
.el-select {
  width: 100%;
}
</style>
