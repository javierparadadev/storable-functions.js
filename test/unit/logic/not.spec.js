const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.not", () => {
  describe("Should resolve simple operations with one element", () => {
    it("Should resolve logic not with false", () => {
      const operation = ['not', false]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve logic not with true", () => {
      const operation = ['not', true]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })
  })

  describe("Should resolve a single nested operations", () => {
    it("Should resolve nested operations without any other element", () => {
      const operation = ['not', ['or', false, true]]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve nested operations without any other element", () => {
      const operation = ['not', ['or', false, false]]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })
  })
})

