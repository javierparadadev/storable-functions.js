const { expect } = require('chai')
const { resolve } = require('../../../../index')

describe("unit.resolve.prop", () => {
  describe("Should get different types of props", () => {
    it("Should get numeric prop", () => {
      const operation = ['prop', 'age', ['arg', 'person']]
      const result = resolve(operation, {
        person: {
          age: 18
        }
      })
      expect(result).to.be.equals(18)
    })

    it("Should get string prop", () => {
      const operation = ['prop', 'name', ['arg', 'person']]
      const result = resolve(operation, {
        person: {
          name: 'midoriya'
        }
      })
      expect(result).to.be.equals('midoriya')
    })

    it("Should get boolean prop", () => {
      const operation = ['prop', 'isHero', ['arg', 'person']]
      const result = resolve(operation, {
        person: {
          isHero: true
        }
      })
      expect(result).to.be.equals(true)
    })

    it("Should get object prop", () => {
      const operation = ['prop', 'kosei', ['arg', 'person']]
      const result = resolve(operation, {
        person: {
          kosei: {
            name: 'one for all'
          }
        }
      })
      expect(result).to.be.deep.equals({ name: 'one for all' })
    })

    it("Should get array prop", () => {
      const operation = ['prop', 'senseis', ['arg', 'person']]
      const result = resolve(operation, {
        person: {
          senseis: ['all might', 'gran torino']
        }
      })
      expect(result).to.be.deep.equals(['all might', 'gran torino'])
    })
  })

  describe("Should get props with different lengths paths", () => {
    it("Should get direct prop", () => {
      const operation = ['prop', 'kosei', ['arg', 'person']]
      const result = resolve(operation, {
        person: {
          kosei: 'One for all'
        }
      })
      expect(result).to.be.equals('One for all')
    })

    it("Should get prop of nested object", () => {
      const operation = ['prop', 'kosei.name', ['arg', 'person']]
      const result = resolve(operation, {
        person: {
          kosei: {
            name: 'One for all'
          }
        }
      })
      expect(result).to.be.equals('One for all')
    })

    it("Should get prop of multiple nested object", () => {
      const operation = ['prop', 'kosei.names.english', ['arg', 'person']]
      const result = resolve(operation, {
        person: {
          kosei: {
            names: {
              english: 'One for all'
            }
          }
        }
      })
      expect(result).to.be.equals('One for all')
    })
  })
})
