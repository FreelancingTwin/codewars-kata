// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34



function opposite(number) {
    let strHack = `-${number}`
    return parseInt(strHack)
    
  }

  //BUTTTT this is proper...
 function opposite(number) { 
     return number*(-1)
      }

  //And this is best! ---->   
      function opposite(number) { 
     return -number;
    }