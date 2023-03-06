Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1

Example 2:

Input: nums = [4,1,2,1,2]
Output: 4

Example 3:

Input: nums = [1]
Output: 1


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //compare index of with last index of
    // return nums.reduce((a,b)=> a^b)

    //hashmap
    let hashmap = {}
    nums.forEach(el => {
        if(hashmap.hasOwnProperty(el)){
            hashmap[el]+= 1
        } else{
            hashmap[el] = 1
        }
    })
    
    for(const [key, value] of Object.entries(hashmap)){
        if(value === 1) return key
    }
    
};