import { $get } from '../utils/request'
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
