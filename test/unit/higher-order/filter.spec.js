const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.filter", () => {
  describe("Should resolve empty element input", () => {
    it("Should filter empty array", () => {
      const operation = ['filter', 'num', ['==', ['arg', 'num'], 0], ['array']]
      const result = resolve(operation)
      expect(result).to.be.deep.equals([])
    })
  })

  describe("Should resolve single element input", () => {
    it("Should filter single element input with any match", () => {
      const operation = ['filter', 'num', ['==', ['arg', 'num'], 0], ['array', 1]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals([])
    })

    it("Should filter single element input matching", () => {
      const operation = ['filter', 'num', ['==', ['arg', 'num'], 0], ['array', 0]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals([0])
    })
  })

  describe("Should resolve multiple element input", () => {
    it("Should filter single element input with any match", () => {
      const operation = ['filter', 'num', ['==', ['arg', 'num'], 0], ['array', 1, 2]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals([])
    })

    it("Should filter single element input with all elements matching", () => {
      const operation = ['filter', 'num', ['==', ['arg', 'num'], 0], ['array', 0, 0]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals([0, 0])
    })

    it("Should filter single element input with some elements matching", () => {
      const operation = ['filter', 'num', ['==', ['arg', 'num'], 0], ['array', 0, 1]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals([0])
    })
  })
})
