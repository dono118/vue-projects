import axios from 'axios'
import { baseURL_dev } from '../config/baseURL.ts'

// 初始化一个axios对象
const instance = axios.create({
  baseURL: baseURL_dev,
  timeout: 60000
})

// get请求方法
export const $get = async (url: string, params: object = {}) => {
  let { data } = await instance.get(url, { params })
  return data
}

// post请求方法
export const $post = async (url: string, params: object = {}) => {
  let { data } = await instance.post(url, params)
  return data
}
