const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.arg", () => {
  describe("Should get input argument from multiple argument args", () => {
    it("Should get numeric argument", () => {
      const operation = ['arg', 'testArg']
      const result = resolve(operation, { testArg: 7 })
      expect(result).to.be.deep.equals(7)
    })

    it("Should get string argument", () => {
      const operation = ['arg', 'testArg']
      const result = resolve(operation, { testArg: 'test-value' })
      expect(result).to.be.deep.equals('test-value')
    })

    it("Should get array argument", () => {
      const operation = ['arg', 'testArg']
      const result = resolve(operation, { testArg: [2, 3, 4] })
      expect(result).to.be.deep.equals([2, 3, 4])
    })

    it("Should get object argument", () => {
      const operation = ['arg', 'testArg']
      const result = resolve(operation, { testArg: { key: 'a value' } })
      expect(result).to.be.deep.equals({ key: 'a value' })
    })
  })

  describe("Should get input argument from single argument args", () => {
    it("Should get numeric argument", () => {
      const operation = ['arg', 'testArg']
      const result = resolve(operation, { anyArg: 'anyValue', testArg: 7 })
      expect(result).to.be.deep.equals(7)
    })

    it("Should get string argument", () => {
      const operation = ['arg', 'testArg']
      const result = resolve(operation, { anyArg: 'anyValue', testArg: 'test-value' })
      expect(result).to.be.deep.equals('test-value')
    })

    it("Should get array argument", () => {
      const operation = ['arg', 'testArg']
      const result = resolve(operation, { anyArg: 'anyValue', testArg: [2, 3, 4] })
      expect(result).to.be.deep.equals([2, 3, 4])
    })

    it("Should get object argument", () => {
      const operation = ['arg', 'testArg']
      const result = resolve(operation, { anyArg: 'anyValue', testArg: { key: 'a value' } })
      expect(result).to.be.deep.equals({ key: 'a value' })
    })
  })
})
