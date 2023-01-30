// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

//     1 <= month <= 12

const quarterOf = (month : Number) => {
  // four qs in a month
  //figure out what q is month closest to, return that quarter
  let quarters = {
    1: [1,2,3],
      2:[4,5,6],
        3:[7,8,9],
          4:[10,11,12]
  }
  for( let el in quarters){
    if(quarters[el].includes(month)){
      return Number(el)
    }
  }
  
}