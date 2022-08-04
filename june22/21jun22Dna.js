// function DNAStrand(dna){
//     function DNAStrand(dna){
//       const newDna = []
      
//       for (var i = 0; i < dna.length; i++) {
//         if (dna[i] == 'A') {
//           newDna[i] = 'T'
//         } else if (dna[i] == 'T') {
//           newDna[i] = 'A'
//         } else if (dna[i] == 'G') {
//           newDna[i] = 'C'
//         } else if (dna[i] == 'C') {
//           newDna[i] = 'G'
//         }
//       }
    
//       return newDna.join('')
//   }
// };

function DNAStrand(dna) {
    let newDna = []

    for (let i = 0; i < dna.length; i++){
        if (dna[i] == "A") {
            newDna[i] == 'T'
        }else if (dna[i] == "T") {
            newDna[i] == 'A'
        } else if (dna[i] == 'C') {
            newDna[i] ==='G'
        } else if (dna[i] === "G") {
            newDna[i]==='C'
    }
    }
    return newDna.join('')
}
