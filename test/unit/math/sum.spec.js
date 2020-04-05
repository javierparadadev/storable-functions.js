const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.sum", () => {
  describe("should resolve simple operations with one element", () => {
    it("Should resolve sum with 0", () => {
      const operation = ['+', 0]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve sum with 1", () => {
      const operation = ['+', 1]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve sum with an element", () => {
      const operation = ['+', 7]
      const result = resolve(operation)
      expect(result).to.be.equals(7)
    })
  })
})

