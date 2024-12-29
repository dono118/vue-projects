<template>
  <el-form :model="form" ref="formRef" label-width="120px">
    <el-form-item
      v-for="(field, index) in formFields"
      :key="index"
      :label="field.label"
      :prop="field.prop"
    >
      <component
        :is="getComponent(field.type)"
        v-model="form[field.prop]"
        v-bind="field.attrs"
      ></component>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Submit</el-button>
      <el-button @click="onReset">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref } from 'vue'
import { ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElButton } from 'element-plus'

const formRef = ref(null)
const form = ref({
  name: '',
  age: '',
  email: '',
})

const formFields = ref([
  { label: 'Name', prop: 'name', type: 'el-input', attrs: { placeholder: 'Enter your name' } },
  {
    label: 'Age',
    prop: 'age',
    type: 'el-input',
    attrs: { placeholder: 'Enter your age', type: 'number' },
  },
  {
    label: 'Email',
    prop: 'email',
    type: 'el-input',
    attrs: { placeholder: 'Enter your email', type: 'email' },
  },
])

const getComponent = (type) => {
  const components = {
    'el-input': ElInput,
    'el-select': ElSelect,
    // Add other components as needed
  }
  return components[type] || ElInput
}

const onSubmit = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      console.log('submit!', form.value)
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const onReset = () => {
  formRef.value.resetFields()
}
</script>
