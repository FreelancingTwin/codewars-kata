A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

 

Constraints:

    1 <= s.length <= 2 * 105
    s consists only of printable ASCII characters.
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //s is a string with spaces and caps
    //convert it to lowercase and remove spaces.
    //reverse it and assign a new variable to it
    //compare those & return a boolean value

    //s has special chars, filter those out too!
    if(s.lenght == 0){
        return s
    };
    const regexp = /^[a-zA-Z\d]*$/g
    const filteredString = s.toLowerCase()
                            .split('')  
                            .filter(el=> el.match(regexp))
                            .join('')
    const revString = filteredString.split('').reverse().join('')
    return filteredString === revString
};
