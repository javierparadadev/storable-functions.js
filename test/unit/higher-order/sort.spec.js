const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.sort", () => {
  describe("Should resolve empty element input", () => {
    it("Should sort empty array", () => {
      const operation = ['sort', 'num1', 'num2', ['-', ['arg', 'num1'], ['arg', 'num2']], ['array']]
      const result = resolve(operation)
      expect(result).to.be.deep.equals([])
    })
  })

  describe("Should resolve single element input", () => {
    it("Should sort single element", () => {
      const operation = ['sort', 'num1', 'num2', ['-', ['arg', 'num1'], ['arg', 'num2']], ['array', 1]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals([1])
    })
  })

  describe("Should resolve double element input", () => {
    it("Should sort double elements sorted", () => {
      const operation = ['sort', 'num1', 'num2', ['-', ['arg', 'num1'], ['arg', 'num2']], ['array', 1, 2]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals([2, 1])
    })

    it("Should sort double elements input with all elements equals", () => {
      const operation = ['sort', 'num1', 'num2', ['-', ['arg', 'num1'], ['arg', 'num2']], ['array', 0, 0]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals([0, 0])
    })

    it("Should sort double elements input unsorted", () => {
      const operation = ['sort', 'num1', 'num2', ['-', ['arg', 'num1'], ['arg', 'num2']], ['array', 1, 0]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals([1, 0])
    })
  })

  describe("Should resolve multiple element input", () => {
    it("Should sort multiple elements sorted", () => {
      const operation = ['sort', 'num1', 'num2', ['-', ['arg', 'num1'], ['arg', 'num2']], ['array', 1, 2, 3]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals([3, 2, 1])
    })

    it("Should sort multiple elements input with all elements equals", () => {
      const operation = ['sort', 'num1', 'num2', ['-', ['arg', 'num1'], ['arg', 'num2']], ['array', 0, 0, 0]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals([0, 0, 0])
    })

    it("Should sort multiple elements input unsorted", () => {
      const operation = ['sort', 'num1', 'num2', ['-', ['arg', 'num1'], ['arg', 'num2']], ['array', 1, 0, 2]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals([2, 1, 0])
    })

    it("Should sort multiple elements input reversed", () => {
      const operation = ['sort', 'num1', 'num2', ['-', ['arg', 'num1'], ['arg', 'num2']], ['array', 3, 2, 1]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals([3, 2, 1])
    })
  })
})
