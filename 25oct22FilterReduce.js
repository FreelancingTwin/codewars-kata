In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.


}


function repeats(arr){
//arr has repeating ints, ignore them, add the rest
  //return sum of non recurring ints
  //[4,5,7,5,4,8]),15); 7+8
  //[9, 10, 19, 13, 19, 13]),19); 9+10
  //filter els that don't have the same indexOf and Last indexOf with a forLoop, 
//   then reduce
 return arr.filter(el=> arr.indexOf(el) === arr.lastIndexOf(el))
    .reduce((a,b)=> a+b, 0)
};