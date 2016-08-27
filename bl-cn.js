var inputEmt = document.getElementById("message");
var outputEmt = document.getElementById("translated");
var chineseBtn = document.getElementById("chinese");

var translator = function() {
  var  chineseWords = {
    merry: "A",
    christmas: "B",
    and: "C",
    happy: "D",
    new: "E",
    year: "F"
  };
  var inputText = inputEmt.value;
  var inputWords = inputText.split(" ");
      for (var i = 0; i < inputWords.length; i++) {
        for (var j in chineseWords) {
          if (inputWords[i] === j)
            inputWords[i] = chineseWords[j];
        }
      } 

outputEmt.innerHTML = inputWords.join(" ");
};

chineseBtn.addEventListener("click", translator);
