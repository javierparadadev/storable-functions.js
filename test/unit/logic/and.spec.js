const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.and", () => {
  describe("Should resolve simple operations with one element", () => {
    it("Should resolve logic and with false", () => {
      const operation = ['and', false]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve logic and with true", () => {
      const operation = ['and', true]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })
  })

  describe("Should resolve simple operations with two elements", () => {
    it("Should resolve logic and with double false", () => {
      const operation = ['and', false, false]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve logic and with double true", () => {
      const operation = ['and', true, true]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve logic and with true and false", () => {
      const operation = ['and', false, true]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })
  })

  describe("Should resolve simple operations with multiple elements", () => {
    it("Should resolve logic and with all values as false", () => {
      const operation = ['and', false, false, false]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve logic and with all values as true", () => {
      const operation = ['and', true, true, true]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve logic and with at least one false", () => {
      const operation = ['and', true, false, true]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve logic and with at least one true", () => {
      const operation = ['and', false, false, true]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })
  })

  describe("Should keep to conmutative property", () => {
    it("Should be conmutative", () => {
      const res1 = resolve(['and', true, false])
      const res2 = resolve(['and', false, true])
      expect(res1).to.be.equals(res2)
    })

    it("Should be conmutative with three arguments", () => {
      const res1 = resolve(['and', true, false, true])
      const res2 = resolve(['and', false, false, true])
      expect(res1).to.be.equals(res2)
    })
  })

  describe("Should resolve a single nested operations", () => {
    it("Should resolve nested operations without any other element", () => {
      const operation = ['and', ['and', false, true]]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve nested operations without any other element", () => {
      const operation = ['and', ['and', true, true]]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve nested operation at head with more elements", () => {
      const operation = ['and', ['and', true, false], true, true]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve nested operation at head with more elements", () => {
      const operation = ['and', ['and', true, true], true, true]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve nested operation at middle with more elements", () => {
      const operation = ['and', true, ['and', false, true], false]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve nested operation at middle with more elements", () => {
      const operation = ['and', true, ['and', true, true], true]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve nested operation at tail with more elements", () => {
      const operation = ['and', true, true, ['and', true, false]]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve nested operation at tail with more elements", () => {
      const operation = ['and', true, true, ['and', true, true]]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })
  })

  describe("Should resolve double nested operations", () => {
    it("Should resolve nested operations without any other element", () => {
      const operation = ['and', ['and', true, false], ['and', true, true]]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve nested operations without any other element", () => {
      const operation = ['and', ['and', true, true], ['and', true, true]]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve consecutive nested operation from head with more elements", () => {
      const operation = ['and', ['and', true, true], ['and', false, true], false]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve consecutive nested operation from head with more elements", () => {
      const operation = ['and', ['and', true, true], ['and', true, true], true]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve consecutive nested operation from tail with more elements", () => {
      const operation = ['and', true, ['and', true, true], ['and', false, true]]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve consecutive nested operation from tail with more elements", () => {
      const operation = ['and', true, ['and', true, true], ['and', true, true]]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve nested operations with element between them", () => {
      const operation = ['and', ['and', true, true], true, ['and', true, false]]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve nested operations with element between them", () => {
      const operation = ['and', ['and', true, true], true, ['and', true, true]]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve double nested operations", () => {
      const operation = ['and', true, ['and', true, ['and', true, false]]]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve double nested operations", () => {
      const operation = ['and', true, ['and', true, ['and', true, true]]]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })
  })
})

