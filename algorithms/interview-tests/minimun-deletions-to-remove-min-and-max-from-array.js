// Challenge - Removing Minimum and Maximum From Array 📄
// You are given a 0-indexed array of distinct integers nums.

// There is an element in nums that has the lowest value and an element that has the highest value. 
// We call them the minimum and maximum respectively. Your goal is to remove both these elements from the array.

// A deletion is defined as either removing an element from the front of the array or removing an element from the back of the array.

// Return the minimum number of deletions it would take to remove both the minimum and maximum element from the array.

// Example 1️⃣
// Input: nums = [2,10,7,5,4,1,8,6]
// Output: 5

// Explanation: 
// The minimum element in the array is nums[5], which is 1.
// The maximum element in the array is nums[1], which is 10.

// We can remove both the minimum and maximum by removing 2 elements from the front and 3 elements from the back.
// This results in 2 + 3 = 5 deletions, which is the minimum number possible.


// Example 2️⃣
// Input: nums = [0,-4,19,1,8,-2,-3,5]
// Output: 3

// Explanation: 
// The minimum element in the array is nums[1], which is -4.
// The maximum element in the array is nums[2], which is 19.

// We can remove both the minimum and maximum by removing 3 elements from the front.

// This results in only 3 deletions, which is the minimum number possible.





function getMinimunNumberOfDeletions(nums){
 
	const indexOfMinNumber = nums.indexOf( Math.min( ...nums ) );
	const indexOfMaxNumber = nums.indexOf( Math.max( ...nums ) );

	
	const middleIndexOfArray = Math.floor( nums.length / 2);

	console.log({indexOfMinNumber});
	console.log({indexOfMaxNumber});
	console.log({middleIndexOfArray});
 
	if(indexOfMinNumber < middleIndexOfArray && indexOfMaxNumber < middleIndexOfArray){
		if(indexOfMinNumber < indexOfMaxNumber){
			return indexOfMaxNumber + 1;
		}else{
			return indexOfMinNumber + 1;
		}
	}
 
	if(indexOfMinNumber > middleIndexOfArray && indexOfMaxNumber > middleIndexOfArray){
		if(indexOfMinNumber < indexOfMaxNumber){
			return nums.length - indexOfMinNumber;
		}else{
			return nums.length - indexOfMaxNumber;
		}
	}

	let minimunDeletions = 0;
	if(indexOfMinNumber < middleIndexOfArray){
		minimunDeletions = (indexOfMinNumber + 1)
	}else{
		minimunDeletions = nums.length - indexOfMinNumber;
	}

	if(indexOfMaxNumber < middleIndexOfArray){
		minimunDeletions += (indexOfMaxNumber + 1)
	}else{
		minimunDeletions += nums.length - indexOfMaxNumber;
	}

	return minimunDeletions;

}

console.log(getMinimunNumberOfDeletions( [0,-4,19,1,8,-2,-3,5] ));