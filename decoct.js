function decimalOctal(a){
 return Number(a).toString(8)
}
module.exports = decimalOctal

var input = process.argv.slice(2)
console.log("El octal de " + input + " es:" + decimalOctal(input))