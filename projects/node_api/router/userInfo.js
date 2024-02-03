const express=require('express')
const router=express.Router()
const multer=require('multer')
const path=require('path')


// 导入用户信息的处理函数模块
const userInfo=require('../router_handler/userInfo')
//图片上传
// 配置 multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // 上传的文件保存到 uploads 目录
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, 'image' + Date.now() + ext); // 保存为 image 时间戳 文件名
    },
})
const upload = multer({ storage: storage })

// 处理图片上传的路由
router.post('/upload', upload.single('image'),(req,res)=>{
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }
      const imageUrl = '/static/' + req.file.filename; // 返回上传成功后的图片 URL
      res.send({code:200,msg:'上传成功',imageUrl});
})

// 获取用户的基本信息
router.get('/userInfo',userInfo.getUserInfo)

// 根据用户名获取当前用户信息
router.get('/getUserInfo',userInfo.getUserName)

// 查询用户列表
router.get('/userList',userInfo.getUserList)

//删除用户信息
router.get('/deleteUser',userInfo.deleteUser)

//新增用户信息
router.post('/addUser',userInfo.addUser)

//更新用户信息
router.post('/editUser',userInfo.editUser)

// 查询角色列表
router.get('/roleList',userInfo.getRoleList)

// 新增角色列表
router.post('/addRole',userInfo.addRole)

//更新角色信息
router.post('/updateRole',userInfo.updateRole)

//删除角色信息
router.get('/deleteRole',userInfo.deleteRole)

module.exports=router