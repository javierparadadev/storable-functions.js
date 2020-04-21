const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.floor", () => {
  describe("Should resolve simple operations with 0", () => {
    it("Should resolve floor with 0 decimals", () => {
      const operation = ['floor', 0]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve floor with a decimal near to floor", () => {
      const operation = ['floor', 0.1]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve floor with a decimal near to ceil", () => {
      const operation = ['floor', 0.9]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve negative floor with a decimal near to ceil", () => {
      const operation = ['floor', -0.1]
      const result = resolve(operation)
      expect(result).to.be.equals(-1)
    })

    it("Should resolve negative floor with a decimal near to floor", () => {
      const operation = ['floor', -0.9]
      const result = resolve(operation)
      expect(result).to.be.equals(-1)
    })
  })

  describe("Should resolve simple operations with 1", () => {
    it("Should resolve floor with 0 decimals", () => {
      const operation = ['floor', 1]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve floor with a decimal near to floor", () => {
      const operation = ['floor', 1.1]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve floor with a decimal near to ceil", () => {
      const operation = ['floor', 1.9]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve negative floor with a decimal near to ceil", () => {
      const operation = ['floor', -1.1]
      const result = resolve(operation)
      expect(result).to.be.equals(-2)
    })

    it("Should resolve negative floor with a decimal near to floor", () => {
      const operation = ['floor', -1.9]
      const result = resolve(operation)
      expect(result).to.be.equals(-2)
    })
  })

  describe("Should resolve simple operations with any number", () => {
    it("Should resolve floor with 0 decimals", () => {
      const operation = ['floor', 7]
      const result = resolve(operation)
      expect(result).to.be.equals(7)
    })

    it("Should resolve floor with a decimal near to floor", () => {
      const operation = ['floor', 7.1]
      const result = resolve(operation)
      expect(result).to.be.equals(7)
    })

    it("Should resolve floor with a decimal near to ceil", () => {
      const operation = ['floor', 7.9]
      const result = resolve(operation)
      expect(result).to.be.equals(7)
    })

    it("Should resolve negative floor with a decimal near to ceil", () => {
      const operation = ['floor', -7.1]
      const result = resolve(operation)
      expect(result).to.be.equals(-8)
    })

    it("Should resolve negative floor with a decimal near to floor", () => {
      const operation = ['floor', -7.9]
      const result = resolve(operation)
      expect(result).to.be.equals(-8)
    })
  })
})

