*** No Loops Allowed ***

You will be given an array (a) and a limit value (limit). You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

Do not use loops. Do not modify input array.

Looking for more, loop-restrained fun? Check out the other kata in the series:

https://www.codewars.com/kata/no-loops-2-you-only-need-one

https://www.codewars.com/kata/no-loops-3-copy-within


function smallEnough(a, limit){
  //a is an array of numbers
  //limit is a number
  //see if array has all its numbers below or equal to limit
  //return boolean
  //NO loops!
  //use every() method
  return a.every(el=> el <= limit)
}