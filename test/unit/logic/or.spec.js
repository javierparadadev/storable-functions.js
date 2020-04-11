const { expect } = require('chai')
const { resolve } = require('../../../index')

describe("unit.resolve.and", () => {
  describe("Should resolve simple operations with one element", () => {
    it("Should resolve logic or with false", () => {
      const operation = ['or', false]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve logic or with true", () => {
      const operation = ['or', true]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })
  })

  describe("Should resolve simple operations with two elements", () => {
    it("Should resolve logic or with double false", () => {
      const operation = ['or', false, false]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve logic or with double true", () => {
      const operation = ['or', true, true]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve logic or with true and false", () => {
      const operation = ['or', false, true]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })
  })

  describe("Should resolve simple operations with multiple elements", () => {
    it("Should resolve logic or with all values as false", () => {
      const operation = ['or', false, false, false]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve logic or with all values as true", () => {
      const operation = ['or', true, true, true]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve logic or with at least one false", () => {
      const operation = ['or', true, false, true]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve logic or with at least one true", () => {
      const operation = ['or', false, false, true]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })
  })

  describe("Should keep to conmutative property", () => {
    it("Should be conmutative", () => {
      const res1 = resolve(['or', true, false])
      const res2 = resolve(['or', false, true])
      expect(res1).to.be.equals(res2)
    })

    it("Should be conmutative with three arguments", () => {
      const res1 = resolve(['or', true, false, true])
      const res2 = resolve(['or', false, false, true])
      expect(res1).to.be.equals(res2)
    })
  })

  describe("Should resolve a single nested operations", () => {
    it("Should resolve nested operations without any other element", () => {
      const operation = ['or', ['or', false, true]]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve nested operations without any other element", () => {
      const operation = ['or', ['or', false, false]]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve nested operation at head with more elements", () => {
      const operation = ['or', ['or', false, true], false, false]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve nested operation at head with more elements", () => {
      const operation = ['or', ['or', false, false], false, false]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve nested operation at middle with more elements", () => {
      const operation = ['or', true, ['or', false, true], false]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve nested operation at middle with more elements", () => {
      const operation = ['or', false, ['or', false, false], false]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve nested operation at tail with more elements", () => {
      const operation = ['or', true, true, ['or', true, false]]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve nested operation at tail with more elements", () => {
      const operation = ['or', false, false, ['or', false, false]]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })
  })

  describe("Should resolve double nested operations", () => {
    it("Should resolve nested operations without any other element", () => {
      const operation = ['or', ['or', true, false], ['or', true, true]]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve nested operations without any other element", () => {
      const operation = ['or', ['or', false, false], ['or', false, false]]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve consecutive nested operation from head with more elements", () => {
      const operation = ['or', ['or', true, true], ['or', false, true], false]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve consecutive nested operation from head with more elements", () => {
      const operation = ['or', ['or', false, false], ['or', false, false], false]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve consecutive nested operation from tail with more elements", () => {
      const operation = ['or', true, ['or', true, true], ['or', false, true]]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve consecutive nested operation from tail with more elements", () => {
      const operation = ['or', false, ['or', false, false], ['or', false, false]]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve nested operations with element between them", () => {
      const operation = ['or', ['or', true, true], true, ['or', true, false]]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve nested operations with element between them", () => {
      const operation = ['or', ['or', false, false], false, ['or', false, false]]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })

    it("Should resolve double nested operations", () => {
      const operation = ['or', true, ['or', true, ['or', true, false]]]
      const result = resolve(operation)
      expect(result).to.be.equals(true)
    })

    it("Should resolve double nested operations", () => {
      const operation = ['or', false, ['or', false, ['or', false, false]]]
      const result = resolve(operation)
      expect(result).to.be.equals(false)
    })
  })
})

