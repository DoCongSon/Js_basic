/** 
 * kiểu dữ liệu trọng javascript
 * 1. Kiểu dữ liêu nguyên thuỷ
 * - Number
 * - String
 * - Boolean
 * - Undefined
 * - Null
 * - Symbol
 * 2. Dữ liệu phức tạp
 * - Function
 * - Object
 */


function hello(name) {
    alert(name)
}
hello('Sơn')

var myObject = {
    ten: 'son',
    tuoi: 20,
    helllo: hello('abc')
}
console.log("my object", myObject)