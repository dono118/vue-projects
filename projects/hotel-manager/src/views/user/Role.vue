<template>
  <div class="role">
    <div class="search">
      <el-button size="small" type="primary" @click="editRef.drawer = true"
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
    <!-- 新增/编辑角色抽屉组件 -->
    <EditRole ref="editRef" @sync-list="loadRoles"></EditRole>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import EditRole from '../../components/user/EditRole.vue'
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

// 定义编辑组件ref对象
let editRef = ref(null)
</script>

<style lang="scss" scoped></style>
