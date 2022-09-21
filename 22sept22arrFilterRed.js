Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
// prep: parameters, results, examples, pseudocode
  //parameters:  positive numbers, negative numbers, zero
  //results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15],
//   you should return [10, -65]
  //examples: 
//     let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
//     let expected = [10, -65];

//     let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
//     let expected = [8, -50];    
  //pseudocode: filter arr el into pos and neg, push them in an empty arr.
  
  let pos = input.filter(el => (el > 0)).length
  let neg = input.filter(el => el < 0 ).reduce((a,b)=> a+b)
  return [pos, neg]
  
}