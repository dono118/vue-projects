<template>
  <div class="person">
    <p>姓名：{{ person.name }}</p>
    <p>年龄：{{ person.age }}</p>
    <ul>
      <li v-for="p in list" :key="p.id">{{ p.name }} -- {{ p.age }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { type IPerson, type TPersons } from '@/types'
import { ref, reactive, withDefaults } from 'vue'

let person: IPerson = reactive({ id: '310001', name: '张三', age: 20 })

// 只接收list
// defineProps(['list'])

// 接收list + 限制类型
// defineProps<{ list: TPersons }>()

// 接收list + 限制类型 + 限制必要性 + 指定默认值
withDefaults(defineProps<{ list?: TPersons }>(), {
  list: () => [{ id: 'p0001', name: 'John Doe', age: 18 }]
})

let a = ref(0)

// 用于显式地暴露组件的属性、方法或其他响应式状态给其父组件或外部使用
defineExpose({ a })
</script>

<style lang="scss" scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
