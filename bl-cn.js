
var translator = (function(cn) {
  var  chineseWords = {
    merry: "愉快",
    christmas: "圣诞",
    and: "和",
    happy: "快乐",
    new: "新",
    year: "年"
  };
  cn.getCn = function(){
    var inputText = inputEmt.value;
    var inputWords = inputText.split(" ");
    for (var i = 0; i < inputWords.length; i++) {
      var flag = 0;
      for (var j in chineseWords) {
        if (inputWords[i] === j) {
          inputWords[i] = chineseWords[j];
          flag = 1;
        }
      }
      if (flag === 0) {
        inputWords[i] = "";
      }
    } 
    return inputWords.join(" ");
  };
  return cn;
})(translator || {});
