Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0

Example 2:

Input: s = "loveleetcode"
Output: 2

Example 3:

Input: s = "aabb"
Output: -1

 

Constraints:

    1 <= s.length <= 105
    s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    //s is a string with repeating characters
    //return no. of characters that don't repeat 
    //how'd you check for repeating chars?
    //loop through the string, see if charAt index matches future indices
//    for(var i = 0; i < s.length; i++){
//         if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
//     }
//     return -1;
    const arr = s.split('')
    for(let el in arr){
        if(arr.indexOf(arr[el]) === arr.lastIndexOf(arr[el])) return el
    }
    return -1
}
    