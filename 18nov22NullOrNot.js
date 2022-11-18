Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []


function solution(nums){
  //nums is an array, could be empty
  //return sorted array, ascending
  //[1,2,3,10,5]), [1,2,3,5,10])
  //(null), [])
  //([]), [])
  //([20, 2, 10]), [2,10,20])
  //([2, 20, 10]), [2,10,20])
//   use sort with a conditional
  //here, if no nums ( === null), then just refer to nums, no need for length or other properties.
  return nums ?
  nums.sort((a,b)=>a - b) : []
}