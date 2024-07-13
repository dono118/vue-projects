import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'

// defineStore方法执行会返回一个函数,函数作用就是让组件可以获取到仓库数据
let useTalkStore = defineStore('talk', {
  // 存储数据:state，注意这里是函数和vuex不一样
  state: () => {
    return {
      talkList: [
        { id: 'ftrfasdf01', title: '今天你有点怪，哪里怪？怪好看的！' },
        { id: 'ftrfasdf02', title: '草莓、蓝莓、蔓越莓，今天想我了没？' },
        { id: 'ftrfasdf03', title: '心里给你留了一块地，我的死心塌地' }
      ]
    }
  },
  actions: {
    async getATalk() {
      // 发请求，下面这行的写法是：连续解构赋值+重命名
      let {
        data: { content: title }
      } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
      // 把请求回来的字符串，包装成一个对象
      let obj = { id: nanoid(), title }
      // 放到数组中
      this.talkList.unshift(obj)
    }
  }
})

// 对外暴露方法
export default useTalkStore
