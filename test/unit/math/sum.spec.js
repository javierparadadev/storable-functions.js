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

  describe("should resolve simple operations with two elements", () => {
    it("Should resolve sum with double 0", () => {
      const operation = ['+', 0, 0]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve sum with 0 and 1", () => {
      const operation = ['+', 0, 1]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve sum with 0 and any number", () => {
      const operation = ['+', 0, 7]
      const result = resolve(operation)
      expect(result).to.be.equals(7)
    })

    it("Should resolve sum with double 1", () => {
      const operation = ['+', 1, 1]
      const result = resolve(operation)
      expect(result).to.be.equals(2)
    })

    it("Should resolve sum with 1 and any number", () => {
      const operation = ['+', 1, 7]
      const result = resolve(operation)
      expect(result).to.be.equals(8)
    })

    it("Should resolve sum with any element and another any element", () => {
      const operation = ['+', 7, 9]
      const result = resolve(operation)
      expect(result).to.be.equals(16)
    })
  })
})

