const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.round", () => {
  describe("Should resolve simple operations with 0", () => {
    it("Should resolve round with 0 decimals", () => {
      const operation = ['round', 0]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve round with a decimal near to floor", () => {
      const operation = ['round', 0.1]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve round with a decimal near to ceil", () => {
      const operation = ['round', 0.9]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve round with a decimal near to ceil", () => {
      const operation = ['round', 0.5]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve negative round with a decimal near to floor", () => {
      const operation = ['round', -0.1]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve negative round with a decimal near to ceil", () => {
      const operation = ['round', -0.9]
      const result = resolve(operation)
      expect(result).to.be.equals(-1)
    })

    it("Should resolve negative round with a decimal at middle", () => {
      const operation = ['round', -0.5]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })
  })

  describe("Should resolve simple operations with 1", () => {
    it("Should resolve round with 0 decimals", () => {
      const operation = ['round', 1]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve round with a decimal near to floor", () => {
      const operation = ['round', 1.1]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve round with a decimal near to ceil", () => {
      const operation = ['round', 1.9]
      const result = resolve(operation)
      expect(result).to.be.equals(2)
    })

    it("Should resolve round with a decimal at middle", () => {
      const operation = ['round', 1.5]
      const result = resolve(operation)
      expect(result).to.be.equals(2)
    })

    it("Should resolve negative round with a decimal near to floor", () => {
      const operation = ['round', -1.1]
      const result = resolve(operation)
      expect(result).to.be.equals(-1)
    })

    it("Should resolve negative round with a decimal near to ceil", () => {
      const operation = ['round', -1.9]
      const result = resolve(operation)
      expect(result).to.be.equals(-2)
    })

    it("Should resolve negative round with a decimal at middle", () => {
      const operation = ['round', -1.5]
      const result = resolve(operation)
      expect(result).to.be.equals(-1)
    })
  })

  describe("Should resolve simple operations with any number", () => {
    it("Should resolve round with 0 decimals", () => {
      const operation = ['round', 7]
      const result = resolve(operation)
      expect(result).to.be.equals(7)
    })

    it("Should resolve round with a decimal near to floor", () => {
      const operation = ['round', 7.1]
      const result = resolve(operation)
      expect(result).to.be.equals(7)
    })

    it("Should resolve round with a decimal near to ceil", () => {
      const operation = ['round', 7.9]
      const result = resolve(operation)
      expect(result).to.be.equals(8)
    })

    it("Should resolve round with a decimal at middle", () => {
      const operation = ['round', 7.5]
      const result = resolve(operation)
      expect(result).to.be.equals(8)
    })

    it("Should resolve negative round with a decimal near to floor", () => {
      const operation = ['round', -7.1]
      const result = resolve(operation)
      expect(result).to.be.equals(-7)
    })

    it("Should resolve negative round with a decimal near to ceil", () => {
      const operation = ['round', -7.9]
      const result = resolve(operation)
      expect(result).to.be.equals(-8)
    })

    it("Should resolve negative round with a decimal at middle", () => {
      const operation = ['round', -7.9]
      const result = resolve(operation)
      expect(result).to.be.equals(-8)
    })
  })
})

