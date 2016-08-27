var translator = (function(spanish){
  

  var  spanishWords = {
    merry: "Feliz",
    christmas: "Navidad",
    and: "Y",
    happy: "Prospero",
    new: "Nuevo",
    year: "Ano"
  };

 spanish.getSp = function(){
    var inputText = inputEmt.value;
    var inputWords = inputText.split(" ");
    for (var i = 0; i < inputWords.length; i++) {
      for (var j in spanishWords) {
        if (inputWords[i] === j)
          inputWords[i] = spanishWords[j];
      }
    } 
    return inputWords.join(" ");
  };
  return spanish;


})(translator || {})
