//german translator augmented from translator iife
var translator = (function(german){

	var germanTxt = {merry:"frohlich",
	christmas:"weihnactea",
	and:"und",
	happy:"glucklich",
	new:"neu",
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
		console.log("entered the outputValue method");

		for(var i=0; i<str.length; i++){
			// translatedStr += translator.getValue(arr[i]);
			arr[i] = translator.getValue(arr[i]);
		}

		document.getElementById('translated').innerHTML = arr.join(' ');
	}

return german;
})(translator || {});






