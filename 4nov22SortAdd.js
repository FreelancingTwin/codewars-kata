Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

Input sequence contains minimum two elements and every element is an integer.


function largestPairSum (numbers) {
  //numbers is an array, no decimals, has negatives, not empty
  //return sum of two biggest numbers
  //[10,14,2,23,19], 42
//   [-100,-29,-24,-19,19], 0);
  
 let sortedArr = numbers.sort((a,b)=> a - b)
  return sortedArr[sortedArr.length - 1] + sortedArr[sortedArr.length - 2]
}

//Alt solution, better readability
let sortedArr = numbers.sort((a,b)=>b - a)
return sortedArr[0] + sortedArr[1]