The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) == []

Enjoy it!!



// function sumDigPow(a, b) {
//   let range = [];
//   for (let i = a; i <= b; i++) range.push(i)

//   return range.filter(number => {
//     const numberArr = String(number).split``;
  
//     return numberArr.map((el, i) => {
//       return Math.pow(el, i+1)
//     }).reduce((a,b) => a+b) === number
//   })
// }
function sumDigPow(a,b){
    let ans = []
    for(let i = a; i<=b; i++) ans.push(i)
    
    return ans.filter(number => {
      let numArr = number.toString().split('')
       
      return numArr.map((element, idx) =>{
        return Math.pow(element, idx+1)
      }).reduce((a,b) => a + b) === number
    })
  }
  
  // function sumDigPow(a,b){
  //   let ans = []
  //   while(a <= b){
  //     if(a.toString().split('').reduce((x,y,i) => x+ +y ** (i + 1),0) === a){
  //       ans.push(a);
  //       a++
  //     }
  //   } return ans
  // }
  
  // function sumDigPow(a,b){
  //   let ans = []
  //   for(a; a <=b; a++){
  //     if(a.toString().split('').reduce((x,y,i) => x+ +y ** (i + 1),0) === a){
  //       ans.push(a);
  //     } return ans;
  //   }
  // }
    