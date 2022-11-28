Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"

function removeConsecutiveDuplicates(str) {
  //str is a string with words that repeat consecutively aka right after
  //return a new string with those words deleted
  //use split, filter join
  return str
        .split(' ')
        .filter((word, idx, arr) => { word !== arr[idx+1]})
        .join(' ')
}