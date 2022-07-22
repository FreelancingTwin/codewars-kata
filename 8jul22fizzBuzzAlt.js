Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)


function findSum(n) {
    //repeat 3, 6, 9,...upto n
    //repeat 5,10,15 ... upto n
    //ORRR use % to get the multiples and add them;
       let result = 0;
   for(let i=1; i<=n; i++){
     if(i % 3 === 0 || i % 5 === 0){
       result+= i;
     }
   } return result;
    }