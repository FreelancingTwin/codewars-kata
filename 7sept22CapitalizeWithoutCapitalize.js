Capitalize First Letter of a String

Write a function capitalize() which capitalizes the first letter (if any) of the given string. For example:
Input 	Output
string 	String
hello World 	Hello World
i love codewars 	I love codewars
This sentence is already capitalized 	This sentence is already capitalized
0123the first character of this sentence is not a letter 	0123the first character of this sentence is not a letter

JavaScript / CoffeeScript: Extend the String prototype with a method capitalize() so you can call it on a string like so: "string".capitalize(). Learn about inheritance and the prototype chain.

Furthermore, the built-in string methods toUpperCase() and toLowerCase() are disabled for this Kata.



// String.prototype.capitalize = function()
// {
//   var searchArray = 'abcdefghijklmnopqrstuvwxyz';
//   var replaceArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
//   var array = this.split('');
//   var index = searchArray.indexOf(array[0]);
//   if (index > -1) array[0] = replaceArray[index];
  
//   return array.join('');
// }



String.prototype.capitalize(){
    const smalls = 'qwertyuiopasdfghjklzxcvbnm'
    const caps =   'QWRTYUIOPASDFGHJKLZXCVBNM'
    //this spits out an array with the vars above disected. Join later to get a string
    //SHOWS ERROR DOWN HERE!!!!?
    const arr = this.split('')
    //this gives first word
    const indx = smalls.indexOf(arr[0])
    //condtitonal time:
    //indx > - 1 essentially asks if there's a word present.
    if(indx > - 1){
  //     replaceArray[indx] scans both caps and smalls. Matches indices and replaces.
      arr[0] = replaceArray[indx]
    }
    arr.join('')
  }