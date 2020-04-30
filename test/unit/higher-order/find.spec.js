const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.find", () => {
  describe("Should resolve empty element input", () => {
    it("Should find empty array", () => {
      const operation = ['find', 'num', ['==', ['arg', 'num'], 0], ['array']]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(undefined)
    })
  })

  describe("Should resolve single element input", () => {
    it("Should find in single element input with any match", () => {
      const operation = ['find', 'num', ['==', ['arg', 'num'], 0], ['array', 1]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(undefined)
    })

    it("Should find in single element input matching", () => {
      const operation = ['find', 'num', ['==', ['arg', 'num'], 0], ['array', 0]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(0)
    })
  })

  describe("Should resolve double element input", () => {
    it("Should find in double element input with any match", () => {
      const operation = ['find', 'num', ['==', ['arg', 'num'], 0], ['array', 1, 2]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(undefined)
    })

    it("Should find double element input with all elements matching", () => {
      const operation = ['find', 'num', ['==', ['arg', 'num'], 0], ['array', 0, 0]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(0)
    })

    it("Should find double element input with some elements matching at head", () => {
      const operation = ['find', 'num', ['==', ['arg', 'num'], 0], ['array', 0, 1]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(0)
    })

    it("Should find double element input with some elements matching at tail", () => {
      const operation = ['find', 'num', ['==', ['arg', 'num'], 1], ['array', 0, 1]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(1)
    })
  })

  describe("Should resolve multiple element input", () => {
    it("Should find in multiple element input with any match", () => {
      const operation = ['find', 'num', ['==', ['arg', 'num'], 0], ['array', 1, 2, 3]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(undefined)
    })

    it("Should find multiple element input with all elements matching", () => {
      const operation = ['find', 'num', ['==', ['arg', 'num'], 0], ['array', 0, 0, 0]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(0)
    })

    it("Should find multiple element input with some elements matching at head", () => {
      const operation = ['find', 'num', ['==', ['arg', 'num'], 0], ['array', 0, 1, 2]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(0)
    })

    it("Should find multiple element input with some elements matching at tail", () => {
      const operation = ['find', 'num', ['==', ['arg', 'num'], 2], ['array', 0, 1, 2]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(2)
    })

    it("Should find multiple element input with some elements matching at middle", () => {
      const operation = ['find', 'num', ['==', ['arg', 'num'], 1], ['array', 0, 1, 2]]
      const result = resolve(operation)
      expect(result).to.be.deep.equals(1)
    })
  })
})
