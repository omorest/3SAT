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
    /*this.sat["C"].forEach(clause => {
      
    });*/
  }

  baseCase(clause) {
    /*for (let i = 1; i < 3 - clause.length; i++) {
      data3SAT["C"] = []
    }
    
    ["-", "+"]

    2 ^ (3 - k) => k = 1
    2 ^ (2 - k) =>  

    for (let i = 1; i < 4; i++) {
      data3SAT["C"] = []
    }*/
  }
}