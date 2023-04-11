Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.


/**
 * @param {number[]} nums
 * @return {number}
 */

function findMaxConsecutiveOnes(nums) {
    let maxConsecutive = 0;  // maximum consecutive count
    let currentConsecutive = 0;  // current consecutive count

    for(let i of nums){
        if( i === 1){
            currentConsecutive+=1;
            maxConsecutive = Math.max(currentConsecutive, maxConsecutive);
        } else {
            currentConsecutive = 0
        }
    }
    return maxConsecutive;
//         if(nums[i] === 1){
//             currentConsecutive++;
//             maxConsecutive = Math.max(maxConsecutive, currentConsecutive)
//         } else {
// currentConsecutive = 0}
//     }
//         return maxConsecutive
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 1) {
//             currentConsecutive++;
//             maxConsecutive = Math.max(maxConsecutive, currentConsecutive);
//         } else {
//             currentConsecutive = 0;
//         }
//     }

//     return maxConsecutive;
}
