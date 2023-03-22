Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:

Input: numRows = 1
Output: [[1]]

 

Constraints:

    1 <= numRows <= 30

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = []
    for(let i = 0; i < numRows; i++){
        res.push(Array(i+1))
        for(let j = 0; j <= i; j++){
            if(j == 0 || j == i){
                res[i][j] = 1
            } else {
                res[i][j] = res[i - 1][j - 1] + res[i - 1 ][j]
            }
        }
    }
    return res
};