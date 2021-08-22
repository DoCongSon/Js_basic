/**
 * * JavaScript hỗ trợ các loại vòng lặp khác nhau:
 * 1.for - lặp qua một khối mã nhiều lần
 * 2.for/in - lặp qua các thuộc tính(key) của một đối tượng (object)
 * 3.for/of - lặp qua các giá trị(value) của một đối tượng có thể lặp lại
 * 4.while - lặp qua một khối mã trong khi một điều kiện được chỉ định là đúng
 * 5.do/while - cũng lặp lại qua một khối mã trong khi một điều kiện được chỉ định là đúng
 */

// * 1. for
// khai báo biến đếm với let sẽ chỉ tồn tại trong vòng lặp
// có thể lược bớt đk lặp và khai báo biến lặp ở vòng for nhưng vẫn cần đấu ; và phải khai báo bêb ngoài
var i = 10
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log('giá trị của i sau khi kết thúc vòng lặp là: ' + i); // 5
let j = 10
for (let j = 0; j < 5; j++) {
    console.log(j);
}
console.log('giá trị của j sau khi kết thúc vòng lặp là: ' + j); // 10

// ? chú ý
// Trong ví dụ đầu tiên, sử dụng var, biến được khai báo trong vòng lặp khai báo lại biến bên ngoài vòng lặp.
// Trong ví dụ thứ hai, sử dụng let, biến được khai báo trong vòng lặp không khai báo lại biến bên ngoài vòng lặp.
// Khi let được sử dụng để khai báo biến i trong một vòng lặp, biến i sẽ chỉ hiển thị trong vòng lặp.

// * 2 for-in
// biến key ở vd dưới lặp qua thuọc tính của object 

const person = {fname:"Đỗ", lname:"Công Sơn", age:20};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Câu lệnh for-in cũng có thể lặp lại các thuộc tính của Mảng
const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
console.log(txt);