You will be given two ASCII strings, a and b. Your task is write a function to determine which one of these strings is "worth" more, and return it.

A string's worth is determined by the sum of its ASCII codepoint indexes. So, for example, the string HELLO has a value of 372: H is codepoint 72, E 69, L 76, and O is 79. The sum of these values is 372.

In the event of a tie, you should return the first string, i.e. a.

function highestValue(a, b) {
  //two strings, contain numbers not null
  //add their charCodes and return bigger string, if tie, return a
  //"AaBbCcXxYyZz0189", "KkLlMmNnOoPp4567"), "KkLlMmNnOoPp4567"
  //("ABcd", "0123"), "ABcd"
  //use for loop, use charCodeAt method
 let suma = 0;
    for(let i = 0; i < a.length; i++) {
        for ( let j=0; j < a[i].length; j++ ) {
            let char_code = a[i].charCodeAt(j);
            suma += char_code;
         }
      }
  
   let sumb = 0;
    for(let i = 0; i < b.length; i++) {
        for ( let j=0; j < b[i].length; j++ ) {
            let char_code = b[i].charCodeAt(j);
            sumb += char_code;
         }
      }
    return suma >= sumb ? a : b

  }