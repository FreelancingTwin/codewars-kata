Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


var number=function(array){
    //   let result = []
    //   //x could be 0 and not change the increment, so change 1 into i++
    //   for(let i=1; i<array.length; i++){
    //  result.push(array.map(x => `${array.indexOf(x)+i}: ${x}`))
      
    //   } return result;
      
      return array.map((word,index)=> `${index+1}: ${word}`)
      