<template>
  <div class="mine">
    <h2>车主信息</h2>
    <p>
      名：<el-input v-model="firstname" /> 姓：<el-input v-model="lastname" />
      全名：<span>{{ fullname }}</span>
    </p>
    <el-button type="primary" @click="changeFullname">修改全名</el-button>
    <h2>汽车信息：</h2>
    <p>品牌：{{ car.brand }}</p>
    <p>价格：{{ car.price }}万RMB</p>
    <el-button type="primary" @click="changePrice(1)">涨价</el-button>
    <el-button @click="changePrice(-1)">降价</el-button>
    <p>更新后品牌：{{ newBrand }}</p>
    <el-button type="warning" @click="changeBrand">更换品牌</el-button>
    <el-button type="danger" plain @click="changeCar">更换汽车</el-button>
    <h2>汽车销量排行：</h2>
    <ul>
      <li v-for="r in rankList" :key="r.id">{{ r.brand }}</li>
    </ul>
    <el-button type="primary" @click="changeRank">更新排名</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRef, toRefs, computed } from 'vue'

// 数据
let car = reactive({ brand: '特斯拉', price: 20 })

/**
 * toRef 函数可以将一个响应式对象的属性转换为一个独立的 ref 对象
 * 返回的是一个指向源对象属性的 ref 引用，任何对该引用的修改都会同步到源对象属性上
 * 使用 toRef 时需要传入源对象和属性名作为参数
 */
let newBrand = toRef(car, 'brand')

/**
 * toRefs 函数可以将一个响应式对象转换为一个普通的对象，该对象的每个属性都是独立的 ref 对象
 * 返回的对象可以进行解构，每个属性都可以像普通的 ref 对象一样访问和修改，而且会保持响应式的关联。
 * toRefs 的使用场景主要是在将响应式对象作为属性传递给子组件时，确保子组件可以正确地访问和更新这些属性
 */
let { price } = toRefs(car)

// 方法
const changePrice = (num: number) => {
  price.value += num
}
const changeBrand = () => {
  newBrand.value = '联想'
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

let firstname = ref('Elon')
let lastname = ref('Musk')
let fullname = computed({
  get() {
    return firstname.value + ' ' + lastname.value
  },
  set(newVal) {
    const [fName, lName] = newVal.split(' ')
    firstname.value = fName
    lastname.value = lName
  }
})

const changeFullname = () => {
  fullname.value = 'Steve Jobs'
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
