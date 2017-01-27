/** ! Adventure Mode !
 * Ex : makePairs()
 *
 * Write a function called makePairs that takes an array of values and
 * returns an an array of pair-arrays.
 *
 * e.g. makePairs(['hi','hello', 'howdy', 'greetings'])
 *       => [ ['hi', 'hello'] , ['howdy', 'greetings'] ]
 *
*/

function makePairs(inputArray){
  var pairOne = []; var pairTwo = []; var pairThree = []; var pairFour = [];
  var pairsArray = [];
  pairOne = [inputArray[0], inputArray[1]];
  pairTwo = [inputArray[2], inputArray[3]];
  pairThree = [inputArray[4], inputArray[5]];
  pairFour = [inputArray[6], inputArray[7]];
  pairsArray.push(pairOne);
  pairsArray.push(pairTwo);
  pairsArray.push(pairThree);
  pairsArray.push(pairFour);
  return pairsArray;
}

var pairsOutput = makePairs([10,20,30,40,50,60,70,80])
//=> [ [10,20], [30,40], [50,60], [70,80] ]

var firstPair = pairsOutput[0];
var thirdPair = pairsOutput[2];

console.assert(pairsOutput.length === 4)
console.assert(firstPair.length === 2)
console.assert(firstPair[0] === 10)
console.assert(firstPair[1] === 20)
console.assert(thirdPair[0] === 50)
console.assert(thirdPair[1] === 60)
