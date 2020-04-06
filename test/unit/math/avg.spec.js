const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.avg", () => {
  describe("Should resolve simple operations with one element", () => {
    it("Should resolve avg with 0", () => {
      const operation = ['avg', 0]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve avg with 1", () => {
      const operation = ['avg', 1]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve avg with an element", () => {
      const operation = ['avg', 7]
      const result = resolve(operation)
      expect(result).to.be.equals(7)
    })

    it("Should resolve avg with a negative element", () => {
      const operation = ['avg', -7]
      const result = resolve(operation)
      expect(result).to.be.equals(-7)
    })
  })

  describe("Should resolve simple operations with two elements", () => {
    it("Should resolve avg with double 0", () => {
      const operation = ['avg', 0, 0]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve avg with 0 and 1", () => {
      const operation = ['avg', 0, 1]
      const result = resolve(operation)
      expect(result).to.be.equals(1/2)
    })

    it("Should resolve avg with 0 and any number", () => {
      const operation = ['avg', 0, 7]
      const result = resolve(operation)
      expect(result).to.be.equals(7/2)
    })

    it("Should resolve avg with double 1", () => {
      const operation = ['avg', 1, 1]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve avg with 1 and any number", () => {
      const operation = ['avg', 1, 7]
      const result = resolve(operation)
      expect(result).to.be.equals(4)
    })

    it("Should resolve avg with any element and another any element", () => {
      const operation = ['avg', 7, 9]
      const result = resolve(operation)
      expect(result).to.be.equals(8)
    })

    it("Should resolve avg with a negative element and another any element", () => {
      const operation = ['avg', -7, 9]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })
  })

  describe("Should resolve simple operations with multiple elements", () => {
    it("Should resolve avg with all values as 0", () => {
      const operation = ['avg', 0, 0, 0]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve avg with some 0", () => {
      const operation = ['avg', 0, 1, 0]
      const result = resolve(operation)
      expect(result).to.be.equals(1/3)
    })

    it("Should resolve avg with at least one 0", () => {
      const operation = ['avg', 0, 3, 2]
      const result = resolve(operation)
      expect(result).to.be.equals(5/3)
    })

    it("Should resolve avg with all values as 1", () => {
      const operation = ['avg', 1, 1, 1]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve avg with two values as 1", () => {
      const operation = ['avg', 1, 7, 1]
      const result = resolve(operation)
      expect(result).to.be.equals(3)
    })

    it("Should resolve avg with at least one 1", () => {
      const operation = ['avg', 7, 1, 9]
      const result = resolve(operation)
      expect(result).to.be.equals(17/3)
    })

    it("Should resolve avg with all elements different", () => {
      const operation = ['avg', 1, 2, 3]
      const result = resolve(operation)
      expect(result).to.be.equals(2)
    })

    it("Should resolve avg with all elements with same value but greater than 1", () => {
      const operation = ['avg', 2, 2, 2]
      const result = resolve(operation)
      expect(result).to.be.equals(2)
    })

    it("Should resolve avg with some elements value but one of them negative", () => {
      const operation = ['avg', 2, -2, 2]
      const result = resolve(operation)
      expect(result).to.be.equals(2/3)
    })

    it("Should resolve avg with a positive element", () => {
      const operation = ['avg', 2, -2, -2]
      const result = resolve(operation)
      expect(result).to.be.equals(-2/3)
    })

    it("Should resolve avg with negative elements with same value but abs greater than 1", () => {
      const operation = ['avg', -2, -2, -2]
      const result = resolve(operation)
      expect(result).to.be.equals(-2)
    })
  })

  describe("Should keep to conmutative property", () => {
    it("Should be conmutative have at least one 0", () => {
      const res1 = resolve(['avg', 0, 3])
      const res2 = resolve(['avg', 3, 0])
      expect(res1).to.be.equals(res2)
    })

    it("Should be conmutative have at least one 1", () => {
      const res1 = resolve(['avg', 7, 1])
      const res2 = resolve(['avg', 1, 7])
      expect(res1).to.be.equals(res2)
    })

    it("Should be conmutative when have 0 and 1", () => {
      const res1 = resolve(['avg', 0, 1])
      const res2 = resolve(['avg', 1, 0])
      expect(res1).to.be.equals(res2)
    })

    it("Should be conmutative when have different elements greater than 1", () => {
      const res1 = resolve(['avg', 7, 9])
      const res2 = resolve(['avg', 9, 7])
      expect(res1).to.be.equals(res2)
    })

    it("Should be conmutative have at least one 0 and three elements", () => {
      const res1 = resolve(['avg', 0, 3, 4])
      const res2 = resolve(['avg', 4, 0, 3])
      expect(res1).to.be.equals(res2)
    })

    it("Should be conmutative have at least one 1 and three elements", () => {
      const res1 = resolve(['avg', 7, 1, 9])
      const res2 = resolve(['avg', 1, 9, 7])
      expect(res1).to.be.equals(res2)
    })

    it("Should be conmutative when have 0 and 1", () => {
      const res1 = resolve(['avg', 1, 0, 0])
      const res2 = resolve(['avg', 0, 1, 0])
      expect(res1).to.be.equals(res2)
    })

    it("Should be conmutative when have different elements greater than 1", () => {
      const res1 = resolve(['avg', 7, 9, 3])
      const res2 = resolve(['avg', 3, 9, 7])
      expect(res1).to.be.equals(res2)
    })
  })

  describe("Should resolve a single nested operations", () => {
    it("Should resolve nested operations without any other element", () => {
      const operation = ['avg', ['avg', 7, 7]]
      const result = resolve(operation)
      expect(result).to.be.equals(7)
    })

    it("Should resolve nested operation at head with more elements", () => {
      const operation = ['avg', ['avg', 5, 5], 1, 2]
      const result = resolve(operation)
      expect(result).to.be.equals(8/3)
    })

    it("Should resolve nested operation at middle with more elements", () => {
      const operation = ['avg', 1, ['avg', 5, 5], 2]
      const result = resolve(operation)
      expect(result).to.be.equals(8/3)
    })

    it("Should resolve nested operation at tail with more elements", () => {
      const operation = ['avg', 1, 2, ['avg', 5, 5]]
      const result = resolve(operation)
      expect(result).to.be.equals(8/3)
    })
  })

  describe("Should resolve double nested operations", () => {
    it("Should resolve nested operations without any other element", () => {
      const operation = ['avg', ['avg', 2, 4], ['avg', 5, 5]]
      const result = resolve(operation)
      expect(result).to.be.equals(4)
    })

    it("Should resolve consecutive nested operation from head with more elements", () => {
      const operation = ['avg', ['avg', 5, 5], ['avg', 4, 4], 2]
      const result = resolve(operation)
      expect(result).to.be.equals(11/3)
    })

    it("Should resolve consecutive nested operation from tail with more elements", () => {
      const operation = ['avg', 2, ['avg', 5, 5], ['avg', 7, 7]]
      const result = resolve(operation)
      expect(result).to.be.equals(14/3)
    })

    it("Should resolve nested operations with element between them", () => {
      const operation = ['avg', ['avg', 5, 5], 2, ['avg', 7, 7]]
      const result = resolve(operation)
      expect(result).to.be.equals(14/3)
    })

    it("Should resolve double nested operations", () => {
      const operation = ['avg', 1, ['avg', 2, ['avg', 4, 4]]]
      const result = resolve(operation)
      expect(result).to.be.equals(2)
    })
  })
})

