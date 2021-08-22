/**
 * Kiểu số - Number
 * 
 * 1. cách khai báo
 * 2. các phương thức
 */

// khai báo Number
var num1 = 1234235
var num2 = 21.2142342343521
var num3 = 3e6


// phương thức
// Number.isFinite()	//Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
console.log(Number.isFinite(num2));
// Number.isInteger()	//Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
console.log(Number.isInteger(num2));
console.log(Number.isInteger(num3));
// Number.parseFloat()	//Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
var num4 = '1112.324'
console.log(Number.parseFloat(num4) + ' kiểu dũ liệu '+ typeof Number.parseFloat(num4));
console.log(Number.parseFloat('10')) // 10
console.log(Number.parseFloat('10.00')) // 10
console.log(Number.parseFloat('238,21'))// 238
console.log(Number.parseFloat('237.22'))// 237.22
console.log(Number.parseFloat('34 56 78'))// 34
console.log(Number.parseFloat(' 37 '))// 37
console.log(Number.parseFloat('18 is my age')) // 18
// Number.parseInt()	//Chuyển đổi chuỗi đã cho thành một số nguyên tương tự float
// Number.prototype.toFixed()	//Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
console.log(num2.toFixed());
console.log(num2.toFixed(0));
console.log(num2.toFixed(3));

// Number.prototype.toString()	//Chuyển đổi và trả về số đã cho dưới dạng chuỗi
console.log(num2.toString());
function run(a) {
    return Number.isInteger(a) ? a : Math.floor(a)
}

console.log(run(2));
console.log(run(2.642224342));