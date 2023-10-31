'stric mode'
// You are given an integer `num`. Return the maximum valued integer that can be made with a single swap of any two digits.

// Return the maximum valued number you can get.

// Example 1:

// Input: num = 2736
// Output: 7236
// Explanation: Swap the number 2 and the number 7.

// Example 2:

// Input: num = 9973
// Output: 9973
// Explanation: No swap.

// 123 -> 321
// 5123 -> 5321

/**
* @param {number} num
* @return {number}
*/
function maximumSwap(num) {
  const digitsOfNum = num.toString().split('');
  const solutionAsStringArray = searchForMaximumSwap(digitsOfNum, [...digitsOfNum]);
  return Number(solutionAsStringArray.join(''));
}

function searchForMaximumSwap(originalArray, modifiedArray, currentIndex = 0){
  //base case 1
  if(modifiedArray.length === 0){
    return originalArray;
  }

  const indexOfMaxValue = getMaxNumberIndexFromArray(modifiedArray);
  const indexOfMaxValueInOriginalArray = getMaxNumberIndexFromArray(originalArray);

  //base case 2
  if(modifiedArray[0] !== modifiedArray[indexOfMaxValue]){
    return swapNumbers(originalArray, currentIndex, indexOfMaxValueInOriginalArray);;
  }
  modifiedArray.shift();
  return searchForMaximumSwap(originalArray, modifiedArray, ++currentIndex);
}

function swapNumbers(array, index1, index2){
  const backupValue = array[index1];
  array[index1] = array[index2];
  array[index2] = backupValue;
  return array;
}

function getMaxNumberIndexFromArray(array){
  const maxValue = Math.max(...array);
  return array.indexOf(maxValue.toString());
}

console.log(maximumSwap(process.argv[2]))