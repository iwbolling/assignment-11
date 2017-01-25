
/**
 * Ex-08 : hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as
 *
 *
**/

function hasDoubleLetters(str){
  var doubleFound = false;
  for (i = 0; i < str.length; i++){
    if (str.toLowerCase()[i] === str.toLowerCase()[i - 1]) {
      doubleFound = true;
    } else if (str.toLowerCase()[i] === str.toLowerCase()[i + 1]){
      doubleFound = true;
    }
  }
  return doubleFound;
}

console.assert( hasDoubleLetters('stutter') === true )
console.assert( hasDoubleLetters('prospect') === false )
console.assert( hasDoubleLetters('shoehorn') === false )
console.assert( hasDoubleLetters('Aardvark') === true )
