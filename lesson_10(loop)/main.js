/**
 * * JavaScript hỗ trợ các loại vòng lặp khác nhau:
 * 1.for - lặp qua một khối mã nhiều lần
 * 2.for/in - lặp qua các thuộc tính(key) của một đối tượng (object)
 * 3.for/of - lặp qua các giá trị(value) của một đối tượng có thể lặp lại
 * 4.while - lặp qua một khối mã trong khi một điều kiện được chỉ định là đúng
 * 5.do/while - cũng lặp lại qua một khối mã trong khi một điều kiện được chỉ định là đúng
 * 6.break & continue
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
// Câu lệnh for-in cũng có thể lặp lại các thuộc tính của Mảng với x được tự động từ 0 -> hết
const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x];
  console.log(`${x}: ${numbers[x]}`);
}
console.log(txt);

// * 3. for- of
// Câu lệnh for-of lặp qua các giá trị của một đối tượng có thể lặp lại.
// Nó cho phép bạn lặp qua các cấu trúc dữ liệu có thể lặp lại như Arrays, Strings, Maps, NodeLists,...
// * biến - Đối với mỗi lần lặp, giá trị của thuộc tính tiếp theo được gán cho biến.
// * Biến có thể được khai báo với const, let hoặc var.
// * có thể lặp lại - Một đối tượng có các thuộc tính có thể lặp lại.

// vd lặp for-of với mảng
const cars = ["BMW", "Volvo", "Mini"];
for (const car of cars) {
    console.log(car);
}

// vd lặp for-of voies array
let language = "JavaScript";
for (const x of language) {
    console.log(x);
}

// * 4. while
// lăp khi điều kiện trong while đúng
// chú ý diều kiện nếu ko sẽ thành vòng lặp vô hạn

// ! chú ý i = 5 từ vd trên
while (i < 10) {
    console.log("The number is " + i);
    i++;
}
// * 5. do-while 
// giống while nhưng luôn chạy lần đầu tiên xong mới kiểm tra điều kiện
// ! chú ý i = 10 từ vd trên
do {
    console.log("Number is " + i);
    i++;
}
while (i < 10);

// * 6. break & continue
// break dùng để thoát khỏi vòng lặp
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i == 5) {
        break;
    }
}
// continue dùng để nhảy tới bước lặp tiếp theo bỏ qua câu lệnh sau nó
console.log('------------------------------------');
for (let i = 0; i < 10; i++) {
    if (i % 2 != 0) {
        continue
    }
    console.log(i);
}