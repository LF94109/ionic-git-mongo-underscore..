function Alert(msg,action){
	
	this.message = msg
	
	this.action = action
	this.show()	
}

//显示弹出的蒙板
Alert.prototype.showMask = function(){
	
	var mask = document.createElement('div')
	
	document.body.appendChild(mask)
	
	mask.className = 'modal-mask'
	
}

//显示弹出框的主题部分
Alert.prototype.showBody = function(){
	
	//创建弹出框主题
	var container = document.createElement('div')
	
	document.body.appendChild(container)
	
	container.className = 'modal-container'
	//弹出框的信息框
	var msg = document.createElement('div')
	
	container.appendChild(msg)
	
	msg.className = 'modal-message'
	
	msg.innerHTML = this.message
	
	//弹出框的点击按钮
	var btn = document.createElement('div')
	
	container.appendChild(btn)
	
	btn.className = 'modal-button'
	
	btn.innerHTML = '确定'
	
	btn.onclick = this.buttonClick.bind(this)
	
}

Alert.prototype.buttonClick = function(e){
	
	var mask = document.querySelector('.modal-mask')
	
	//删除标签元素
	mask.remove()
	
	var container = document.querySelector('.modal-container')
	
	//删除标签元素
	//document.body.removeChild(container)
	
	container.remove()
	
	//获取当前点击的是哪一个按钮
	var div = e.currentTarget
	
	//根据按钮的class属性确认是不是点击的是确定按钮
	//如果点击的是确定按钮    就把数字1传给函数，否则就把0回调给函数
	var index = (div.className =='modal-sureBtn') ? 1 : 0
	//执行回调方法
	this.action(index)
}


Alert.prototype.show = function(){
	
	this.showMask()
	this.showBody()
	
}












