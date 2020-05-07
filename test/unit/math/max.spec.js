const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.max", () => {
  describe("Should resolve simple operations", () => {
    it("Should resolve max with 1 element", () => {
      const operation = ['max', ['array', 0]]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve max with first element greater than second", () => {
      const operation = ['max', ['array', 1, 0]]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve max with second element greater than second", () => {
      const operation = ['max', ['array', 1, 2]]
      const result = resolve(operation)
      expect(result).to.be.equals(2)
    })

    it("Should resolve max at least one negative number", () => {
      const operation = ['max', ['array', 1, -1]]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve max with more than one negative number", () => {
      const operation = ['max', ['array', -1, -2]]
      const result = resolve(operation)
      expect(result).to.be.equals(-1)
    })

    it("Should resolve max all numbers with same value ", () => {
      const operation = ['max', ['array', 1, 1]]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve max more than 2 numbers", () => {
      const operation = ['max', ['array', 1, -8, 2, -3]]
      const result = resolve(operation)
      expect(result).to.be.equals(2)
    })
  })
})
