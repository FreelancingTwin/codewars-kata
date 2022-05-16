invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

function invert(array) {
    return array !== [] ? array.map(x => x*(-1)) : []
 }