Given two arrays of strings, return the number of times each string of the second array appears in the first array.
Example

array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
array2 = ['abc', 'cde', 'uap']

How many times do the elements in array2 appear in array1?

    'abc' appears twice in the first array (2)
    'cde' appears only once (1)
    'uap' does not appear in the first array (0)

Therefore, solve(array1, array2) = [2, 1, 0]

//a,b are arrays
//find out how many times b's els repeat in a
//send an array wiht no of repetetions
//['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']), [2, 1, 0]);
//use nested loops, a counter, push counter in arr, then reset immediately below so it refreshes count with new elements
unction solve(a,b){
  let arrResult = [];
  let cont = 0;
  for (let i = 0; i < b.length; i++){
    for (let j = 0; j < a.length; j++){
      if (b[i] === a [j]){
        cont++;
      }
    }
    arrResult.push(cont);
    cont = 0;
  }
  
  return arrResult;
}

const solve = (a,b) => b.map(x => a.filter(n => n === x).length);