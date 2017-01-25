/**
 * Ex-05
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

function findLongestWord(str){
  var strArray = str.split(" ");
  var longestWord = "";
  for (i = 0; i < strArray.length; i++) {
    strArray[i] = cullApostrophes(strArray[i]);
    if (strArray[i].length > longestWord.length) {
      longestWord = strArray[i];
    }
  }
  return longestWord;
}

function cullApostrophes(str){
  var splitStr = str.split("'");
  var newStr = splitStr.join("");
  return newStr;
}



console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')
console.assert(findLongestWord('a time to act.') === 'time')
