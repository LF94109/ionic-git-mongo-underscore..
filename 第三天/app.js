/*
 * Node.js  可以让JavaScript在浏览器之外运行
 * 1.js可以作为服务端的语言，在服务器上运行
 * 2.js可以作为桌面化操作系统下的开发语言，开发出运行在其他操作系统下的web应用程序。
 * 3.js可以开发移动app
 * 所有JavaScript 被称为全栈式的开发语言。
 */

//使用require函数加载Node.js的express模块
var express = require('express')

//使用express模块创建一个web应用
//express是Node.js下边的一个功能强大功能模块，是一个强大的web应用程序框架，能够帮助开发者快速 简单的创建一个web应用，甚至是一个完整的网站
var app = express()

//使用web app调用use函数，函数内是express模块使用static函数来指定一个文件夹，该文件夹会作为该站点的静态文件，里边可以存放使用站点来访问的静态文件(比如：HTML文件，css文件 ，JS文件，图片等)
//静态文件：浏览器可以直接访问或者加载的文件，不需要服务端参与处理
app.use(express.static('wwwroot'))

//app调用http请求的get方法
//get就是http协议里边的一个请求方法
//get请求一般用于向服务器查询或是获取数据。
//想要查询的数据是直接追加在url的后边，用“？”作为分割符
//比如：https://www.baidu.com/s?page=1

//get 方法内有俩个参数:
//参数1：请求的url地址，此处是一个相对路径
//参数2：是一个回调函数，用来返回或是相应的数据。里边的俩个参数：
//request请求。里边柏寒请求的数据信息
//response：相应。里边包含服务器的相应信息。

app.get('/user',function(request,response){
	
	//console.log('xxxx')
	console.log(request.query)
	console.log(request.query.myName)
	console.log(request.query.age)
	
	//还可以返回给浏览器一些数据
	//response.status(200)设置响应吗：200
	//send()用来给浏览器发送响应数据
	response.status(200).send('<strong>你请求的数据是:<br>' + request.query.myName + '<br>' + request.query.age + '</strong>')
})

//app调用listen方法来监听指定的端口号。
//端口号可以区分不同的服务。只要端口号目前没有被使用，都可以
//当该web应用监听到该端口被访问，会执行第二个参数，即回调函数，同时把请求传递给上边get方法
app.listen(3300,function(){
	
	console.log('lmy server is running')
	
})






















