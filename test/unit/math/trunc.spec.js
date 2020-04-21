const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.trunc", () => {
  describe("Should resolve simple operations with 0", () => {
    it("Should resolve trunc with 0 decimals", () => {
      const operation = ['trunc', 0]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve trunc with a decimal near to floor", () => {
      const operation = ['trunc', 0.1]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve trunc with a decimal near to ceil", () => {
      const operation = ['trunc', 0.9]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve trunc with a decimal at middle", () => {
      const operation = ['trunc', 0.5]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve negative trunc with a decimal near to ceil", () => {
      const operation = ['trunc', -0.1]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve negative trunc with a decimal near to floor", () => {
      const operation = ['trunc', -0.9]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve negative trunc with a decimal at middle", () => {
      const operation = ['trunc', -0.5]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })
  })

  describe("Should resolve simple operations with 1", () => {
    it("Should resolve trunc with 0 decimals", () => {
      const operation = ['trunc', 1]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve trunc with a decimal near to floor", () => {
      const operation = ['trunc', 1.1]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve trunc with a decimal near to ceil", () => {
      const operation = ['trunc', 1.9]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve trunc with a decimal at middle", () => {
      const operation = ['trunc', 1.5]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve negative trunc with a decimal near to floor", () => {
      const operation = ['trunc', -1.1]
      const result = resolve(operation)
      expect(result).to.be.equals(-1)
    })

    it("Should resolve negative trunc with a decimal near to ceil", () => {
      const operation = ['trunc', -1.9]
      const result = resolve(operation)
      expect(result).to.be.equals(-1)
    })

    it("Should resolve negative trunc with a decimal at middle", () => {
      const operation = ['trunc', -1.5]
      const result = resolve(operation)
      expect(result).to.be.equals(-1)
    })
  })

  describe("Should resolve simple operations with any number", () => {
    it("Should resolve trunc with 0 decimals", () => {
      const operation = ['trunc', 7]
      const result = resolve(operation)
      expect(result).to.be.equals(7)
    })

    it("Should resolve trunc with a decimal near to floor", () => {
      const operation = ['trunc', 7.1]
      const result = resolve(operation)
      expect(result).to.be.equals(7)
    })

    it("Should resolve trunc with a decimal near to ceil", () => {
      const operation = ['trunc', 7.9]
      const result = resolve(operation)
      expect(result).to.be.equals(7)
    })

    it("Should resolve trunc with a decimal at middle", () => {
      const operation = ['trunc', 7.5]
      const result = resolve(operation)
      expect(result).to.be.equals(7)
    })

    it("Should resolve negative trunc with a decimal near to trunc", () => {
      const operation = ['trunc', -7.1]
      const result = resolve(operation)
      expect(result).to.be.equals(-7)
    })

    it("Should resolve negative trunc with a decimal near to trunc", () => {
      const operation = ['trunc', -7.9]
      const result = resolve(operation)
      expect(result).to.be.equals(-7)
    })

    it("Should resolve negative trunc with a decimal at middle", () => {
      const operation = ['trunc', -7.5]
      const result = resolve(operation)
      expect(result).to.be.equals(-7)
    })
  })
})

