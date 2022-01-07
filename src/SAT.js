export class SAT {
  constructor(fileJSON) {
    const {U: literals, C: clauses} = fileJSON
    this.parser(literals, clauses)
    this.literals = literals
    this.clauses = clauses
    this.k = this.literals.length
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