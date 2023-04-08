/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  //strs is an arr
  //arr might contain words that start similiarly
  //return those
  //loop through, maybe a hashmap

  // for(let i = 0; i < strs.length; i++){
  //    for(let j = 1; j < strs.length; j++){
  //        if(strs[0][i] !== strs[j][i]){
  //            return strs[0].slice(0, i)
  //        }
  //    }

  // }
  //         return strs[0]

  for (let i = 0; i < strs.length; i++) {
    if (!strs.every(word => word[i] === strs[0][i])) {
      strs[0].slice(0, i);
    }
  }
  return strs[0];
};
