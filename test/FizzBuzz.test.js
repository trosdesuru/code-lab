import fizzBuzz from '../algorithms/fizzBuzz.js'
import { expect } from 'chai'
import { describe } from 'node:test'

const testCases = Array.from({ length: 100}, (_, i))
console.log (fizzBuzz(testCases))

describe('FizzBuzz Algorithm', () => {
    it('should return FizzBuzz', () => {
        expect(fizzBuzz(15)).to.equal('FizzBuzz')
    })
    it('should return Fizz', () => {
        expect(fizzBuzz(3)).to.equal('Fizz')
    })
    it('should return Buzz', () => {
        expect(fizzBuzz(5)).to.equal('Buzz')
    })
    it('should return 1', () => {
        expect(fizzBuzz(1)).to.equal(1)
    })
    it('should return 2', () => {
        expect(fizzBuzz(2)).to.equal(2)
    })
    it('should return 4', () => {
        expect(fizzBuzz(4)).to.equal(4)
    })
    it('should return 7', () => {
        expect(fizzBuzz(7)).to.equal(7)
    })
    it('should return 8', () => {
        expect(fizzBuzz(8)).to.equal(8)
    })
    it('should return 11', () => {
        expect(fizzBuzz(11)).to.equal(11)
    })
    it('should return 13', () => {
        expect(fizzBuzz(13)).to.equal(13)
    })
    it('should return 14', () => {
        expect(fizzBuzz(14)).to.equal(14)
    })
})