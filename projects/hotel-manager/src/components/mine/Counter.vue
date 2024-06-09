<template>
  {{ count }}
  <button @click="increment">add</button>
  <div class="scroll-box">{{ scrollTop }}</div>
</template>

<script setup lang="ts">
import useCounter from '@/hooks/useCounter.ts'
import useScroll from '@/hooks/useScroll.ts'

const { count, increment } = useCounter()

const { scrollTop } = useScroll()
console.log(scrollTop)
</script>

<style lang="scss" scoped>
.scroll-box {
  height: 500px;
  scroll-margin-top: 10px;
}
</style>
