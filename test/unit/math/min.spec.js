const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.min", () => {
  describe("Should resolve simple operations", () => {
    it("Should resolve min with 1 element", () => {
      const operation = ['min', ['array', 0]]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve min with first element greater than second", () => {
      const operation = ['min', ['array', 1, 0]]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve min with second element greater than second", () => {
      const operation = ['min', ['array', 1, 2]]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve min at least one negative number", () => {
      const operation = ['min', ['array', 1, -1]]
      const result = resolve(operation)
      expect(result).to.be.equals(-1)
    })

    it("Should resolve min with more than one negative number", () => {
      const operation = ['min', ['array', -1, -2]]
      const result = resolve(operation)
      expect(result).to.be.equals(-2)
    })

    it("Should resolve min all numbers with same value ", () => {
      const operation = ['min', ['array', 1, 1]]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve min more than 2 numbers", () => {
      const operation = ['min', ['array', 1, -8, 2, -3]]
      const result = resolve(operation)
      expect(result).to.be.equals(-8)
    })
  })
})
