Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses
Examples

balancedParens(0) => [""]
balancedParens(1) => ["()"]
balancedParens(2) => ["()()","(())"]
balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"]


function balancedParens(n) {
    let all = [];
        let parens = function(left, right, str) {
            // if no more brackets can be added then add the final balanced string
            if (left === 0 && right === 0) {
                all.push(str);
            }
            // if we have a left bracket left we add it
            if (left > 0) {
                parens(left - 1, right + 1, str + "(");
            }
            // if we have a right bracket left we add it
            if (right > 0) {
                parens(left, right - 1, str + ")");
            }
        };
        parens(n, 0, "");
        return all;
}

// let all = []
// let parens = (left, right, str)=>{
//     if(left === 0 && right === 0) all.push(str)
//     else if( left > 0){
//         parens(left - 1, right + 1, str + '(' )
//     } else if( right > 0){
//         parens(left + 1, right - 1, str + ')' )
//     }
// }   parens(n, 0, '')
// return all

