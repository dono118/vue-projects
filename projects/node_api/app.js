// 导入express
const express = require('express')

// 创建服务器的实例对象
const app = express()

// 导入CORS中间件
const cors = require('cors')
// 将CORS注册为全局中间件
app.use(cors())
// 设置静态文件目录
app.use('/static', express.static('uploads'));
// 配置解析表单数据的中间件 注意：这个中间件，只能解析application/x-www-form-urlencoded 格式的表单
app.use(express.urlencoded({ extended: false }))
// 配置解析JSON格式的中间件
app.use(express.json())

// 一定要在路由之前封装res.cc函数
app.use((req, res, next) => {
    res.cc = (code=400,err) => {
        res.send({
            code: code,
            msg: err instanceof Error ? err.message : err
        })
    }
    next()    
})

// 一定要在路由之前配置解析 Token的中间件
const expressJWT = require('express-jwt')
const config=require('./config.js')

// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }))

// 导入并使用用户路由模块
const userRouter=require('./router/user.js')
const userInfoRouter=require('./router/userInfo.js')
const roomRouter=require('./router/room.js')
const guestRouter=require('./router/guest.js')
const joi=require('joi')
app.use('/api',userRouter)
app.use('/my',userInfoRouter)
app.use('/room',roomRouter)
app.use('/guest',guestRouter)


// 定义错误级别的中间件
app.use((err, req, res, next) => {
    // 验证失败导致的错误
    if(err instanceof joi.ValidationError) res.cc(400, err)
    // 捕获身份认证失败的错误
    if (err.name === 'UnauthorizedError') return res.cc(401, '身份认证失败')

    res.cc(500, err)
})

// 启动服务器
app.listen(80, () => {
    console.log('服务器启动成功,http://127.0.0.1:80')       
})