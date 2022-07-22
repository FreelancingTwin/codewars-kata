Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5


// function sumDigits(number) {
//    let individual = number.toString().split('')
//     individual.forEach(()=>{
//   let sum = individual.sort((a,b)=>a+b)
//     return sum;
//   })
//   let result = 0;
//   let positive = Math.abs(number)
//    let arr = positive.toString().split('')
//    arr.forEach(num => {
//       result += parseInt(num);
//   }) return result
//    for(i in strArr){
//      let result = Number(strArr[0])+= Number(strArr[1])
//    } return result;
  
function sumDigits(number) {
  
    let result = 0;
   
    let arr = Math.abs(number).toString().split('');
    
    arr.forEach(num => {
        result += parseInt(num);
    })
    
    return result;
    
  }