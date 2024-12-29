<template>
  <el-config-provider :size="size" :z-index="zIndex" :locale="locales">
    <RouterView />
  </el-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'element-plus'
import { RouterView } from 'vue-router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import plusZhCn from 'plus-pro-components/es/locale/lang/zh-cn'
// import en from 'element-plus/es/locale/lang/en'
// import plusEn from 'plus-pro-components/es/locale/lang/en'

const zhCnLocales = {
  ...zhCn,
  ...plusZhCn,
}
// const enLocales = {
//   ...en,
//   ...plusEn,
// }

// const language = ref('zh-cn')
// const locale = computed(() => (language.value === 'zh-cn' ? zhCnLocales : enLocales))

// const toggleLanguage = () => {
//   language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
// }

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      zIndex: 3000,
      size: 'default',
      locales: zhCnLocales,
    }
  },
})
</script>
