
// In a given string, find the vowels and remove them and then reverse the order of words by keeping the word intact.

// Example
// input - Hi Muhammed Tauqeer, how are you?
// output - y? r hw tqr, mhmmd h
const revStr = string => {
  let vowels = "aeiou".split("");
 
 const filteredString = string
    .toLowerCase()
    .split("")
    .filter(word => !vowels.includes(word))
    .join("");

    return filteredString.split(" ").reverse().join(" ");
};
const Greeting = "Hi Muhammed Tauqeer, how are you?"
console.log(revStr(Greeting))

