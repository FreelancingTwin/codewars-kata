You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    //SOL 1:
//   return arr.reduce((a,b)=> a + (b > 0 ? b : 0), 0)
    //SOL 2:
//   return arr.filter(el => el > 0).reduce((a,b)=> a + b, 0)
    //SOL 3:
  let sum = 0;
  for(let el of arr){
    if(el > 0){
      sum+= el
    }
  } 
  return sum
}