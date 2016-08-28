var inputEmt = document.getElementById("message");
var outputEmt = document.getElementById("translated");
var chineseBtn = document.getElementById("chinese");
var frenchBtn = document.getElementById("french");
var germanBtn = document.getElementById("german");
var spanishBtn = document.getElementById("spanish");
var outputText = "";

chineseBtn.addEventListener("click", function(){
	checkInput();
	outputText = translator.getCn();
	outputEmt.innerHTML = outputText;
	var msg = new SpeechSynthesisUtterance();
	msg.text = outputText;
	msg.lang = 'zh-CN';
	window.speechSynthesis.speak(msg);
	}
);
frenchBtn.addEventListener("click", function(){
	checkInput();
	outputText = translator.getFr();
	outputEmt.innerHTML = outputText;
	var msg = new SpeechSynthesisUtterance();
	msg.text = outputText;
	msg.lang = 'fr-FR';
	window.speechSynthesis.speak(msg);
	}
);
germanBtn.addEventListener("click", function(){
	checkInput();
	outputText = translator.getGr();
	outputEmt.innerHTML = outputText;
	var msg = new SpeechSynthesisUtterance();
	msg.text = outputText;
	msg.lang = 'de-DE';
	window.speechSynthesis.speak(msg);
	}
);
spanishBtn.addEventListener("click", function(){
	checkInput();
	outputText = translator.getSp();
	outputEmt.innerHTML = outputText;
	var msg = new SpeechSynthesisUtterance();
	msg.text = outputText;
	msg.lang = 'es-ES';
	window.speechSynthesis.speak(msg);
	}
);

function checkInput() {
	var inputText = inputEmt.value;
  var inputWords = inputText.split(" ");
  for (var i = 0; i < inputWords.length; i++) {
    switch (inputWords[i].toLowerCase()) {
    	case "merry":
    	case "christmas":
    	case "and":
    	case "happy":
    	case "new":
    	case "year":
    		break;
    	default: 
    		alert("Sorry, the word \"" + inputWords[i] + "\" is not in our library and won't be translated!");
    		break;
    }
  } 
}
