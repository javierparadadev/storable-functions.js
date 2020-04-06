const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.abs", () => {
  describe("Should resolve simple operations", () => {
    it("Should resolve abs with 0", () => {
      const operation = ['abs', 0]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve abs with 1", () => {
      const operation = ['abs', 1]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve abs with an element", () => {
      const operation = ['abs', 7]
      const result = resolve(operation)
      expect(result).to.be.equals(7)
    })

    it("Should resolve abs with a negative element", () => {
      const operation = ['abs', -7]
      const result = resolve(operation)
      expect(result).to.be.equals(7)
    })
  })
})

