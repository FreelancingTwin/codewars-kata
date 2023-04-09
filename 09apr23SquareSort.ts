// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.
 

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?


/**
 */
// var sortedSquares = function(nums) {
    //square every element in nums, then sort it
    // return nums.map(num => Math.pow(num,2)).sort((a,b)=> a - b)
// };


function sortedSquares(nums) {
//     const result = new Array(nums.length); // create a new array to store squared values
//     let left = 0; // pointer for the leftmost element
//     let right = nums.length - 1; // pointer for the rightmost element
//     let index = nums.length - 1; // pointer for the result array
    
//     while (left <= right) {
//         const leftSquare = nums[left] * nums[left];
//         const rightSquare = nums[right] * nums[right];
        
//         if (leftSquare > rightSquare) {
//             result[index] = leftSquare;
//             left++;
//         } else {
//             result[index] = rightSquare;
//             right--;
//         }
        
//         index--;
//     }
    
//     return result;
    
    // const result = new Array(nums.length)
    // let left = 0;
    // let right = nums.length - 1;
    // let index = nums.length - 1;
    
    // while(left <= right){
    //     const leftSq = nums[left] * nums[left]
    //     const rightSq = nums[right] * nums[right]
        
    //     if(leftSq > rightSq){
    //         result[index] = leftSq
    //     } else {
    //         result[index] = rightSq
    //         right--
    //     }
    //     index--
    // }
    // return result

    const result = new Array(nums.length)
    const left = 0;
    const right = nums.length - 1
    const index = nums.length - 1

    while(left <= right){
        const leftSq = nums[left] * nums[left]
        const rightSq = nums[right] * nums[right]

        if(leftSq > rightSq){
            result[index] = leftSq
        } else {
            result[index] = rightSq
            right--
        }
        index--
    } return result
};
