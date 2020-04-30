const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.foldl", () => {
  describe("Should resolve empty element input", () => {
    it("Should resolve with 0 as initial value", () => {
      const operation = ['foldl', 'current', 'acc', 0, ['+', ['arg', 'current'], ['arg', 'acc']], ['array']]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(0)
    })

    it("Should resolve with 1 as initial value", () => {
      const operation = ['foldl', 'current', 'acc', 1, ['+', ['arg', 'current'], ['arg', 'acc']], ['array']]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(1)
    })

    it("Should resolve with any initial value", () => {
      const operation = ['foldl', 'current', 'acc', 7, ['+', ['arg', 'current'], ['arg', 'acc']], ['array']]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(7)
    })
  })

  describe("Should resolve with single element input", () => {
    it("Should resolve with 0 as initial value", () => {
      const operation = ['foldl', 'current', 'acc', 0, ['+', ['arg', 'current'], ['arg', 'acc']], ['array', 7]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(7)
    })

    it("Should resolve with 1 as initial value", () => {
      const operation = ['foldl', 'current', 'acc', 1, ['+', ['arg', 'current'], ['arg', 'acc']], ['array', 7]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(8)
    })

    it("Should resolve with any initial value", () => {
      const operation = ['foldl', 'current', 'acc', 7, ['+', ['arg', 'current'], ['arg', 'acc']], ['array', 7]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(14)
    })
  })

  describe("Should resolve with multiple elements input", () => {
    it("Should resolve with 0 as initial value", () => {
      const operation = ['foldl', 'current', 'acc', 0, ['+', ['arg', 'current'], ['arg', 'acc']], ['array', 7, 1]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(8)
    })

    it("Should resolve with 1 as initial value", () => {
      const operation = ['foldl', 'current', 'acc', 1, ['+', ['arg', 'current'], ['arg', 'acc']], ['array', 7, 1]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(9)
    })

    it("Should resolve with any initial value", () => {
      const operation = ['foldl', 'current', 'acc', 7, ['+', ['arg', 'current'], ['arg', 'acc']], ['array', 7, 1]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(15)
    })
  })
})
