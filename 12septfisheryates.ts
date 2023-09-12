function fisherYatesShuffle(arr:number[]):number[] {
    let n = arr.length;
    for (let i = n - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate a random index j such that 0 <= j <= i
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements at indices i and j
    }
    return arr;
}

function fisheryates(arr:number[]):number[]{
    for(let i = arr.length-1;  i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
        
    }

    return arr;
}

function fishy(arr:number[]):number[]{
    for(let i = arr.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * i+1);
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr;
}

// console.log(fisheryates([1,2,3]));
// console.log(fisheryates([1,2,3]));
// console.log(fisheryates([1,2,3]));
console.log(fishy([4,5,6]))