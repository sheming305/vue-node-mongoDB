var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
mongoose.connect("mongodb://127.0.0.1:27017/user",function(err){
	if(err){
		throw err
	}else{
		console.log('数据库链接成功')
	}
});
//定义骨架
var userSchema = new mongoose.Schema({
							userName:String,
							psd:String
					});

//创建模型
var userModel = mongoose.model('user',userSchema,'user');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//接收客服端发送的登陆请求
router.post('/checklogin',(req,res) => {
 	// console.log(req.body.userName)
 	let userName = req.body.userName
 	let psd = req.body.psd
 	let userS = new userModel()
 	userS.userName = userName;
 	userS.psd = psd;
 	userS.save(function(err,data){
 		console.log('数据添加成功')
 	})

 	res.send('1')
});

module.exports = router;
