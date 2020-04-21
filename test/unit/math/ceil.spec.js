const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.ceil", () => {
  describe("Should resolve simple operations with 0", () => {
    it("Should resolve ceil with 0 decimals", () => {
      const operation = ['ceil', 0]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve ceil with a decimal near to ceil", () => {
      const operation = ['ceil', 0.1]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve ceil with a decimal near to ceil", () => {
      const operation = ['ceil', 0.9]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve negative ceil with a decimal near to ceil", () => {
      const operation = ['ceil', -0.1]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })

    it("Should resolve negative ceil with a decimal near to ceil", () => {
      const operation = ['ceil', -0.9]
      const result = resolve(operation)
      expect(result).to.be.equals(0)
    })
  })

  describe("Should resolve simple operations with 1", () => {
    it("Should resolve ceil with 0 decimals", () => {
      const operation = ['ceil', 1]
      const result = resolve(operation)
      expect(result).to.be.equals(1)
    })

    it("Should resolve ceil with a decimal near to ceil", () => {
      const operation = ['ceil', 1.1]
      const result = resolve(operation)
      expect(result).to.be.equals(2)
    })

    it("Should resolve ceil with a decimal near to ceil", () => {
      const operation = ['ceil', 1.9]
      const result = resolve(operation)
      expect(result).to.be.equals(2)
    })

    it("Should resolve negative ceil with a decimal near to ceil", () => {
      const operation = ['ceil', -1.1]
      const result = resolve(operation)
      expect(result).to.be.equals(-1)
    })

    it("Should resolve negative ceil with a decimal near to ceil", () => {
      const operation = ['ceil', -1.9]
      const result = resolve(operation)
      expect(result).to.be.equals(-1)
    })
  })

  describe("Should resolve simple operations with any number", () => {
    it("Should resolve ceil with 0 decimals", () => {
      const operation = ['ceil', 7]
      const result = resolve(operation)
      expect(result).to.be.equals(7)
    })

    it("Should resolve ceil with a decimal near to ceil", () => {
      const operation = ['ceil', 7.1]
      const result = resolve(operation)
      expect(result).to.be.equals(8)
    })

    it("Should resolve ceil with a decimal near to ceil", () => {
      const operation = ['ceil', 7.9]
      const result = resolve(operation)
      expect(result).to.be.equals(8)
    })

    it("Should resolve negative ceil with a decimal near to ceil", () => {
      const operation = ['ceil', -7.1]
      const result = resolve(operation)
      expect(result).to.be.equals(-7)
    })

    it("Should resolve negative ceil with a decimal near to ceil", () => {
      const operation = ['ceil', -7.9]
      const result = resolve(operation)
      expect(result).to.be.equals(-7)
    })
  })
})

