Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
//   string is separated with - and _ 
//   replace - and _ with space
//   convert first word to uppercase and join string
return str.replace(/[-_]\w/gi, function (match) {
  return match.charAt(1).toUpperCase()
} )
}