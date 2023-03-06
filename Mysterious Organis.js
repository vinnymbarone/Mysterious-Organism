// Challenge Project: Mysterious Organism


// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  let pAequorFactory = (specimenNum, dna) => {
    return {
        specimenNum,
        dna,
        mutate() {
            const randIndex = Math.floor(Math.random() * this.dna.length);
            let newBase = returnRandBase();
            while (this.dna[randIndex] === newBase) {
                newBase = returnRandBase();
            }
            this.dna[randIndex] = newBase;
            return this.dna;
        }, 
        compareDNA(otherOrg) {
            const sharedDna = this.dna.reduce((prev, curr, i, arr) => {
                if(arr[i] === otherOrg.dna[i]) {
                  return prev + 1;
                } else {
                  return prev;
                }
            }, 0);
            let sharePercentage = ((sharedDna * 100)/this.dna.length).toFixed(2);
            console.log(`Specimin #${this.specimenNum} and specimen #${otherOrg.specimenNum} have ${sharePercentage} DNA in common.`)
        },
        willLikelySurvive() {
            const cOrG = this.dna.filter(el => el === "C" || el === "G");
            return cOrG.length / this.dna.length >= 0.6;
        },
     }
  };


 const survivingSpecimen = [];
  let counter = 1;
  
  while (survivingSpecimen.length < 30) {
    let newOrg = pAequorFactory(counter, mockUpStrand());
    if (newOrg.willLikelySurvive()) {
      survivingSpecimen.push(newOrg);
    }
    idCounter++;
  }
  
  console.log(survivingSpecimen)

console.log(surviveingSpecimens);
