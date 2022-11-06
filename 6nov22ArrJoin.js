Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.
"h,o,l,a"


function printArray(array){
 //array, contains split words
  //return a string with words joined
  //["h","o","l","a"] -> "h,o,l,a"
  //use join
  return array.join()
  //alt solutins
  return array.toString()
  return array.join(',')
  //And my fav in uniqueness
  return String(array)
}