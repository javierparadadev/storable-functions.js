const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.sum", () => {
  describe("Should resolve simple operations with one element", () => {
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

    it("Should resolve sum with a negative element", () => {
      const operation = ['+', -7]
      const result = resolve(operation)
      expect(result).to.be.equals(-7)
    })
  })

  describe("Should resolve simple operations with two elements", () => {
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

    it("Should resolve sum with a negative element and another any element", () => {
      const operation = ['+', -7, 9]
      const result = resolve(operation)
      expect(result).to.be.equals(2)
    })
  })

  describe("Should resolve simple operations with multiple elements", () => {
    it("Should resolve sum with all values as 0", () => {
      const operation = ['+', 0, 0, 0]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve sum with some 0", () => {
      const operation = ['+', 0, 1, 0]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve sum with at least one 0", () => {
      const operation = ['+', 0, 3, 2]
      const result = resolve(operation)
      expect(result).to.be.equals(5)
    })

    it("Should resolve sum with all values as 1", () => {
      const operation = ['+', 1, 1, 1]
      const result = resolve(operation)
      expect(result).to.be.equals(3)
    })

    it("Should resolve sum with two values as 1", () => {
      const operation = ['+', 1, 7, 1]
      const result = resolve(operation)
      expect(result).to.be.equals(9)
    })

    it("Should resolve sum with at least one 1", () => {
      const operation = ['+', 7, 1, 9]
      const result = resolve(operation)
      expect(result).to.be.equals(17)
    })

    it("Should resolve sum with all elements different", () => {
      const operation = ['+', 1, 2, 3]
      const result = resolve(operation)
      expect(result).to.be.equals(6)
    })

    it("Should resolve sum with all elements with same value but greater than 1", () => {
      const operation = ['+', 2, 2, 2]
      const result = resolve(operation)
      expect(result).to.be.equals(6)
    })

    it("Should resolve sum with some elements value but one of them negative", () => {
      const operation = ['+', 2, -2, 2]
      const result = resolve(operation)
      expect(result).to.be.equals(2)
    })

    it("Should resolve sum with a positive element", () => {
      const operation = ['+', 2, -2, -2]
      const result = resolve(operation)
      expect(result).to.be.equals(-2)
    })

    it("Should resolve sum with negative elements with same value but abs greater than 1", () => {
      const operation = ['+', -2, -2, -2]
      const result = resolve(operation)
      expect(result).to.be.equals(-6)
    })
  })

  describe("Should keep to conmutative property", () => {
    it("Should be conmutative have at least one 0", () => {
      const res1 = resolve(['+', 0, 3])
      const res2 = resolve(['+', 3, 0])
      expect(res1).to.be.equals(res2)
    })

    it("Should be conmutative have at least one 1", () => {
      const res1 = resolve(['+', 7, 1])
      const res2 = resolve(['+', 1, 7])
      expect(res1).to.be.equals(res2)
    })

    it("Should be conmutative when have 0 and 1", () => {
      const res1 = resolve(['+', 0, 1])
      const res2 = resolve(['+', 1, 0])
      expect(res1).to.be.equals(res2)
    })

    it("Should be conmutative when have different elements greater than 1", () => {
      const res1 = resolve(['+', 7, 9])
      const res2 = resolve(['+', 9, 7])
      expect(res1).to.be.equals(res2)
    })

    it("Should be conmutative have at least one 0 and three elements", () => {
      const res1 = resolve(['+', 0, 3, 4])
      const res2 = resolve(['+', 4, 0, 3])
      expect(res1).to.be.equals(res2)
    })

    it("Should be conmutative have at least one 1 and three elements", () => {
      const res1 = resolve(['+', 7, 1, 9])
      const res2 = resolve(['+', 1, 9, 7])
      expect(res1).to.be.equals(res2)
    })

    it("Should be conmutative when have 0 and 1", () => {
      const res1 = resolve(['+', 1, 0, 0])
      const res2 = resolve(['+', 0, 1, 0])
      expect(res1).to.be.equals(res2)
    })

    it("Should be conmutative when have different elements greater than 1", () => {
      const res1 = resolve(['+', 7, 9, 3])
      const res2 = resolve(['+', 3, 9, 7])
      expect(res1).to.be.equals(res2)
    })
  })

  describe("Should resolve a single nested operations", () => {
    it("Should resolve nested operations without any other element", () => {
      const operation = ['+', ['+', 7, 7]]
      const result = resolve(operation)
      expect(result).to.be.equals(14)
    })

    it("Should resolve nested operation at head with more elements", () => {
      const operation = ['+', ['+', 5, 5], 1, 2]
      const result = resolve(operation)
      expect(result).to.be.equals(13)
    })

    it("Should resolve nested operation at middle with more elements", () => {
      const operation = ['+', 1, ['+', 5, 5], 2]
      const result = resolve(operation)
      expect(result).to.be.equals(13)
    })

    it("Should resolve nested operation at tail with more elements", () => {
      const operation = ['+', 1, 2, ['+', 5, 5]]
      const result = resolve(operation)
      expect(result).to.be.equals(13)
    })
  })

  describe("Should resolve double nested operations", () => {
    it("Should resolve nested operations without any other element", () => {
      const operation = ['+', ['+', 7, 7], ['+', 5, 5]]
      const result = resolve(operation)
      expect(result).to.be.equals(24)
    })

    it("Should resolve consecutive nested operation from head with more elements", () => {
      const operation = ['+', ['+', 5, 5], ['+', 7, 7], 2]
      const result = resolve(operation)
      expect(result).to.be.equals(26)
    })

    it("Should resolve consecutive nested operation from tail with more elements", () => {
      const operation = ['+', 2, ['+', 5, 5], ['+', 7, 7]]
      const result = resolve(operation)
      expect(result).to.be.equals(26)
    })

    it("Should resolve nested operations with element between them", () => {
      const operation = ['+', ['+', 5, 5], 2, ['+', 7, 7]]
      const result = resolve(operation)
      expect(result).to.be.equals(26)
    })

    it("Should resolve double nested operations", () => {
      const operation = ['+', 1, ['+', 2, ['+', 3, 4]]]
      const result = resolve(operation)
      expect(result).to.be.equals(10)
    })
  })
})

