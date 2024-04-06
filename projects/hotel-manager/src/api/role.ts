import { $get, $post } from '../utils/request'
import { ElMessage } from 'element-plus'

// 获取角色列表
export const $list = async (params: object) => {
  let res = await $get('my/roleList', params)
  const { code, msg, data } = res
  if (code === 200) {
    return data
  } else {
    ElMessage.error(msg)
    return []
  }
}

// 添加角色
export const $add = async (params: object) => {
  let res = await $post('my/addRole', params)
  const { code, msg } = res
  if (code === 200) {
    ElMessage.success(msg)
    return true
  } else {
    ElMessage.error(msg)
    return false
  }
}
