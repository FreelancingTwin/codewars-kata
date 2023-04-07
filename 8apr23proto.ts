Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
 

Example 1:

Input: nums = [1,2,3]
Output: 3
Explanation: Calling nums.last() should return the last element: 3.
Example 2:

Input: nums = []
Output: -1
Explanation: Because there are no elements, return -1.
 

Constraints:

0 <= arr.length <= 1000
0 <= arr[i] <= 1000

Array.prototype.last = function() {
    return this.length == 0 ? -1 :
     this[this.length - 1]

     
     //ALT solution
     //return this.reverse()[0]
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

 //for Middle
 Array.prototype.middle = function(){
     //find if it has odd or even length
     //if odd, return middle
     //if even, return the middle two
     if(this.length % 2 === 0){
         return this[this.length/2]
     } else{
         return [this[Math.ceil(this.length/2)], this[Math.floor(this.length/2)]]
     }
 }