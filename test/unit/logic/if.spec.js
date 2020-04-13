const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.if", () => {
  describe("Should resolve simple operation at if that its true", () => {
    it("Should resolve if single operation", () => {
      const operation = ['if', ['==', 1, 1], true]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve if with else", () => {
      const operation = ['if', ['==', 1, 1], true, 'else', false]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve if with else and nested operation", () => {
      const operation = ['if', ['==', 1, 1], ['+', 1, 1], 'else', false]
      const result = resolve(operation)
      expect(result).to.be.equals(2)
    })

    it("Should resolve if with else-if", () => {
      const operation = ['if', ['==', 1, 1], true, 'elseif', false]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve if with else-if and nested operation", () => {
      const operation = ['if', ['==', 1, 1], ['+', 1, 1], 'elseif', false]
      const result = resolve(operation)
      expect(result).to.be.equals(2)
    })

    it("Should resolve if with else-if and else", () => {
      const operation = ['if', ['==', 1, 1], true, 'elseif', false, 'else', false]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve if with else-if and else and nested operation", () => {
      const operation = ['if', ['==', 1, 1], ['+', 1, 1], 'elseif', false, 'else', false]
      const result = resolve(operation)
      expect(result).to.be.equals(2)
    })
  })

  describe("Should resolve simple operation at if that its false", () => {
    it("Should resolve if with else", () => {
      const operation = ['if', ['==', 1, 2], false, 'else', true]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve if with else and nested operation and nested operation", () => {
      const operation = ['if', ['==', 1, 2], false, 'else', ['+', 1, 1]]
      const result = resolve(operation)
      expect(result).to.be.equals(2)
    })

    it("Should resolve if with else-if", () => {
      const operation = ['if', ['==', 1, 2], false, 'elseif', ['==', 1, 1], true]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve if with else-if and nested operation", () => {
      const operation = ['if', ['==', 1, 2], false, 'elseif', ['==', 1, 1], ['+', 1, 1]]
      const result = resolve(operation)
      expect(result).to.be.equals(2)
    })

    it("Should resolve if with else-if and else", () => {
      const operation = ['if', ['==', 1, 2], false, 'elseif', ['raw', false], false, 'else', true]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve if with else-if and else and nested operation", () => {
      const operation = ['if', ['==', 1, 2], 1, 'elseif', ['raw', false], 1, 'else', ['+', 1, 1]]
      const result = resolve(operation)
      expect(result).to.be.equals(2)
    })
  })
})
