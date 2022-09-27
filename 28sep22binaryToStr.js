Password Check - Binary to String

A wealthy client has forgotten the password to his business website, but he has a list of possible passwords. His previous developer has left a file on the server with the name password.txt. You open the file and realize it's in binary format.

Write a script that takes an array of possible passwords and a string of binary representing the possible password. Convert the binary to a string and compare to the password array. If the password is found, return the password string, else return false;

decodePass(['password123', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011');    => 'password123'
decodePass(['password321', 'admin', 'admin1'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011');    => false
decodePass(['password456', 'pass1', 'test12'], '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011');    => false



function decodePass( passArr, bin ){
  //password is array, has three params.
  // bin is a set of numbers, convert it to string, and then match with passArr
  //return true or false if match
  //['password123', 'admin', 'admin1'] returns true
//   ['password321', 'admin', 'admin1'] returns false
  //use a for loop, use charCodeAt, parseInt(el, 2) and to compare, use includes method
  
  let pass = bin.split(' ').map(el => String.fromCharCode(parseInt(el, 2))).join('')
  return passArr.includes(pass) ? pass : false
  
}