Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
.


function noOdds( values ){
    //values is an array
    //filter the array to only have even numbers
    //use modulus operator to find even characters.
  return values.filter(el=> el % 2 == 0)
}