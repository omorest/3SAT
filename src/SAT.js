export class SAT {
  constructor(fileJSON) {
    const {U, C} = fileJSON
    this.parser(U, C)
    this.U = U
    this.C = C
  }
  
  parser(literals, clauses) {
    if (!this.checkLiterals(literals)) throw new Error('There are duplicate literals.')

    clauses.forEach(clause => {
      if (!this.checkClause(literals, clause)) throw new Error(`The clause ${clause} is not valid.`)
    })
  }

  checkLiterals(literals) {
    return new Set(literals).size === literals.length && literals.length !== 0
  }

  checkClause(literals, clause) {
    const clauseLiterals = Object.keys(clause)
    return !clauseLiterals.some(literal => !literals.includes(literal)) &&
      this.checkLiterals(clauseLiterals)
  }
}