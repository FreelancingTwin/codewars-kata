Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

function sumOfIntegersInString(s){
  // string, contains numbers, double-digit numbers too, can be empty, 
//   return sum of numbers
//   ["Dogs are our best friends.", 0],
//     ["C4t5 are 4m4z1ng.", 18],
//   use regex+ for double digit numbers, filter, match, reduce
    
  return (s.match(/[0-9]+/g) || [])
  .reduce((a,b)=> (Number(a)+Number(b)), 0)
}
//  return (s.match(/\d+/g) || []).reduce((s, n) => s + +n, 0);