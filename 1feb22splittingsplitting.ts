In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

    dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

    dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

If you like this Kata, please try:

Alternate capitalization

Vowel consonant lexicon

function dup(s) {
  //s is an array of strings
  //filter those strings to have no repeating characters
  return s.map(word => {
      return [...word].filter((el, idx, arr)=> el!==arr[idx+1]).join('')
  })
  
};