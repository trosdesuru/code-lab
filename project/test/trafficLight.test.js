import { trafficLight } from '../algorithms/index.js'
import { expect } from 'chai'

describe('TrafficLight Function Tests', () => {
    it('should return "green" for "red"', () => {
        expect(trafficLight('red')).to.equal('green')
    })

    it('should return "yellow" for "green"', () => {
        expect(trafficLight('green')).to.equal('yellow')
    })

    it('should return "red" for "yellow"', () => {
        expect(trafficLight('yellow')).to.equal('red')
    })
})