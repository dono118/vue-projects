<template>
  <div class="user-info">
    <h1>{{ name }}</h1>
    <h1>{{ count }}---{{ total }}</h1>
    <button @click="updateCount">点击我修改仓库数据</button>
  </div>
</template>
<script setup lang="ts">
import useInfoStore from '@/store/info'
import { storeToRefs } from 'pinia'

//获取小仓库对象
let infoStore = useInfoStore()
console.log(infoStore)

const { name, count, total } = storeToRefs(infoStore)
//修改数据方法
const updateCount = () => {
  //仓库调用自身的方法去修改仓库的数据
  infoStore.updateNum(66)
}
</script>
<style lang="scss" scoped>
.user-info {
  margin: 10px 0;
  padding: 15px;
  background: rgba(255, 102, 0, 0.1);
  box-shadow: 0 0 10px;
  border-radius: 10px;
}
</style>
