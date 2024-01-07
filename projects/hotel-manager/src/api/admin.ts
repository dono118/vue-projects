import { $post } from '../utils/request'
import { md5 } from 'md5js'

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
  console.log(res)
}
