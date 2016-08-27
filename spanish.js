var translator = (function(spanish){
  

  var  spanishWords = {
    merry: "feliz",
    christmas: "Navidad",
    and: "y",
    happy: "prospero",
    new: "nuevo",
    year: "ano"
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
