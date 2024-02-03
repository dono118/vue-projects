// 用户信息验证规则模块
const joi = require('joi')
// string() 值必须是字符串
// alphanuw()值只能是包含a-zA-Z0-9的字符串
// min(length)最小长度
//max(length)最大长度
// required()值是必须项，不能为undefiend
// pattern（正则表达式）值必须符合正则表达式的规则

// 用户名的验证规则
const username = joi.string().alphanum().min(5).max(12).required()
// 密码的验证规则
const password = joi
  .string()
  .pattern(/^[A-Za-z0-9]{32}$/)
  .required()
// 注册和登录表单的验证规则对象
exports.reg_login_schema = {
  // 表示需要对req.body 中的数据进行验证
  body: {
    username,
    password
  }
}
