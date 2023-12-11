<template>
  <div>
    <el-card shadow="always">
      <el-tabs v-model="activeName">
        <el-tab-pane label="角色管理" name="first">
          <Role />
        </el-tab-pane>
        <el-tab-pane label="公司信息" name="second">
          <CorporationInfo />
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import Role from '@/components/Role/role.vue'
import CorporationInfo from '@/components/corporationInfo/corporationInfo.vue'
export default {
  name: 'settingView',
  components: {
    Role,
    CorporationInfo
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
