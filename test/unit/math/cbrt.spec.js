const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.cbrt", () => {
  describe("Should resolve simple operations", () => {
    it("Should resolve cbrt with 0", () => {
      const operation = ['cbrt', 0]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve cbrt with 1", () => {
      const operation = ['cbrt', 1]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve cbrt with an element", () => {
      const operation = ['cbrt', 8]
      const result = resolve(operation)
      expect(result).to.be.equals(2)
    })

    it("Should resolve decimal cbrt with an element", () => {
      const operation = ['cbrt', 7]
      const result = resolve(operation)
      expect(result).to.be.greaterThan(1)
      expect(Math.floor(result)).to.be.equals(1)
    })
  })
})

