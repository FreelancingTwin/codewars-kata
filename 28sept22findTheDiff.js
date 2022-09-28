There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

    Find the unique number (this kata)
    Find the unique string
    Find The Unique

function findUniq(arr) {
  // arr, just one differing number
  //return differing number
  //[ 1, 1, 1, 2, 1, 1 ]) === 2
  //[ 0, 0, 0.55, 0, 0 ]) === 0.55
  //You can use find operator, use every operator, use a loop and indexOf, maybe reduce
//   return arr.reduce((a,b)=>{
//     if(a % b !== 0) return b
//   })
  return arr.find(el=> arr.indexOf(el)=== arr.lastIndexOf(el))
}