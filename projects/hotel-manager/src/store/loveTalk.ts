import { defineStore } from 'pinia'

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
  }
})

// 对外暴露方法
export default useTalkStore
