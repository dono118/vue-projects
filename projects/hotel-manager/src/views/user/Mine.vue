<template>
  <div class="mine">
    <input ref="inputRef" type="text" />
    <Person ref="person" />
    <button @click="showLog">ShowLog</button>
  </div>
</template>

<script setup lang="ts">
import Person from '@/components/mine/Person.vue'
import { ref, onMounted } from 'vue'

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

const showLog = () => {
  console.log(person.value) // Proxy(Object) {a: RefImpl, __v_skip: true}
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
