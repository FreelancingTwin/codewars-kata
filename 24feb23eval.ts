if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
Example:

calculator(1,2,"+"); //=> result will be 3
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"

function calculator(a,b,sign){
  //sign is a string, convert it to a symbol(?)
//   const signs = ['+', '-', '*', '/']
//   if(
//     (typeof a === "number")
//     && (typeof b === "number")
//     && (signs.includes(sign))) {
// return sign === '+' ? a+b:
//        sign === '-' ? a-b:
//        sign === '*' ? a*b:
//        sign === '/' ? a/b
//   } else {
//     return 'unknown value'
//   }
  try{
    return eval(a+sign+b);
  } catch{
    return 'unknown value'
  }
}