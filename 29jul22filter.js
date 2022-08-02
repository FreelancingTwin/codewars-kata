Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    return s.split('').filter(x => x !== '!').join('');
  }

  //also, this blew my mind a little
  s.split('!').join('')