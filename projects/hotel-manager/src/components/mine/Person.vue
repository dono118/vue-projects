<template>
  <div class="person">
    <p>姓名：{{ person.name }}</p>
    <p>年龄：{{ person.age }}</p>
  </div>
</template>

<script setup lang="ts">
import { type IPerson, type TPersons } from '@/types'
import { ref, reactive } from 'vue'

let person: IPerson = reactive({ id: '310001', name: '张三', age: 20 })
let personList: TPersons = reactive([
  { id: '310001', name: '张三', age: 20 },
  { id: '310002', name: '李四', age: 23 },
  { id: '310003', name: '王五', age: 25 }
])

let a = ref(0)

// 用于显式地暴露组件的属性、方法或其他响应式状态给其父组件或外部使用
defineExpose({ a, personList })
</script>

<style lang="scss" scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
