Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

function orderedCount(text) {
    return [...new Set(text)] //this initiates a new set with text key, pending a value pair ig 
    .map(val => [val, text.split(val).length - 1]) //this returns a map with the val and loops how many times a val repeats in text var.

    //ig set was required because map was gonna iterate thorugn a key value pair and sets make those.
    
}