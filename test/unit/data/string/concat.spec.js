const { expect } = require('chai')
const { resolve } = require('../../../../index')

describe("unit.resolve.concat", () => {
  describe("Should resolve concat with one element", () => {
    it("Should resolve concat with empty string", () => {
      const operation = ['concat', '']
      const result = resolve(operation)
      expect(result).to.be.equals('')
    })

    it("Should resolve concat with single char", () => {
      const operation = ['concat', 'a']
      const result = resolve(operation)
      expect(result).to.be.equals('a')
    })

    it("Should resolve concat with multiple char string", () => {
      const operation = ['concat', 'ab']
      const result = resolve(operation)
      expect(result).to.be.equals('ab')
    })

    it("Should resolve concat with a non alphanumeric char", () => {
      const operation = ['concat', '*']
      const result = resolve(operation)
      expect(result).to.be.equals('*')
    })

    it("Should resolve concat with space character", () => {
      const operation = ['concat', ' ']
      const result = resolve(operation)
      expect(result).to.be.equals(' ')
    })

    it("Should resolve concat with a japanese ideogram", () => {
      const operation = ['concat', '狐']
      const result = resolve(operation)
      expect(result).to.be.equals('狐')
    })

    it("Should resolve concat numeric value", () => {
      const operation = ['concat', '7']
      const result = resolve(operation)
      expect(result).to.be.equals('7')
    })
  })

  describe("Should resolve concat with two elements", () => {
    it("Should resolve concat with empty string", () => {
      const operation = ['concat', '', '']
      const result = resolve(operation)
      expect(result).to.be.equals('')
    })

    it("Should resolve concat with empty string and non empty string", () => {
      const operation = ['concat', '', 'a']
      const result = resolve(operation)
      expect(result).to.be.equals('a')
    })

    it("Should resolve concat with single char", () => {
      const operation = ['concat', 'a', 'b']
      const result = resolve(operation)
      expect(result).to.be.equals('ab')
    })

    it("Should resolve concat with multiple char string", () => {
      const operation = ['concat', 'ab', 'cd']
      const result = resolve(operation)
      expect(result).to.be.equals('abcd')
    })

    it("Should resolve concat with a non alphanumeric char", () => {
      const operation = ['concat', '*', '?']
      const result = resolve(operation)
      expect(result).to.be.equals('*?')
    })

    it("Should resolve concat with a non alphanumeric char and normal char", () => {
      const operation = ['concat', '*', 'a']
      const result = resolve(operation)
      expect(result).to.be.equals('*a')
    })

    it("Should resolve concat with space character", () => {
      const operation = ['concat', ' ', ' ']
      const result = resolve(operation)
      expect(result).to.be.equals('  ')
    })

    it("Should resolve concat with space character and another char", () => {
      const operation = ['concat', ' ', 'j']
      const result = resolve(operation)
      expect(result).to.be.equals(' j')
    })

    it("Should resolve concat with a japanese ideogram", () => {
      const operation = ['concat', '狐', '火']
      const result = resolve(operation)
      expect(result).to.be.equals('狐火')
    })

    it("Should resolve concat with a japanese ideogram and another char", () => {
      const operation = ['concat', '狐', 'a']
      const result = resolve(operation)
      expect(result).to.be.equals('狐a')
    })

    it("Should resolve concat with numeric char values", () => {
      const operation = ['concat', '7', '7']
      const result = resolve(operation)
      expect(result).to.be.equals('77')
    })

    it("Should resolve concat with numeric values", () => {
      const operation = ['concat', '7', 7]
      const result = resolve(operation)
      expect(result).to.be.equals('77')
    })

    it("Should resolve concat with only numeric values", () => {
      const operation = ['concat', 7, 7]
      const result = resolve(operation)
      expect(result).to.be.equals('77')
    })
  })

  describe("Should resolve simple operations with multiple elements", () => {
    it("Should resolve concat with empty string", () => {
      const operation = ['concat', '', '', '']
      const result = resolve(operation)
      expect(result).to.be.equals('')
    })

    it("Should resolve concat with empty string and non empty string", () => {
      const operation = ['concat', '', 'a', '']
      const result = resolve(operation)
      expect(result).to.be.equals('a')
    })

    it("Should resolve concat with single char", () => {
      const operation = ['concat', 'a', 'b', 'c']
      const result = resolve(operation)
      expect(result).to.be.equals('abc')
    })

    it("Should resolve concat with multiple char string", () => {
      const operation = ['concat', 'ab', 'cd', 'ef']
      const result = resolve(operation)
      expect(result).to.be.equals('abcdef')
    })

    it("Should resolve concat with a non alphanumeric char", () => {
      const operation = ['concat', '*', '?', '-']
      const result = resolve(operation)
      expect(result).to.be.equals('*?-')
    })

    it("Should resolve concat with a non alphanumeric char and normal char", () => {
      const operation = ['concat', '*', 'a', '?']
      const result = resolve(operation)
      expect(result).to.be.equals('*a?')
    })

    it("Should resolve concat with space character", () => {
      const operation = ['concat', ' ', ' ', ' ']
      const result = resolve(operation)
      expect(result).to.be.equals('   ')
    })

    it("Should resolve concat with space character and another char", () => {
      const operation = ['concat', ' ', 'j', ' ']
      const result = resolve(operation)
      expect(result).to.be.equals(' j ')
    })

    it("Should resolve concat with a japanese ideogram", () => {
      const operation = ['concat', '狐', '付', 'き']
      const result = resolve(operation)
      expect(result).to.be.equals('狐付き')
    })

    it("Should resolve concat with a japanese ideogram and another char", () => {
      const operation = ['concat', '狐', 'y', '%']
      const result = resolve(operation)
      expect(result).to.be.equals('狐y%')
    })
  })

  describe("Should resolve a single nested operations", () => {
    it("Should resolve nested operations without any other element", () => {
      const operation = ['concat', ['concat', 7, 7]]
      const result = resolve(operation)
      expect(result).to.be.equals('77')
    })

    it("Should resolve nested operation at head with more elements", () => {
      const operation = ['concat', ['concat', 5, 5], 1, 2]
      const result = resolve(operation)
      expect(result).to.be.equals('5512')
    })

    it("Should resolve nested operation at middle with more elements", () => {
      const operation = ['concat', 1, ['concat', 5, 5], 2]
      const result = resolve(operation)
      expect(result).to.be.equals('1552')
    })

    it("Should resolve nested operation at tail with more elements", () => {
      const operation = ['concat', 1, 2, ['concat', 5, 5]]
      const result = resolve(operation)
      expect(result).to.be.equals('1255')
    })
  })

  describe("Should resolve double nested operations", () => {
    it("Should resolve nested operations without any other element", () => {
      const operation = ['concat', ['concat', 7, 7], ['concat', 5, 5]]
      const result = resolve(operation)
      expect(result).to.be.equals('7755')
    })

    it("Should resolve consecutive nested operation from head with more elements", () => {
      const operation = ['concat', ['concat', 5, 5], ['concat', 7, 7], 2]
      const result = resolve(operation)
      expect(result).to.be.equals('55772')
    })

    it("Should resolve consecutive nested operation from tail with more elements", () => {
      const operation = ['concat', 2, ['concat', 5, 5], ['concat', 7, 7]]
      const result = resolve(operation)
      expect(result).to.be.equals('25577')
    })

    it("Should resolve nested operations with element between them", () => {
      const operation = ['concat', ['concat', 5, 5], 2, ['concat', 7, 7]]
      const result = resolve(operation)
      expect(result).to.be.equals('55277')
    })

    it("Should resolve double nested operations", () => {
      const operation = ['concat', 1, ['concat', 2, ['concat', 3, 4]]]
      const result = resolve(operation)
      expect(result).to.be.equals('1234')
    })
  })
})

