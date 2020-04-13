const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.map", () => {
  describe("Should resolve empty element input", () => {
    it("Should resolve single number operation +1", () => {
      const operation = ['map', 'num', ['+', ['arg', 'num'], ['array', 1]], ['array']]
      const result = resolve(operation)
      expect(result).to.be.deep.equals([])
    })

    it("Should resolve single string operation concat", () => {
      const operation = ['map', 'str', ['concat', ['arg', 'str'], ' World'], ['array']]
      const result = resolve(operation)
      expect(result).to.be.deep.equals([])
    })
  })

  describe("Should resolve single element input", () => {
    it("Should resolve single number operation +1", () => {
      const operation = ['map', 'num', ['+', ['arg', 'num'], 1], ['array', 0]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals([1])
    })

    it("Should resolve single string operation concat", () => {
      const operation = ['map', 'str', ['concat', ['arg', 'str'], ' World'], ['array', 'Hello']]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(['Hello World'])
    })
  })

  describe("Should resolve multiple element input", () => {
    it("Should resolve single number operation +1", () => {
      const operation = ['map', 'num', ['+', ['arg', 'num'], 1], ['array', 0, 1, 2, 3]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals([1, 2, 3, 4])
    })

    it("Should resolve single string operation concat", () => {
      const operation = ['map', 'str', ['concat', ['arg', 'str'], ' World'], ['array', 'Hello', 'Bye']]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(['Hello World', 'Bye World'])
    })
  })
})
