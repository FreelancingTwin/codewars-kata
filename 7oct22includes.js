Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item){
    //arr, can be empty
    //item, can be random and independent from arr
    // return true/false
    // use includes method, if it doesn't produce desired results, use a for loop to match itmes
  return arr.includes(item)
  //Works!! and is more readable!!
}