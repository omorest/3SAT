import {SAT} from './SAT.js'

export class Transformation {
  constructor(sat) {
    this.sat = Object.create(sat)
    this.data3SAT = {
      "U": [...this.sat.literals],
      "C": []
    }
    this.transformer()
  }

  transformer() {
    console.log(this.sat)
    this.sat.clauses.forEach(clause => {
      if (Object.keys(clause).length <= 3) this.baseCase(clause)
    });
    console.log(this.data3SAT)
  }

  baseCase(clause) {
    const k = Object.keys(clause).length
    const extraLiterals = 3-k
    for (let i = 0; i < Math.pow(2, extraLiterals); i++) {
      const binaryConversion = ("0" + (i >>> 0).toString(2)).slice(-extraLiterals)
      const newClause = JSON.parse(JSON.stringify(clause))
      for (let j = 0; j < extraLiterals; j++) {
        newClause[`Y${j+1}`] = (binaryConversion[j] === "0") ? "+" : "-"
        if (!this.data3SAT["U"].includes(`Y${j+1}`)) this.data3SAT["U"].push(`Y${j+1}`)
      }
      this.data3SAT["C"].push(newClause)
    }
  }

  // otherCase(clause) {
  //   // casos k > 3
  //   // Variable boobleanas k - 3 
  //   let booleanVariable = []
  //   for (let i = 1; i <= clause.length - 3; i++) {
  //     booleanVariable.push(`Y${i}`)
  //   }
  //   const map1 = booleanVariable.map(x => console.log("boolean variable: " + x))
  // }
}