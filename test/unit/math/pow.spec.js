const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.pow", () => {
  describe("Should resolve simple operations", () => {
    it("Should resolve pow with exponent and base equal to 0", () => {
      const operation = ['^', 0, 0]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve pow with base equal to 0", () => {
      const operation = ['^', 0, 1]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve pow with base and exponent different to 0", () => {
      const operation = ['^', 1, 1]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve pow with a negative exponent and positive base", () => {
      const operation = ['^', 1, -1]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve pow with a negative base and an odd negative exponent ", () => {
      const operation = ['^', -1, -1]
      const result = resolve(operation)
      expect(result).to.be.equals(-1)
    })

    it("Should resolve pow with a negative base and an even negative exponent ", () => {
      const operation = ['^', -1, -2]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })
  })
})

