The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 


function duplicateEncode(word){
    //repeating words
  //if so, return ) or else (
//   let res = ''
  let str = word.toLowerCase().split('')
   return str.map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('')
//   for(let i in range(0, len(str)))  {
//     let count = 0;
//     for(j in range(i+1, len(str)){
//     if(str(i) === str(j)){
//       count+= 1;
//       str[j]= 0;