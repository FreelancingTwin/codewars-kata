An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

    The starting array sequence is [1,2,3,4,5,6,7,8,9]
    The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
    Your function should return the int 5.

If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).


function findDeletedNumber(arr, mixArr) {
  //arr and mixArr have almost identical elements, diff orders
  //return missing number, or 0 if no diff
  //[1,2,3,4,5], [3,4,1,5]), 2
  //[1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]
  //use some, use filter, indexOf
//someArr.indexOf(value) === -1 is a value that does not exist in someArr - throw that in a filter!  OR... think about the math...
//    let firstSum = arr.reduce((a,b)=> a+b)
//    let secSum = mixArr.reduce((a,b)=> a+b)
//    let missingEl = firstSum - secSum
//    return missingEl
  return arr.filter(el=> mixArr.indexOf(el) === -1) [0] || 0
}