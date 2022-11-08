You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
Examples

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  //numbers is an array, non negative ints, never empty
  //return the only non-repeating number
  //[1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
  //use a for in loop, lastIndex and indexOf
  for(let i in numbers){
    if(numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){ return numbers[i]}
  }

//Alt solution
return numbers.reduce((a,b)=> a^b)
}