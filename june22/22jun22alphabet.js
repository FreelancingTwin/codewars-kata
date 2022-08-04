
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')


// function longest(s1, s2) {
//   let sol = [ ]
// //   array containing alphabet
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//   arrAlphabet = alphabet.split('')
// //   newString = s1 + s2 with no repeating letters SORTED
    
//     let everyS1  = For(i in s1) {
//         return i
//     }
//     let everyS2 = for (j in s2) {
//         return j
//     }
//   let sorted = sort(s1+s2).filter(
//                 for(i in s1){
//             for(j in s2){
//                                       i === j
//                                 }
//   }
//   );
// //   newString matches some of alphabet? push to an empty array
  
//   sorted.forEach(q === alphabet.forEach(r)){
//         sol.push(1)
//         // .stringify()
// } return sol
// }