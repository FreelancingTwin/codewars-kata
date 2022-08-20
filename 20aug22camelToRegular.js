Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

function solution(string) {
    //   for(i in string){
    //   if(i === e.toUpperCase()){
    //     i = ' '+ i
    //     return i
    // }
    //       } return string
    
    string = string.split('').map(function (el) {
        if (el === el.toUpperCase()) {
          el = ' ' + el
        }
        return el
      })
      return string.join('')
    } 