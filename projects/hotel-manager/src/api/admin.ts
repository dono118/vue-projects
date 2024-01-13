import { $post } from '../utils/request'
import { md5 } from 'md5js'
import { ElMessage } from 'element-plus'

interface loginParam {
  username: string
  password: string
}

// 登录方法
export const $login = async (params: loginParam) => {
  // 对密码进行MD5加密
  params.password = md5(
    md5(params.password, 32).split('').reverse().join(''),
    32
  )
  let res = await $post('api/login', params)
  const { code, msg, token } = res
  if (code === 200) {
    // 登录成功后，将 token 保存到 sessionStorage 中
    sessionStorage.setItem('token', token)
    ElMessage.success(msg)
  } else {
    ElMessage.error(msg)
  }
}
