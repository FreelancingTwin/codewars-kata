// const brackets = (string) => {
//     let counter = 0;

//     for(let char of string){
//         if(char == "{" || char == "[" || char == "("){
//             counter++
//         } else if(char == "}" || char == "]" || char == ")"){
//             counter--
//         }
//         if(counter < 0) return false;

//     }
//     return counter === 0;
// }

// console.log(brackets("{[()}"))

// const brackets2 = (string) => {

// }
const one = [1, 1, 1, 1, 2, 2, 2, 3, 3];

var majorityElement = function(nums) {
  const HashMap = {};
  for (let i of nums) {
    if (HashMap.hasOwnProperty(i)) {
      HashMap[i]++;
    } else {
      HashMap[i] = 1;
    }
  }
  // const maxValue = Math.max(Object.values(HashMap))
  const maxVal = Object.keys(HashMap).reduce((a, b) => {
    return HashMap[a] > HashMap[b] ? a : b;
  });
  return maxVal;
};

console.log(majorityElement(one));
