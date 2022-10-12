Complete the method which accepts an array of integers, and returns one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  let s = array.join('')
  if(s === array.sort((a,b)=> a - b).join('')) {
    return 'yes, ascending'
  } else if((s === array.sort((a,b)=>  b - a).join(''))){
    return 'yes, descending'
  } else return 'no'
}