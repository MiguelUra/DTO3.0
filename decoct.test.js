
const decimalOctal = require("./decoct")

test('Inicializacion del convertidor de decimales a octales', () =>{
    var a = 747
    var b = "1353"

    expect(decimalOctal(a)).toBe(b)
})