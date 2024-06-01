<template>
  {{ count }}
  <button @click="increment">add</button>
</template>

<script setup lang="ts">
import useCounter from '@/hooks/useCounter.ts'
const { count, increment } = useCounter()
</script>
