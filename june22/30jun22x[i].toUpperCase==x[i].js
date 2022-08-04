Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
Example

Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );


// var capitals = function(word) {
// 	//convert word, split
//   //filter array for caps
//   //if word === i ; word[i]
//   let indexArr = []
//   let arr = word.split('')
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//   let caphabet = alphabet.toUpperCase().split('')
//   for(i in arr){
//     for(j in caphabet){
//       if(i === j){
//         indexArr.push(Number(i))
//       }  
//   }
// };  return indexArr;
// }

var capitals = function (word) {
    var caps = [];
    for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
  };
  
  // let capitals = function(word){
  //   var caps = [];
  //   for(i=0; i<word.length; i++){
  //     if(word[i].toUpperCase() == word[i]){
  //       caps.push(i);
  //     } return caps
  //   }