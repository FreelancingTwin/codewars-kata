Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.


function sumMix(x){
  //x is an array. x contains mixed datatypes str, ints.
//   return sum of x
//   [9, 3, '7', '3']), 22);
//   ['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
  // map the whole of it with the number method.
//   then reduce it into one num
  let newArr = x.map(el => Number(el))
  let sumOfArr = newArr.rduce((a,b)=>a+b)
  return sumOfArr
}