
Your job is to figure out the index of which vowel is missing from a given string:

    A has an index of 0,
    E has an index of 1,
    I has an index of 2,
    O has an index of 3,
    U has an index of 4.

Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.
Examples

"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

function absentVowel(x){
  //x is a string
  //caps no problem, count lower and upper same
  //find out what vowels are missing from the string
  //there's only one type of vowel missing, return int, not arr
  //if more than one, use array
  let vowels = 'aeiou'.split('')
  let resArr = x.match(/[aeiou]/gi)
  let targetVowel = vowels.filter(el=> !resArr.includes(el))
  return vowels.indexOf(targetVowel.toString())
  //ALT SOL:
  return vowels.findIndex(el=> !x.includes(el))
  //ALT SOL:
  for(let i of vowels){
    if( x.toLowerCase().indexOf(i) == -1){
      return vowels.indexOf(i)
    }
  }
  //FOR IN LOOP:
  for(let el in vowels){
      if(x.toLowerCase().indexOf(vowels[el]) == -1)
        return el
  }
}