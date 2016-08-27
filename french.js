var inputEmt = document.getElementById("message");
var outputEmt = document.getElementById("translated");
var frenchBtn = document.getElementById("french");

var translator = function() {
  var  frenchWords = {
    merry: "Joyeaux",
    christmas: "Noel",
    and: "et",
    happy: "Content",
    new: "Nouveau",
    year: "Annee"
  };
  var inputText = inputEmt.value;
  var inputWords = inputText.split(" ");
      for (var i = 0; i < inputWords.length; i++) {
        for (var j in frenchWords) {
          if (inputWords[i] === j)
            inputWords[i] = frenchWords[j];
        }
      }

outputEmt.innerHTML = inputWords.join(" ");
};

frenchBtn.addEventListener("click", translator);
