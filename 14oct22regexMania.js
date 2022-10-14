In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.


function solve(s){
//s is a string, mixed with numbers and symbols
// return array, filled with num of times each type of string appears. use .length()
//("Codewars@codewars123.com"),[1,18,3,2]
//   ("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"),[9,9,6,9])
  //take the string, take mixed regexes, 4 to be exact.
//   one regex for caps, one for small, one for symbols, one for ints
//match string with regex s.match(regex)
  let c = s.match(/[A-Z]/g).length 
  let sm = s.match(/[a-z]/g).length
  let n = s.match(/\d/g).length 
  let sy = s.match(/\W/g).length
  return [c, sm, n, sy]
}