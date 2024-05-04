<template>
  <div class="mine">
    <h2>watch与watchEffect的区别与使用</h2>
    <div>
      <div>count：{{ count }}</div>
      <button @click="add">+1</button>
      <div>品牌：{{ obj.brand.name }}</div>
      <button @click="changeBrandName">更改品牌</button>
    </div>
    <h2>监测水温和水位</h2>
    <div>
      <p>当前水温：{{ temp }}℃</p>
      <p>当前水位：{{ height }}cm</p>
      <button @click="changeTemp">水温上升</button>
      <button @click="changeHeight">水位上升</button>
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, watchEffect } from 'vue'

const count = ref(0)
const add = () => {
  count.value++
}
watch(count, (newVal, oldVal) => {
  console.log('值改变了', newVal, oldVal)
})
const obj = reactive({
  name: 'Elon Musk',
  birthday: '1971-6-28',
  brand: {
    id: 1,
    name: '特斯拉'
  }
})
const changeBrandName = () => {
  obj.brand.name = '奔驰'
}
/**
 * watch只能监听4种类型数据：ref、reactive、getter函数、上述三种组成的数组
 * 注意：
 * ① 监听ref定义的对象类型，监听的是对象地址变化，开启深度监视之后才可以监听到内部任意属性变化
 * ② 监听reactive定义的对象类型，强制开启了深度监视（不可关掉）
 * ③ 监听ref/reactive对象中的某个基本类型数据时，必须写成箭头函数形式返回
 * ④ 监听ref/reactive对象中的某个引用类型数据时，不写箭头函数，监听的是内部所有属性变化；
 * 写成箭头函数监听的是地址，需开启深度监视才既能监听地址变化，又能监听内部所有属性变化
 */
watch(
  () => obj.brand,
  () => {
    console.log('监听的obj.brand.name改变了')
  },
  {
    deep: true
    // immediate: true
  }
)

let temp = ref(10)
let height = ref(0)

const changeTemp = () => {
  temp.value += 10
}

const changeHeight = () => {
  height.value += 10
}

// watch([temp, height], newVal => {
//   console.log(`output->newVal`, newVal)
//   let [newTemp, newHeight] = newVal
//   if (newTemp >= 60 || newHeight >= 80) {
//     console.log('给服务器发送请求...')
//   }
// })

/**
 * watchEffect 也是一个帧听器，是一个副作用函数。
 * 它会监听引用数据类型的所有属性，不需要具体到某个属性，一旦运行就会立即监听，组件卸载的时候会停止监听。
 * 说明：
 * ① 在页面初始化的时候会执行一次
 * ② watch必须指定需要监听哪个对象，而watchEffect无需指定，函数内部用到了哪个属性，等这个属性变化时，watchEffect会自动调用
 */
watchEffect(() => {
  if (temp.value >= 60 || height.value >= 80) {
    console.log('给服务器发送请求...')
  }
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
