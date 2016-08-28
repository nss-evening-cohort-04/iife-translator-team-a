var translator = (function(spanish){


  var  spanishWords = {
    merry: "Feliz",
    christmas: "Navidad",
    and: "Y",
    happy: "Prospero",
    new: "Nuevo",
    year: "Ano"
  };

  spanish.getSp = function(inputWords){
    for (var i = 0; i < inputWords.length; i++) {
      var flag = 0;
      for (var j in spanishWords) {
        if (inputWords[i] === j) {
          inputWords[i] = spanishWords[j];
          flag = 1;
        }
      }
      if (flag === 0) {
        inputWords[i] = "";
      }
    }
    return inputWords.join(" ");
  };
  return spanish;
})(translator || {})
