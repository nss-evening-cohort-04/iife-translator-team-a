var inputEmt = document.getElementById("message");
var outputEmt = document.getElementById("translated");
var langEmt = document.getElementById("language");
var translateBtn = document.getElementById("translate");
var outputText = "";

translateBtn.addEventListener("click", function(){
	var inputText = inputEmt.value.toLowerCase();
  var inputWords = inputText.split(" ");
	checkInput(inputWords);
	var msg = new SpeechSynthesisUtterance();
	switch (langEmt.value) {
		case "chinese":
			outputText = translator.getCn(inputWords);
			msg.lang = 'zh-CN';
			break;
		case "french":
			outputText = translator.getFr(inputWords);
			msg.lang = 'fr-FR';
			break;
		case "spanish":
			outputText = translator.getSp(inputWords);
			msg.lang = 'es-ES';
			break;
		case "german":
			outputText = translator.getGr(inputWords);
			msg.lang = 'de-DE';
			break;
	}
	outputEmt.innerHTML = outputText;
	msg.text = outputText;
	window.speechSynthesis.speak(msg);
}
);


function checkInput(inputWords) {
  for (var i = 0; i < inputWords.length; i++) {
    switch (inputWords[i]) {
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
