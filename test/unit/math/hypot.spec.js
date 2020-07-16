const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.hypot", () => {
  describe("Should resolve simple operations", () => {
    it("Should resolve hypot with 0", () => {
      const operation = ['hypot', 0, 0]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve hypot with 0 and 1", () => {
      const operation = ['hypot', 0, 1]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve hypot with numbers greater than 0", () => {
      const operation = ['hypot', 5, 12]
      const result = resolve(operation)
      expect(result).to.be.equals(13)
    })

    it("Should resolve hypot with a negative number", () => {
      const operation = ['hypot', 5, -12]
      const result = resolve(operation)
      expect(result).to.be.equals(13)
    })

    it("Should resolve hypot with negative numbers", () => {
      const operation = ['hypot', -5, -12]
      const result = resolve(operation)
      expect(result).to.be.equals(13)
    })
  })
})

