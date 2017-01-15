$('#postProduct').click(function() { 
	$.post('http://localhost:3000/scrape/obey', { productURL: $('#productURL').val()}, 
		function(result){
			console.log(result);
		});
});

function rootDomain(url) {
	var rightPeriodIndex;
	for (var i = url.length - 1; i >= 0; i--) {
		if(url[i] == '.') {
			//console.log("rightPeriodIndex", i);
			rightPeriodIndex = i;
			var noExtension = url.substr(0,i);
			console.log("this is noExtension", noExtension);
			break;
		}
	}
	var result = noExtension.substring(noExtension.lastIndexOf(".") + 1);
	return result;
}
