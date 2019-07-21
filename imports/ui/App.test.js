import expect from 'expect'

const lastChar = s => !isNaN(Number(s[s.length - 1]))

describe('Unit test', function() {
    it('should colored to yellow', function () {
        const isNumber = lastChar('asnd3ASdasjdn23jdnaisj342')
        const isNotNumber = lastChar('asdhuy67732hgHajsdg63hjbas')
    
        expect(isNumber).toBe(true)
        expect(isNotNumber).toBe(false)
    })
})