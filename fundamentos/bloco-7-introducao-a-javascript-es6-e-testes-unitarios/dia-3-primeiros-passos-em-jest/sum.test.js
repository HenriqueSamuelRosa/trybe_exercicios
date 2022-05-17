const sum = require('./sum')

test('A soma entre 4 e 5 é igual a 9', () => {
    expect(sum(4, 5)).toBe(9)
})

test ('A Soma entre 0 e 0 é igual a 0',() => {
    expect(sum(0, 0)).toBe(0)
})

test('O Parametro deve ser um Número', () => {
    expect(sum(4, '9')).toThrow(Error)
})


