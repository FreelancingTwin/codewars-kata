Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity

function capitalize(s){
  //s is a word, no special characters, no numbers
  //change case in s, two different versions: odd, even
const odd = s.split('')
              .map((el, idx)=>{
                if(idx % 2 !== 0){
                  return el.toUpperCase()
                } else{
                    return el
                }
              })
              .join('')
const even = s.split('')
              .map((el, idx)=>{
                if(idx % 2 == 0){
                  return el.toUpperCase()
                } else{
                    return el
                }
              })
              .join('')
return [even, odd]
};