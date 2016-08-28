var translator = (function(fr) {
  var  frenchWords = {
    merry: "Joyeaux",
    christmas: "Noel",
    and: "et",
    happy: "Content",
    new: "Nouveau",
    year: "Annee"
  };
  fr.getFr = function(inputWords){
    for (var i = 0; i < inputWords.length; i++) {
      var flag = 0;
      for (var j in frenchWords) {
        if (inputWords[i] === j) {
          inputWords[i] = frenchWords[j];
          flag = 1;
        }
      }
      if (flag === 0) {
        inputWords[i] = "";
      }
    }
    return inputWords.join(" ");
  };
  return fr;
})(translator || {});
