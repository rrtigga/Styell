$('#postProduct').click(function() { 
	$.post('http://localhost:3000/scrape/redbubble', { productURL: $('#productURL').val()}, 
		function(result){
			console.log(result);
		});
});

function rootDomain(url) {
	var rightPeriodIndex;
	for (var i = url.length - 1; i >= 0; i--) {
		if(url[i] == '.') {
			console.log("rightPeriodIndex", i);
			rightPeriodIndex = i;
			for (var j = rightPeriodIndex - 1; j >= 0; j--) {
				if(url[j] == "/" || url[j]== "."){
					//parse between that character and rightPeriodIndex 
					var rootDomain = url.substring(url.lastIndexOf(url[j])+1,url.lastIndexOf("."));
					//return word
					return rootDomain;
				}
				else {
					//strip out the extension from the url string
					//return word
					var rootDomain = url.substring(0, url.indexOf("."));
					return rootDomain;
				}
			}
			
		}
	}
}

console.log(rootDomain("facebook.com"));