const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.equals", () => {
  describe("Should resolve simple operations with two elements", () => {
    it("Should resolve equals with double 0", () => {
      const operation = ['==', 0, 0]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve equals with 0 and 1", () => {
      const operation = ['==', 0, 1]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })
  })

  describe("Should keep to conmutative property", () => {
    it("Should be conmutative with different elements", () => {
      const res1 = resolve(['==', 0, 3])
      const res2 = resolve(['==', 3, 0])
      expect(res1).to.be.equals(res2)
    })

    it("Should be conmutative with same elements", () => {
      const res1 = resolve(['==', 7, 7])
      const res2 = resolve(['==', 7, 7])
      expect(res1).to.be.equals(res2)
    })
  })

  describe("Should resolve a single nested operations", () => {
    it("Should resolve nested operations", () => {
      const operation = ['==', ['+', 7, 7], 14]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve nested operations not equals", () => {
      const operation = ['==', ['+', 7, 7], 15]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })
  })
})

