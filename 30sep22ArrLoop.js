In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

For example:

"This Is A Test" ==> "TIAT"

Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.


function makeString(s){
  // string, no numbers, caps no problem, has only one space,
  //return first word in string els
  //"This Is A Test" ==> "TIAT"
//   brown eyes are nice"), "bean"
  //use a for loop, or a mapped arr. Either works
let arr = s.split(' ')
let res = ''
   arr.forEach(el => res+= el[0])
  return res
}
//Alt solution
s.split(' ').map(el => el[0]).join(' ')