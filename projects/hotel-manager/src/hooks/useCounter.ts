import { reactive, toRefs } from 'vue'

export default function useCounter() {
  const state = reactive({
    count: 0
  })
  function increment() {
    state.count++
  }
  return {
    ...toRefs(state),
    increment
  }
}
