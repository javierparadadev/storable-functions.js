const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.mod", () => {
  describe("Should resolve simple operations with two elements", () => {
    it("Should resolve mod with 0 and 1", () => {
      const operation = ['mod', 0, 1]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve mod with 0 and any number", () => {
      const operation = ['mod', 0, 7]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve mod with double 1", () => {
      const operation = ['mod', 1, 1]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve mod with 1 and any number", () => {
      const operation = ['mod', 1, 7]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve mod with any element and another any element less than first", () => {
      const operation = ['mod', 7, 9]
      const result = resolve(operation)
      expect(result).to.be.equals(7)
    })

    it("Should resolve mod with any element and another any element equals to first", () => {
      const operation = ['mod', 9, 9]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve mod with any element and another any element greater than first", () => {
      const operation = ['mod', 9, 7]
      const result = resolve(operation)
      expect(result).to.be.equals(2)
    })

    it("Should resolve mod with a negative element and another any element", () => {
      const operation = ['mod', -7, 9]
      const result = resolve(operation)
      expect(result).to.be.equals(-7)
    })

    it("Should resolve mod with a negative element and another any element with abs greater than first", () => {
      const operation = ['mod', -9, 7]
      const result = resolve(operation)
      expect(result).to.be.equals(-2)
    })
  })

  describe("Should resolve a single nested operations", () => {
    it("Should resolve nested operations without any other element", () => {
      const operation = ['mod', ['mod', 7, 7], 2]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve nested operation at head with more elements", () => {
      const operation = ['mod', ['mod', 5, 5], 1]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve nested operation at middle with more elements", () => {
      const operation = ['mod', ['mod', 5, 7], 2]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve nested operation at tail with more elements", () => {
      const operation = ['mod', 2, ['mod', 3, 2]]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })
  })
})

