import { ref, onMounted, onUnmounted } from 'vue'

export default function useScroll() {
  const scrollTop = ref(0)
  const handleScroll = (e: any) => {
    scrollTop.value = e.target.documentElement.scrollTop
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    scrollTop
  }
}
