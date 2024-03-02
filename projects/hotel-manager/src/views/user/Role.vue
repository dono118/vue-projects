<template>
  <div class="role">
    <el-table :data="roles" style="width: 100%">
      <el-table-column prop="roleId" label="编号" width="100" />
      <el-table-column prop="roleName" label="角色名" width="250" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.row.id)"
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
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {$list} from '../../api/role.ts'

let roles = ref([])
// 加载角色列表
const loadRoles = async() => {
  let param = {
    page:1,
    pageSize:10,
  }
 roles.value = await $list(param)
}

// 编辑
const handleEdit = (roleId:number) => {
  console.log(roleId)
}

// 删除
const handleDelete = (roleId:number) => {
  console.log(roleId)
}

onMounted(() => {
  loadRoles()
}),
</script>

<style lang="scss" scoped></style>
