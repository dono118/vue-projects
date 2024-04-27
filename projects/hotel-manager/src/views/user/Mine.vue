<template>
  <div class="mine">
    <h2>汽车信息：</h2>
    <p>品牌：{{ car.brand }}</p>
    <p>价格：{{ car.price }}万RMB</p>
    <el-button type="primary" @click="changePrice(1)">涨价</el-button>
    <el-button @click="changePrice(-1)">降价</el-button>
    <el-button type="danger" plain @click="changeCar">更换汽车</el-button>
    <h2>汽车销量排行：</h2>
    <ul>
      <li v-for="r in rankList" :key="r.id">{{ r.brand }}</li>
    </ul>
    <el-button type="primary" @click="changeRank">更新排名</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

// 数据
let car = reactive({ brand: '特斯拉', price: 20 })
// 方法
const changePrice = (num: number) => {
  car.price += num
}
const changeCar = () => {
  // 以下两种写法页面不会更新
  // car = { brand: '比亚迪', price: 22 }
  // car = reactive({ brand: '比亚迪', price: 22 })
  // 应该这么写
  Object.assign(car, { brand: '比亚迪', price: 22 })
}

// 数据
const rankList = ref([
  {
    id: 1,
    brand: '丰田'
  },
  {
    id: 2,
    brand: '奔驰'
  },
  {
    id: 3,
    brand: '宝马'
  },
  {
    id: 4,
    brand: '奥迪'
  },
  {
    id: 5,
    brand: '特斯拉'
  }
])
// 方法
const changeRank = () => {
  rankList.value[0].brand = '小米'
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
