Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples

The output expected would be:

apples, pears
grapes
bananas

The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"


function solution(input, markers) {
//   return input.replace(`/[${+markers.join('')}]/gi`, '')
  //`RegExp(..)` has some reasonable utility: to dynamically define the pattern for a regular expression.
  //https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch3.md#object-function-and-regexp
  var pattern = new RegExp("[" +markers.join("")+ "]");

  return input.split("\n").map(function(a){
  	return a.split(pattern)[0].trim();
  }).join("\n");
  
}