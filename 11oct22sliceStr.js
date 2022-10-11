Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.
Examples

("hello", "world", "l")       ==>  "held"
("coding", "anywhere", "n")   ==>  "codinywhere"
("jason", "samson", "s")      ==>  "jasamson"
("wonderful", "people", "e")  ==>  "wondeople"

function stringMerge(string1, string2, letter){
//   two strings, a lettr that divides them. Strings can be empty
  //("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"
  //split the words where the letter appears, join them
  let s1 = string1.slice(0, string1.indexOf(letter))
  let s2 = string2.slice(string2.indexOf(letter))
  return s1+s2
}