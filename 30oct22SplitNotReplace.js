Here you have a connected to a socket, and the data looks very strange. It seems to be separated by a random special character! Oh No! We need your help to find the special character, parse the data, and return it translated! There isn't much time, hurry we need your help!

function wordSplitter(string){
  //string, made of mixed symbols
  //return an arr without symbols
  //("11:11:11:11:11"), ["11","11","11","11","11"]);
//   use regex in split or match, either works
  return string.split(/['+\|:*#&=!;%>\?\/\\]/g)
}

const wordSplitter = str => str.match(/[\w.-]+/g)