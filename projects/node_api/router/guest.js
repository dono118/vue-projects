const express=require('express')

// 创建路由对象
const router=express.Router()

// 导入房型/房间信息的处理函数模块
const guest=require('../router_handler/guest')

// 获取入住用户列表信息
router.get('/getGuestList',guest.getUserGuest)

// 获取结账状态信息列表
router.get('/getCheckOutList',guest.getCheckOutList)

// 新增顾客（入住用户）
router.post('/addGuest',guest.addGuest)

// 编辑顾客（入住用户）
router.post('/editGuest',guest.editGuest)

// 结账功能
router.post('/checkOut',guest.checkOut)

// 根据顾客id获取顾客已经开好的房间
router.get('/getGuestRoom',guest.getGuestRoom)

// 删除功能
router.get('/delGuest',guest.delGuest)

// 将路由对象暴露出去
module.exports=router