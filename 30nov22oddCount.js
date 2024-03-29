Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

 

Example 1:

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].

Example 2:

Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].

 

Constraints:

    0 <= low <= high <= 10^9


/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    //low and high are non negative
    //return number of odd numbers between range low and high
    //use modulus, and a for loop
    let res = []
    for(let i = low; i<=high; i++){
        if(i % 2 === 1) res.push(i)
    } return res.length
};

//ALT SOLUTION, NEW AND IMPROVED

var countOdds = function(low, high) {
    if (low % 2 == 0)
        low++;
    
    if (high % 2 == 0)
        high--;
    
    return (high-low)/2 + 1;
};