Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.


function disemvowel(str) {
//   multiple words, with spaces, has vowels, could be capital, isn't empty, 
//   return str - vowels
//   This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//   use the filter method, use regex. 
//   return str.split('').filter(el=> !el.match(/[A,E,I,O,U,a,e,i,o,u,,]/gi)).join('');
  return str.replace(/[aeiou]/gi, '')
}
// 'N ffns bt\nYr wrtng s mng th wrst \'v vr rd'
// 'N ffns bt,\nYr wrtng s mng th wrst \'v vr rd'