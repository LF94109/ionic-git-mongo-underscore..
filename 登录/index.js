const express = require('express')

const bodyParser = require('body-parser')

const multer = require('multer')

const fs = require('fs')

const app = express()

const multipart = multer()

app.use(express.static('wwwroot'))

app.use(bodyParser.urlencoded({
	extended: true
}))

app.post('/user', multipart.array(), (request, response) => {

	console.log(request.body)

	//console.log(request.body.psw)

	//console.log(request.body.pwd)
	
	var psw = request.body.psw

	var pwd = request.body.pwd
	
	var userName = request.body.userName;

	//构建对象，设置属性，用来保存留言信息
	var msg = {

		userName,
		psw,
		pwd
	}
	
	
	fs.exists('saveData', (isExists) => {

		if(!isExists) {
			console.log('该文件夹找不到')

			//fs.mkdirSync()用来创建某一个文件夹
			fs.mkdirSync('saveData')
		}
		
		fs.appendFile('saveData/msg.txt', JSON.stringify(msg) + ',', (err) => {

			if(err) {

				console.log('保存文件出错了')
			}
		})
	})
	
	

	

	if(psw == pwd) {

		response.status(200).json({
			result: '注册成功,请返回登陆！'
		})
	} else {
		response.status(200).json({
			result: '密码不一致哦！'
		})
	}

})




app.listen(3000, () => {

	console.log('服务器  server 开启了')
})