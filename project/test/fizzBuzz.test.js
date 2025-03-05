import fizzBuzz from './fizzBuzz.js'
import { expect } from 'chai'
import sinon from 'sinon'

describe('FizzBuzz Function Tests', () => {
    let consoleSpy

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log')
    })
    afterEach(() => {
        consoleSpy.restore()
    })

    it('should print "Fizz" for multiples of 3', () => {
        fizzBuzz(3)
        expect(consoleSpy.calledWith('Fizz')).to.be.true
    })

    it('should print "Buzz" for multiples of 5', () => {
        fizzBuzz(5)
        expect(consoleSpy.calledWith('Buzz')).to.be.true
    })

    it('should print "FizzBuzz" for multiples of 15', () => {
        fizzBuzz(15)
        expect(consoleSpy.calledWith('FizzBuzz')).to.be.true
    })

    it('should print the number itself for non-multiples of 3 or 5', () => {
        fizzBuzz(7)
        expect(consoleSpy.calledWith(7)).to.be.true
    })

    it('should print the correct sequence for numbers 1 to 15', () => {
        fizzBuzz(15)
        const expectedOutput = [
            1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'
        ]
        expectedOutput.forEach((expectedValue, index) => {
            expect(consoleSpy.getCall(index).args[0]).to.equal(expectedValue)
        })
    })

})
