const myRemove = require('./myRemove')

it('O Novo Array é', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toBe([1, 2, 3, 4])
})