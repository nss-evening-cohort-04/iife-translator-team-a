var translator = (function(fr) {
  var  frenchWords = {
    merry: "Joyeaux",
    christmas: "Noel",
    and: "et",
    happy: "Content",
    new: "Nouveau",
    year: "Annee"
  };
  fr.getFr = function(){
    var inputText = inputEmt.value;
    var inputWords = inputText.split(" ");
    for (var i = 0; i < inputWords.length; i++) {
      for (var j in frenchWords) {
        if (inputWords[i] === j)
          inputWords[i] = frenchWords[j];
      }
    }
    return inputWords.join(" ");
  };
  return fr;
})(translator || {});
