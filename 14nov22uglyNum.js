An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

Given an integer n, return true if n is an ugly number.

 

Example 1:

Input: n = 6
Output: true
Explanation: 6 = 2 × 3

Example 2:

Input: n = 1
Output: true
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

Example 3:

Input: n = 14
Output: false
Explanation: 14 is not ugly since it includes the prime factor 7.

 

Constraints:

    -231 <= n <= 231 - 1


var isUgly = function(n) {
    //n is an int, never empty
    //if n has prime factors 2,3,and 5, return true
    //if n has factors other than those, return false
    //6 => true
    //1 -> true
    //14 -> false cuz not 2*3 or 5*3
    //use simple % modulus operator
    if(!n) return false;
    while(n > 1){
    if(n % 2 == 0) n /= 2;
    else if(n % 3 == 0) n /= 3;
    else if(n % 5 == 0) n /= 5;
    else return false
    };
    return n == 1;
};