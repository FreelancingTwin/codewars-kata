You are given a string of n lines, each substring being n characters long. For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study the "horizontal" and the "vertical" scaling of this square of strings.

A k-horizontal scaling of a string consists of replicating k times each character of the string (except '\n').

    Example: 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"

A v-vertical scaling of a string consists of replicating v times each part of the squared string.

    Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"

Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.

Example: a = "abcd\nefgh\nijkl\nmnop"
scale(a, 2, 3) --> "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"

Printed:

abcd   ----->   aabbccdd
efgh            aabbccdd
ijkl            aabbccdd
mnop            eeffgghh
                eeffgghh
                eeffgghh
                iijjkkll
                iijjkkll
                iijjkkll
                mmnnoopp
                mmnnoopp
                mmnnoopp

Task:

    Write function scale(strng, k, v) k and v will be positive integers. If strng == "" return "".

function scale(s,k,n){ //init function with three paramaters
    return s.length == 0 ? '': //if empty string, return empty string
    s.split('\n') //here, given is a array that's being split by \n, meaning its a line break
    .map(el => Array(n) //now we're mapping that split array and generating a new array with array(n)
    .fill( [...el].map(e => e.repeat(k)).join('')).join('\n')) //now to fill the generated array with elements we use fill. The ...el counts all elements, then we map each el to repeat k times, then join these to group. This is still an array. Then place a line breaker \n in the end
    .join('\n') //finally, we have an array. We join it to form a string ig. Not sure what's the last join method's used for.
}

s.split('\n').map(el => Array(n)
                 .fill( [...el].map(e => e.repeat(k)).join(''))
                  .join('\n'))
                  .join('\n')