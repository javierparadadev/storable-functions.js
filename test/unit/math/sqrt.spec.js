const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.sqrt", () => {
  describe("Should resolve simple operations", () => {
    it("Should resolve sqrt with 0", () => {
      const operation = ['sqrt', 0]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve sqrt with 1", () => {
      const operation = ['sqrt', 1]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve sqrt with an element", () => {
      const operation = ['sqrt', 16]
      const result = resolve(operation)
      expect(result).to.be.equals(4)
    })

    it("Should resolve decimal sqrt with an element", () => {
      const operation = ['sqrt', 2]
      const result = resolve(operation)
      expect(result).to.be.greaterThan(1)
      expect(Math.floor(result)).to.be.equals(1)
    })
  })
})

