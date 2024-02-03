const express=require('express')

// 创建路由对象
const router=express.Router()

// 导入房型/房间信息的处理函数模块
const roomType=require('../router_handler/room')

// 查询房型列表
router.get('/getRoomType',roomType.findRoomTypeList)

// 新增房型信息
router.post('/addRoomType',roomType.addRoomType)

// 编辑房型信息
router.post('/editRoomType',roomType.editRoomType)

// 删除房型
router.get('/delRoomType',roomType.deleteRoomType)

// 查询房间信息列表
router.get('/getRoomList',roomType.getRoomList)

// 查询房间状态列表
router.get('/getRoomStatusList',roomType.roomStateList)

// 查询房间类型列表
router.get('/getRoomTypeList',roomType.roomTypeList)

// 新增房间
router.post('/addRoom',roomType.addRoom)

// 编辑房间
router.post('/editRoom',roomType.editRoom)

// 删除房间
router.get('/delRoom',roomType.delRoom)

//  查询酒店房型销售额信息
router.get('/hotelSaleInfo',roomType.hotelSaleInfo)

// 将路由对象暴露出去
module.exports=router