<template>
  <el-drawer
    v-model="drawer"
    size="36%"
    direction="rtl"
    :before-close="() => cancelClick(formRef)"
  >
    <template #header>
      <h4>添加角色</h4>
    </template>
    <template #default>
      <el-form
        ref="formRef"
        :model="roleForm"
        size="small"
        status-icon
        :rules="rules"
        label-width="80px"
      >
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="roleForm.roleName" />
        </el-form-item>
      </el-form>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancelClick(formRef)">取消</el-button>
        <el-button type="primary" @click="confirmClick(formRef)"
          >保存</el-button
        >
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// 导入element-plus类型
import type { FormInstance, FormRules } from 'element-plus'

const drawer = ref(false)

// 定义一个ref对象绑定表单
const formRef = ref<FormInstance>()

// 表单数据
const roleForm = reactive({
  roleName: ''
})

// 验证角色名称
const checkRoleName = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('请输入角色名称'))
  } else {
    callback()
  }
}
// 验证对象
const rules = reactive<FormRules<typeof roleForm>>({
  roleName: [{ validator: checkRoleName, trigger: 'blur' }]
})

// 取消
const cancelClick = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  // 重置表单
  formEl.resetFields()
  // 关闭抽屉
  drawer.value = false
}

// 确定，提交表单
const confirmClick = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async valid => {
    if (valid) {
      let params = {
        roleName: roleForm.roleName
      }
      console.log('submit=>', params)
    } else {
      console.log('error submit!')
      return false
    }
  })
}

// 暴露成员
defineExpose({
  drawer
})
</script>

<style lang="scss" scoped></style>
