Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

//str is a string, may contain caps, never empty
//return bool if x and o repeat equal times
//XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
//use regex, and compare lengths
function XO(str) {
    let x = str.match(/xX/gi)
    let o = str.match(/oO/gi)
  return (x && x.length) === (o && o.length)
}