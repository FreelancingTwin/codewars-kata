Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.


//BRAINSTORMING
  //x is a string of words, could be more than two, spaced, lowecase
  //look at the last index of each word, sort from there
  //'take me to semynak'), ['take', 'me', 'semynak', 'to']
  //('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
  //split x by space, pick the last index, then sort, map
  
//   this turns str to arr. So, words intact
//   let arr = x.split(' ')
  
//   //this seperates each word into an array and splits into individual letters
//   let arr2 = arr.map(el=> el.split(''))
  
//   let toBeSorted = []
//   for(el of arr2){
//     toBeSorted.push(el[el.length - 1])
//   }
  
// //   this gives the proper order of words to compare and show
//   toBeSorted.sort((a,b)=> b - a)
//   let res = []
//   //now to compare and sort the og arr
//   for(let el of arr){
//     if(toBeSorted[toBeSorted.indexOf(el)] === arr[arr.length - 1]){
//       res.push(el)
//     }
//   }
//   return res
// }

//NOW THE ACTUAL PROPER SOLUTION
function last(x){
  return x.split(' ')
  .sort((a,b)=> a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}