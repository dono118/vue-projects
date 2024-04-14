<template>
  <div class="mine">
    <p>姓名：{{ name }}</p>
    <el-button @click="changeName">修改姓名</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 数据
let name = ref('张三')

// 方法
const changeName = () => {
  let nameArr = ['李四', 'Ann', 'Leo', 'Tiffani', 'Eric', 'Lisa']
  let i = Math.floor(Math.random() * 6)
  name.value = nameArr[i]
}
</script>

<style lang="scss" scoped>
.mine {
  background-color: #f6f6f6;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
