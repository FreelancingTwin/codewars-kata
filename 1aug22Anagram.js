An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.


// write the function isAnagram
var isAnagram = function(test, original) {
    return test.toLowerCase().split('').sort().join('') ===
      original.toLowerCase().split('').sort().join('')
  };