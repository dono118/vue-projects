import { $post } from '../utils/request'

// 登录方法
export const $login = async (params: object) => {
  let res = await $post('api/login', params)
  console.log(res)
}
