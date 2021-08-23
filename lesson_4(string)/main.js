/**
 * 1. Có 2 cách tạo chuỗi
 * 2. Một só case sử dụng dấu \
 * 3. Xem độ dài chuỗi
 * 4. template String ES6
 * 5. Làm việc với chuỗi 
 *  - length
 *  - indexOf, lastIndexOf
 *  - slice
 *  - replace
 *  - toUpperCase, toLowerCase
 *  - trim
 *  - split
 *  - charAt
*/

// tạo chuỗi

var name = '    Đây là 1 chuỗi      '
var name2 = new String('đây 1 cũng acs là 1 chuỗi')

// cách dùng \
var test = 'abc \'sơn\' \\'


// template string ES6
// ${} trả về kiểu String nếu khác sẽ tự động cover sang String
// alert(`đọ dài chuỗi name là ${name.length}. độ dài chuỗi name2 là ${name2.length}`)

// 5 làm việc với chuỗi
console.log('độ dài của name là : '+ name.length);
console.log(name2.lastIndexOf('1')) // trả về vị trí của 1 ở cuối cùng tìm đc. Còn indexOf trả về vị trí đầu tiên
console.log(name2.slice(2,6)) // trả về từ  vị trí 2 --> 5
console.log(name2.replace(/1/g, 'một'))
console.log(name2.toUpperCase());
console.log(name.trim()) // loại bỏ khoảng trắng ở đầu và cuối string
console.log(name2.split(" ")); // tách chuỗi trả về Array
console.log(name2.indexOf(1));
console.log(name2.includes(1,7));// kiểm tra xem trong chuỗi có chứa 1 ko, kiểm ttra từ phần tử thứ 7. trả về true fales
