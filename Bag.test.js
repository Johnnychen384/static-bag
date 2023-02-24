const Bag = require('./Bag')

describe('Bag class', () => {
    //bag has weight
    test('bag has weight', () => {
        
        expect(() => new Bag(25)).toThrowError("weight greater than maximum.")
    })
    //if bag has no weight, return error
    test('bag has no weight to return an error', () => {
        expect(() => new Bag()).toThrowError('bag needs weight')
    })

    // if bag weight exceeds maximum
    test('bag does not exceed max weight', () => {

        expect(() => new Bag(50)).toThrowError('weight greater than maximum.')
    })
})