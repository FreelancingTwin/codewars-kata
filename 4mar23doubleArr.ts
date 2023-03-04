Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9

For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]


multiplicationTable = function(size) {
  //size is a number
  //return the number of arrays
  //each line is +1 of prev line's first value
  //each line is a multiplication table of it's first value upto 'size' no. of elements
  let arr = []
  for(let i=0; i < size; i++){
    arr[i] = []
    for(let j = 0; j < size; j++) {
      arr[i][j] = (i + 1) * (j + 1);
    }
  }
  return arr
}
