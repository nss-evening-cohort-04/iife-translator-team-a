//german translator augmented from translator iife
var translator = (function(german){

	var germanTxt = {merry:"frohlich",
	christmas:"weihnactea",
	and:"und",
	happy:"glucklich",
	holidays:"ferien"};


german.getValue = function(key){
	return translator.key;

}

var translatedStr = '';
var str = document.getElementById('message').value;
console.log(str);

var arr = str.split(' ');
console.log(arr);

for(var i=0; i<str.length;i++){
	translatedStr += translator.getValue(arr[i]);
	
}

document.getElementById('translated').innerHTML= translatedStr;


return german;
})(translator || {});