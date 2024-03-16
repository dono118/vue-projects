<template>
  <div class="role">
    <div class="search">
      <el-button size="small" type="primary" @click="handleAdd()"
        >添加</el-button
      >
    </div>
    <!-- 表格 -->
    <el-table size="small" :data="roles" style="width: 98%">
      <el-table-column prop="roleId" label="编号" width="100" />
      <el-table-column prop="roleName" label="角色名" width="250" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.row.roleId)"
            >编辑</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.row.roleId)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 抽屉 -->
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
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
// 导入element-plus类型
import type { FormInstance, FormRules } from 'element-plus'
import { $list } from '../../api/role.ts'

let roles = ref([])
// 加载角色列表
const loadRoles = async () => {
  let param = {
    page: 1,
    pageSize: 10
  }
  roles.value = await $list(param)
}

// 添加
const handleAdd = () => {
  drawer.value = true
}

// 编辑
const handleEdit = (roleId: number) => {
  console.log('edit==>', roleId)
}

// 删除
const handleDelete = (roleId: number) => {
  console.log('delete==>', roleId)
}

onMounted(() => {
  loadRoles()
})

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
</script>

<style lang="scss" scoped></style>
