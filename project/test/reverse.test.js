import { reverse } from '../algorithms/index.js'

import * as chai from 'chai'
import { assert } from 'chai'
chai.config.truncateThreshold = 0

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {

        const result1 = reverse('I am an expert at this')
        console.log(`Test 1: Input: "I am an expert at this" | Expected: 'this at expert an am I' | Result: ${result1}`)
        assert.strictEqual(result1, 'this at expert an am I')

        const result2 = reverse('This is a test')
        console.log(`Test 2: Input: "This is a test" | Expected: 'test a is This' | Result: ${result2}`)
        assert.strictEqual(result2, 'test a is This')

        const result3 = reverse('no one cares')
        console.log(`Test 3: Input: "no one cares" | Expected: 'cares one no' | Result: ${result3}`)
        assert.strictEqual(result3, 'cares one no')

        const result4 = reverse('')
        console.log(`Test 4: Input: "" | Expected: '' | Result: ${result4}`)
        assert.strictEqual(result4, '')

        const result5 = reverse('Eduard Hernández Ventós')
        console.log(`Test 5: Input: "Eduard Hernández Ventós" | Expected: 'Ventós Hernández Eduard' | Result: ${result5}`)
        assert.strictEqual(result5, 'Ventós Hernández Eduard')
    })
})
