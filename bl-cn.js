
var translator = (function(cn) {
  var  chineseWords = {
    merry: "愉快",
    christmas: "圣诞",
    and: "和",
    happy: "快乐",
    new: "新",
    year: "年"
  };
  cn.getCn = function(inputWords){
    for (var i = 0; i < inputWords.length; i++) {
          inputWords[i] = chineseWords[inputWords[i]];
    } 
    return inputWords.join(" ");
  };
  return cn;
})(translator || {});
