Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5

Let's assume that all numbers in the input will be integer values.


function sumDigits(number) {
  //number is double digit int, may be negative
  //return sum of number when seperated
  //10 -> 1
  //44 -> 8
  //54 -> 9
  //use math.abs to deal with negatives, convert it to string, split, then reduce
  return Math.abs(number)
  .toString()
  .split('')
  .reduce((a,b)=> +a + +b, 0)
}