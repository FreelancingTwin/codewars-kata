// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

//

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // let res =  []
  // for(let i = 0; i< nums.length; i++){
  //     let newArr = nums.filter(el => el !== nums[i]);
  //     let ans = newArr.reduce((a, b) => a*b);
  //     res.push(ans)
  // }
  // return res;
  const n = nums.length;
  const answer = new Array(n);

  // Calculate the prefix products
  answer[0] = 1;
  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  // Calculate the suffix products and multiply with prefix products
  let suffixProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffixProduct;
    suffixProduct *= nums[i];
  }

  return answer;
};
// const n = nums.length;
// const answer = new Array();
// answer[0] = 1;
// for(let i = 0; i < n; i++){
//     answer[i] = answer[i - 1] * nums[i - 1]
// }

// let suffix = 1;
// for(let i = n -1; i  > 0; i--){
//     answer[i] *= suffix;
//     suffix *= nums[i];
// }
// return answer