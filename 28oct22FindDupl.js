The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


function duplicateEncode(word){
    // one word, no spaces, convert caps.
  //return ( if word repeats once, ) if word repeats more than once
  //"din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
  //use indexOf and lastIndexOf to find duplicates, then replace
//   return word.toLowerCase().split('').map((el, idx, w)=> w.indexOf(el) !== w.lastIndexOf(el)?
//     ')':
//     '(' 
//   ).join('')
  return word.toLowerCase()
        .split('')
        .map((el, idx, w) => w.indexOf(el) === w.lastIndexOf(el)? '(' : ')')
        .join('')
}