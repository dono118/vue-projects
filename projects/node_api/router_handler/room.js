// 导入数据库模块
const db = require('../db/index.js')

// 查询房型信息列表
exports.findRoomTypeList = (req,res)=>{
    // 获取客户端传递的分页参数，默认为第一页，每页5条数据
    const page = req.query.page || 1
    const pageSize = req.query.pageSize || 5
    // 计算 OFFSET 值
    const offset = (page - 1) * pageSize
    // 构建 SQL 查询语句，带有 LIMIT 和 OFFSET 子句
    const sqlStr = `select * from ev_roomType limit ${pageSize} offset ${offset}`
    db.query(sqlStr,(err,results)=>{
        if(err) return res.cc(500,'数据库查询错误')
        // 查询总行数的SQL语句
        const countSql = `select count(*) as total from ev_roomType`
        db.query(countSql,(err,count)=>{
            if(err) return res.cc(500,'数据库查询错误')
            // 提取总行数
            const total = count[0].total
            res.send({code:200,msg:'获取成功',data:results,page,pageSize,total })
        })
    })
}

// 新增房型信息
exports.addRoomType = (req,res)=>{
    // 获取用户提交过来的数据
    const roomInfo = req.body
    // 新增sql语句
    const sqlStr='insert into ev_roomType set ?'
    // 查询
    db.query(sqlStr,roomInfo,(err,results)=>{
        if(err) return res.cc(500,'数据库查询错误')
        return res.send({code:200,msg:'新增成功'})
    })
}

// 编辑房型信息
exports.editRoomType = (req,res)=>{
    const roomInfo = req.body
    const sqlStr='update ev_roomType set ?  where roomTypeId=?'
    db.query(sqlStr,[roomInfo,roomInfo.roomTypeId],(err,results)=>{
        if(err) return res.cc(500,'数据库查询错误')
        return res.send({code:200,msg:'编辑成功'})
    })
}

// 删除房型
exports.deleteRoomType = (req,res)=>{
    const roomTypeId = req.query.roomTypeId
    const sqlStr = 'delete from ev_roomType where roomTypeId=?'
    db.query(sqlStr,roomTypeId,(err,results)=>{
        if(err) return res.cc(500,'数据库查询错误')
        return res.send({code:200,msg:'删除成功'})
    })
}

// 获取房间信息列表
exports.getRoomList = (req,res)=>{
    // 获取客户端传递的分页参数，默认为第一页，每页5条数据
    const page = req.query.page || 1
    const pageSize = req.query.pageSize || 5
    // 状态ID
    const roomStateId=req.query.roomStateId==='0'?null:req.query.roomStateId
    // 类型ID
    const roomTypeId=req.query.roomTypeId==='0'?null:req.query.roomTypeId
    // 计算 OFFSET 值
    const offset = (page - 1) * pageSize
    // 构建sql语句
    const sqlStr=`
    select * from ev_room 
    JOIN ev_roomState ON ev_room.roomStateId=ev_roomState.roomStateId 
    JOIN ev_roomType ON ev_room.roomTypeId=ev_roomType.roomTypeId 
    where 
    (${roomStateId} IS NULL OR ev_room.roomStateId = ${roomStateId})
    AND
    (${roomTypeId} IS NULL OR ev_room.roomTypeId = ${roomTypeId})
    limit ${pageSize} offset ${offset}`
    db.query(sqlStr,(err,results)=>{
        if(err) return res.cc(500,'数据库查询错误')
        const data=results.map((item)=>{
            return {
                roomId:item.roomId,
                roomStateId:item.roomStateId,
                roomState:{
                    roomStateId:item.roomStateId,
                    roomStateName:item.roomStateName
                },
                roomType:{
                    bedNum:item.bedNum,
                    roomTypeId:item.roomTypeId,
                    roomTypeName:item.roomTypeName,
                    roomTypePrice:item.roomTypePrice,
                    typeDescription:item.typeDescription
                },
                roomTypeId:item.roomTypeId,
                description:item.description
            }
        })
        const count=`
        SELECT COUNT(*) AS total
        FROM ev_room
        JOIN ev_roomstate ON ev_room.roomStateId = ev_roomstate.roomStateId
        JOIN ev_roomType ON ev_room.roomTypeId = ev_roomType.roomTypeId
        WHERE
        (${roomStateId} IS NULL OR ev_room.roomStateId = ${roomStateId})
        AND
        (${roomTypeId} IS NULL OR ev_room.roomTypeId = ${roomTypeId})`
        db.query(count,(err,results)=>{
            if(err) return res.cc(500,'数据库查询错误')
            const total=results[0].total
            return res.send({code:200,msg:'查询成功',data,page,pageSize,total})
        })
    })
}

// 查询房间状态列表
exports.roomStateList = (req,res)=>{
    const sqlStr='select * from ev_roomstate'
    db.query(sqlStr,(err,results)=>{
        if(err) return res.cc(500,'数据库查询错误')
        return res.send({code:200,msg:'查询成功',data:results})
    })
}


// 查询房间类型列表
exports.roomTypeList = (req,res)=>{
    const sqlStr='select * from ev_roomType'
    db.query(sqlStr,(err,results)=>{
        if(err) return res.cc(500,'数据库查询错误')
        return res.send({code:200,msg:'查询成功',data:results})
    })
}

// 新增房间
exports.addRoom=(req,res)=>{
    const roomInfo=req.body
    const sqlStr='insert into ev_room set ?'
    db.query(sqlStr,roomInfo,(err,results)=>{
        if(err) return res.cc(500,'数据库查询错误')
        return res.send({code:200,msg:'新增成功'})
    })
}
// 编辑房间
exports.editRoom=(req,res)=>{
    const roomInfo=req.body
    const sqlStr='update ev_room set ? where roomId=?'
    db.query(sqlStr, [roomInfo, roomInfo.roomId], (err, results) => {
        if (err) return res.cc(500, '数据库查询错误')
        return res.send({ code: 200, msg: '编辑成功' })
    })
}

// 删除房间
exports.delRoom=(req,res)=>{  
    const roomId=req.query.roomId
    const sqlStr='delete from ev_room where roomId=?'
    db.query(sqlStr,roomId,(err,results)=>{
        if(err) return res.cc(500,'数据库查询错误')
        return res.send({code:200,msg:'删除成功'})
    })
}

// 查询酒店房型销售额信息
exports.hotelSaleInfo=(req,res)=>{
    const sqlStr='select roomTypeName,typeTotalMoney from ev_roomtype'
    db.query(sqlStr,(err,results)=>{
        if(err) return res.cc(500,'数据库查询错误')
        return res.send({code:200,msg:'查询成功',data:results})
    })
}
