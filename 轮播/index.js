window.onload = function() {

	var allLi = document.querySelectorAll('#imgs>li')
	
	var allIndicators = document.querySelectorAll('#indicators>li')
    
    //当前索引值
	var index = 0
    
    //上一个索引值
	var lastIndex = 0
	
	setInterval(function() {

		index++

		if(index > 3) {

			index = 0
		}
        
        //图片切换
		var lastLi = allLi[lastIndex]

		lastLi.className = ''

		var aLi = allLi[index]

		aLi.className = 'current'
		
		
		//小白点切换
		var lastIndicators = allIndicators[lastIndex]
		
		lastIndicators.className = ''
		
		var nowIndicators = allIndicators[index]
		
		nowIndicators.className = 'current'
        
        //共用
		lastIndex = index

	}, 1000)
}