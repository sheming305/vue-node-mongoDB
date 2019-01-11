var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
mongoose.connect("mongodb://127.0.0.1:27017/user", function (err) {
  if (err) {
    throw err
  } else {
    console.log('数据库链接成功')
  }
});
//定义骨架
var userSchema = new mongoose.Schema({
  userName: String,
  psd: String,
  age: Number
});

//创建模型
var userModel = mongoose.model('user', userSchema, 'user');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

//接收客服端发送的注册请求
router.post('/checklogin', (req, res) => {
  // console.log(req.body.id)
  let userName = req.body.userName;
  let psd = req.body.psd;
  let age = req.body.age;
  let updatestr = {
    username: userName
  };
  let userS = new userModel()
  userS.userName = userName;
  userS.psd = psd;
  userS.age = age;
  userModel.find(updatestr, function (err, data) {
    //通过用户名验证
    if (err) {
      res.send('注册失败！')
    } else {
      if (data.length == 0) {
        userS.save(function (err, data) {
          console.log('注册成功')
          return res.send(data)
        })
      } else {
        return res.send({
          status: '1',
          message: '注册失败'
        })
      }
    }
  })
  // 将注册信息写入数据库
  // userS.save(function (err, data) {
  //   console.log('数据添加成功')
  //   res.send(data)
  // })

});

//接收所有用户信息列表
router.get('/userlist', (req, res) => {
  // res.send('111') 这是开始测试有没有数据一个接口里面只能有一个send输出
  //在数据库查找所有数据，把当前所有用户数据返回给前端
  userModel.find().exec(function (err, data) {
    console.log(data)
    return res.send(data)
  })
})

module.exports = router;
