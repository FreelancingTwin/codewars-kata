If you can't sleep, just count sheep!!
Task:

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


var countSheep = function (num){
    let str = '';
    let i = 1;
    while(i <= num){
      str+= `${i} sheep...`
      //don't forget to add increment to i otherwise it'll lead to an infinite loop
      i++;
    } return str
    }