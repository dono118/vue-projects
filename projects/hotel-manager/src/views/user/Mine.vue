<template>
  <div>
    <input ref="inputRef" type="text" />
    <button @click="focusInput">Focus Input</button>
  </div>
</template>

<script setup lang="ts">
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
