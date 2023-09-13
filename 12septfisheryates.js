function fisherYatesShuffle(arr) {
    var _a;
    var n = arr.length;
    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)); // Generate a random index j such that 0 <= j <= i
        _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1]; // Swap elements at indices i and j
    }
    return arr;
}
function fisheryates(arr) {
    var _a;
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
    }
    return arr;
}
console.log(fisheryates([1, 2, 3]));
console.log(fisheryates([1, 2, 3]));
console.log(fisheryates([1, 2, 3]));
