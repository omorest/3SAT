import {SAT} from './SAT.js'

export class Transformation {
  constructor(sat) {
    this.sat = Object.create(sat)
    this.data3SAT = {
      "U": [...this.sat.U],
      "C": []
    }
  }

  transform() {
    console.log(this.sat)
    this.sat.C.forEach(clause => {
      if (Object.keys(clause).length <= 3) {
        this.baseCase(clause)
      }
      else {
        this.otherCase(clause)
      }
    });
    return new SAT(this.data3SAT)
  }

  baseCase(clause) {
    const k = Object.keys(clause).length
    const numberOfYs = 3 - k
    for (let i = 0; i < Math.pow(2, numberOfYs); i++) {
      const binaryConversion = ("0" + (i >>> 0).toString(2)).slice(-numberOfYs)
      const newClause = JSON.parse(JSON.stringify(clause))
      for (let j = 0; j < numberOfYs; j++) {
        newClause[`Y${j+1}`] = (binaryConversion[j] === "0") ? "+" : "-"
        if (!this.data3SAT["U"].includes(`Y${j+1}`)) this.data3SAT["U"].push(`Y${j+1}`)
      }
      this.data3SAT["C"].push(newClause)
    }
  }

  otherCase(clause) {
    const k = Object.keys(clause).length
    const data = Object.entries(clause) // [[key, value], ....]
    const firstClause = Object.fromEntries(data.splice(0, 2));
    firstClause[`Y1`] = "+"
    const lastClause = Object.fromEntries(data.splice(data.length - 2, 2))
    lastClause[`Y${k - 3}`] = "-"
    
    this.data3SAT["C"].push(firstClause)
    for (let i = 1; i <= k - 4; i++) {
      if (!this.data3SAT["U"].includes(`Y${i}`)) this.data3SAT["U"].push(`Y${i}`)
      this.data3SAT["C"].push({
        [`Y${i}`]: "-",
        [data[i - 1][0]]: data[i - 1][1],
        [`Y${i + 1}`]: "+"
      })
    }
    if (!this.data3SAT["U"].includes(`Y${k - 3}`)) this.data3SAT["U"].push(`Y${k - 3}`)
    this.data3SAT["C"].push(lastClause)
  }
}