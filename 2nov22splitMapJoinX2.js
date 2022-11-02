Given a string, return a new string that has transformed based on the input:

    Change case of every character, ie. lower case to upper case, upper case to lower case.
    Reverse the order of words from the input.

Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"

You may assume the input only contain English alphabet and spaces.


function stringTransformer(str) {
  //str has words, prolly just two
  //change capitalization and revrse them
  //'Example string'), 'STRING eXAMPLE');
  //use conditonals on a split string arr, then join then reverse
  return str
  .split('')
  .map(el => el == el.toUpperCase() ? el.toLowerCase(): el.toUpperCase())
  .join('')
  .split(' ')
  .reverse()
  .join(' ')
}