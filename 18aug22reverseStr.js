Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"


  function nameShuffler(str){
    return str.split(' ')[1] + " " + str.split(' ')[0]
   return str.split(' ').reverse().join(' ')
 }