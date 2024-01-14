<template>
  <div class="login">
    <div class="box">
      <h2>酒店系统管理平台</h2>
      <el-form
        ref="formRef"
        :model="loginForm"
        size="small"
        status-icon
        :rules="rules"
        label-width="40px"
      >
        <el-form-item label="账号" prop="loginId">
          <el-input v-model="loginForm.loginId" />
        </el-form-item>
        <el-form-item label="密码" prop="loginPwd">
          <el-input
            v-model="loginForm.loginPwd"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)"
            >登录</el-button
          >
          <el-button @click="resetForm(formRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
// 导入组合式api
import { reactive, ref } from 'vue'
// 导入路由器
import { useRouter } from 'vue-router'
// 导入element-plus类型
import type { FormInstance, FormRules } from 'element-plus'
// 导入请求api
import { $login } from '../api/admin'

// 创建路由器对象
const router = useRouter()

// 定义一个ref对象绑定表单
const formRef = ref<FormInstance>()

// 表单数据
const loginForm = reactive({
  loginId: '',
  loginPwd: ''
})

// 验证账号
const checkLoginId = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('请输入账号'))
  } else {
    callback()
  }
}

// 验证密码
const checkLoginPwd = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    callback()
  }
}

// 验证对象
const rules = reactive<FormRules<typeof loginForm>>({
  loginId: [{ validator: checkLoginId, trigger: 'blur' }],
  loginPwd: [{ validator: checkLoginPwd, trigger: 'blur' }]
})

// 提交表单
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async valid => {
    if (valid) {
      // console.log('submit!')
      let params = {
        username: loginForm.loginId,
        password: loginForm.loginPwd
      }
      let res = await $login(params)
      if (res) {
        router.push('/index')
      }
    } else {
      console.log('error submit!')
      return false
    }
  })
}

// 重置表单
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #142334, #6894c7);
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    width: 400px;
    border: 1px solid #fff;
    padding: 20px;
    h2 {
      color: #fff;
      font-size: 20px;
      text-align: center;
      margin-bottom: 20px;
      font-family: FangSong;
    }
    :deep(.el-form-item__label) {
      color: #fff;
    }
  }
}
</style>
