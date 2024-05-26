<template>
  <div class="mine">
    <input ref="inputRef" type="text" />
    <Person ref="person" :list="personList" />
    <button @click="showLog">ShowLog</button>
  </div>
</template>

<script setup lang="ts">
import Person from '@/components/mine/Person.vue'
import { ref, reactive, onMounted } from 'vue'
import { type TPersons } from '@/types'

// interface Focusable {
//   focus: () => void
// }

// const inputRef = ref(null)

// const focusInput = () => {
//   if (inputRef.value) {
//     let inputEl: Focusable = inputRef.value
//     inputEl.focus()
//   }
// }

const inputRef = ref<HTMLInputElement>()

const focusInput = () => {
  if (inputRef.value) {
    inputRef.value.focus()
  }
}

onMounted(() => {
  // 在组件挂载后立即聚焦输入框
  focusInput()
})

let person = ref()
let personList = reactive<TPersons>([
  { id: '310001', name: '张三', age: 20 },
  { id: '310002', name: '李四', age: 23 },
  { id: '310003', name: '王五', age: 25 }
])

const showLog = () => {
  console.log(person.value) // Proxy(Object) {a: RefImpl, __v_skip: true}
  console.log(personList)
}
</script>

<style lang="scss" scoped>
.mine {
  background-color: #f6f6f6;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
  button {
    margin-right: 10px;
  }
}
</style>
