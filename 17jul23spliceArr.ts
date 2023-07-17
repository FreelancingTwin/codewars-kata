// function transformArray(arr, split) {
//     const resultArray = [];
//     const length = arr.length;
  
//     for (let i = split; i <= length; i += split) {
//       resultArray.push(arr.slice(i - split, i));
//     }
  
//     return resultArray;
//   }
  const transformArray = (arr: number[], split: number):number[][] =>{
    const resultArray: number[][] = [];
    for(let i:number = split; i <= arr.length; i+=split){
        resultArray.push(arr.slice(i - split, i))
    }
    return resultArray;
  }
