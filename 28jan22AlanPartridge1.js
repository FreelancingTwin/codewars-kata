To celebrate today's launch of my Hero's new book: Alan Partridge: Nomad, We have a new series of kata arranged around the great man himself.
Task

Given an array of terms, if any of those terms relate to Alan Partridge, return Mine's a Pint!

The number of exclamation mark (!) after the t should be determined by the number of Alan related terms you find in the given array (x). The related terms are as follows:

Partridge
PearTree
Chat
Dan
Toblerone
Lynn
AlphaPapa
Nomad

If you don't find any related terms, return Lynn, I've pierced my foot on a spike!!
Other katas in this series:

Alan Partridge II - Apple Turnover
Alan Partridge III - London


function part(x){
    let arr = [
      
  
  'Partridge',
  'PearTree',
  'Chat',
  'Dan',
  'Toblerone',
  'Lynn',
  'AlphaPapa',
  'Nomad'
  
    ]
     let count = x.filter(item => arr.includes(item)).length
    return (count > 0) ? 'Mine\'s a Pint!' + '!'.repeat(count-1) :
    'Lynn, I\'ve pierced my foot on a spike!!'
  }

  //to compare arrays
  arr1.filter(el => {
      arr2.includes(el)
  })

  arr1.filter(e => arr2.includes(e))