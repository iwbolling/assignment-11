
// Ex-03 : maxOfArray()

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

function maxOfArray(numArray){
  var highestNum = 0;
  for (i = 0; i < numArray.length; i++) {
    if (numArray[i] > highestNum) {
      highestNum = numArray[i];
    }
  }
  return highestNum;
}

console.assert(maxOfArray([2,7,3,4,21,0]) === 21)
console.assert(maxOfArray([100,9,8,7,6,10]) === 100)
console.assert(maxOfArray([84,32,11,31,12,201]) === 201)
