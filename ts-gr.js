//german translator augmented from translator iife

var translator = (function(german){

	var germanTxt = {merry:"Frohlich",
	christmas:"Weihnactea",
	and:"Und",
	happy:"Glucklich",
	new:"Neu",
	year: "Jahr"};

	german.getValue = function(key){
		return germanTxt[key];
	},
	german.getGr = function(arr){
		
		for(var i=0; i<arr.length; i++){
			arr[i] = translator.getValue(arr[i]);
		}

		return arr.join(' ');
	}

	return german;
})(translator || {});






