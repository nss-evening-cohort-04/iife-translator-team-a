//german translator augmented from translator iife
var translator = (function(german){

	var germanTxt = {merry:"Frohlich",
	christmas:"Weihnactea",
	and:"Und",
	happy:"Glucklich",
	new:"Neu",
	year: "Jahr"};

	


	german.printValue = function(){
		var str = document.getElementById('message').value;
		console.log(str);
		
		var arr = str.split(' ');
		console.log(arr);
	},

	german.getValue = function(key){
		return germanTxt[key];
	},
	german.outputValue = function(){
		var translatedStr = '';

		var str = document.getElementById('message').value;
		var arr = str.split(' ');
		
		for(var i=0; i<str.length; i++){
			// translatedStr += translator.getValue(arr[i]);
			arr[i] = translator.getValue(arr[i]);
		}

		return arr.join(' ');
	}

return german;
})(translator || {});






