// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
  let dx = 0;
  let dy = 0;
  let dt = walk.length;

  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        dx++;
        break;
      case "s":
        dx--;
        break;
      case "e":
        dy++;
        break;
      case "w":
        dy--;
        break;
    }
  }
  return dt === 10 && dx == 0 && dy == 0;
}

function altSol(walk) {
  let n = walk.filter(e => e === "n").length;
  let s = walk.filter(e => e === "s").length;
  let e = walk.filter(e => e === "e").length;
  let w = walk.filter(e => e === "w").length;

  return walk.length == 10 && n == s && e == w;
}
