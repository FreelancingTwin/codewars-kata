Santa is coming to town and he needs your help finding out who's been naughty or nice. You will be given an entire year of JSON data following this format:

{
    January: {
        '1': 'Naughty','2': 'Naughty', ..., '31': 'Nice'
    },
    February: {
        '1': 'Nice','2': 'Naughty', ..., '28': 'Nice'
    },
    ...
    December: {
        '1': 'Nice','2': 'Nice', ..., '31': 'Naughty'
    }
}

Your function should return "Naughty!" or "Nice!" depending on the total number of occurrences in a given year (whichever one is greater). If both are equal, return "Nice!"


function naughtyOrNice(data) {
    //data is JSON, so basically an array
    //return Naughty or nice based on the count of the naughty or nice in the array
    //two for loops, a count to increment or decrement
let naughtyMeter = 0
  
  for (const month in data) {
    for (const day in data[month]) {
      naughtyMeter += data[month][day] === "Nice" ? 1 : -1
    }
  }

  return naughtyMeter < 0 ? "Naughty!" : "Nice!"
}


//Alt solution
//JSON.stringify just turns all the characters inside the object into strings
//usually object is key:value where key is just a variable declaration not a stirng
//to extract a specific string from a stringified object, use split. 
function naughtyOrNice(data) {
  const str = JSON.stringify(data);
  return str.split("Nice").length < str.split("Naughty").length
    ? "Naughty!"
    : "Nice!";
}

str = JSON.stringify(data)
str.split('Nice').length >= str.split('Naughty').length ? 'Nice!' : 'Naughty!'