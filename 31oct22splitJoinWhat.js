In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space at index 3, so the string becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy". 
solve("codewars") = "srawedoc"

In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space at index 3, so the string becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy". 
solve("codewars") = "srawedoc"
function solve(str){
   //str. has spaces. never empty
  //return reversed string BUT with spaces intact
  //("codewars"),"srawedoc")
//   ("your code"),"edoc ruoy")
  //use .reverse method(), use join(), use replace?
//   return str.split('').reverse().join('').split(' ')
  
//     let splitStr = str.split('')
//   let reverseStr = str.split(' ').join('').split('').reverse()
//   for (let i = 0; i <= splitStr.length; i++){
//     if (splitStr[i] === ' ') {
//       reverseStr.splice(i, 0, ' ')
//     }
//   }
  
//   return reverseStr.join('')
  let split = str.split('')
  let revStr = str.split(' ').join('').split('').reverse()
  for(let i in str){
    if(str[i] === ' ') revStr.splice(i, 0, ' ')
  } return revStr.join('')
  }