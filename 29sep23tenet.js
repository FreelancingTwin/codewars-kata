// Given an array of X strings in which each string consists of two lowercase English letters, join as many strings together as possible in order to obtain a palindrome.

// Input: arr0 = ["ck", "kc", "ho", "kc"]
// Output: 4

// function tenet(arr){
//     let counter = 0;
//     for(let i = 0; i < arr.length; i++){
//        for(let j = 0; j < arr.length; j++){
//            if((arr[i] + arr[j]) === ((arr[i]+arr[j]).split('').reverse().join(''))){ 
//                counter++;
//             }
//        }
//     }
//     return counter;
// }

// const arr1 = ["ab", "ba", "cd", "dc"];
// const arr2 = ["xy", "yx", "aa", "bb", "cc"];
// const arr3 = ["a", "b", "c", "d"];
// const arr4 = ["abc", "def", "cba", "fed"];

// const res = tenet(arr4)

// console.log(res)


// function isPalindrome(s: string): boolean {
//     let left = 0;
//     let right = s.length - 1;

//     while (left < right) {
//         if (s[left] !== s[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }

//     return true;
// }

// function maxPalindromeLength(arr: string[]): number {
//     let maxLength = 0;

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             const combined = arr[i] + arr[j];
//             if (isPalindrome(combined) && combined.length > maxLength) {
//                 maxLength = combined.length;
//             }
//         }
//     }

//     return maxLength;
// }

// const arr1 = ["ck", "kc", "ho", "kc"];
// const result = maxPalindromeLength(arr1);
// console.log(result); // Output: 4



function isPalindrome(s:string):boolean{
    let left = 0;
    let right = s.length -1;

    while(left < right){
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function maxPalindromeLength(s:string[]):number{
    let maxLength = 0;

    for(let i = 0; i < s.length; i++){
        for(let j = i+1; j < s.length; j++){
            let combined = s[i]+s[j];
            if(isPalindrome(combined) && combined.length > maxLength){
                maxLength = combined.length;
            }
        }
    }
    return maxLength;
}