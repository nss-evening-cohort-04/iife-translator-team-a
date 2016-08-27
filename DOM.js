var inputEmt = document.getElementById("message");
var outputEmt = document.getElementById("translated");
var chineseBtn = document.getElementById("chinese");
var frenchBtn = document.getElementById("french");
var germanBtn = document.getElementById("german");
var spanishBtn = document.getElementById("spanish");
var outputText = "";

chineseBtn.addEventListener("click", function(){
	outputText = translator.getCn();
	outputEmt.innerHTML = outputText;
	}
);
frenchBtn.addEventListener("click", function(){
	outputText = translator.getFr();
	outputEmt.innerHTML = outputText;
	}
);
germanBtn.addEventListener("click", function(){
	outputText = translator.getGr();
	outputEmt.innerHTML = outputText;
	}
);
spanishBtn.addEventListener("click", function(){
	outputText = translator.getSp();
	outputEmt.innerHTML = outputText;
	}
);
