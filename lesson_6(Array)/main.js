/**
 *   * Array
 * 1. tạo mảng
 * 2. làm việc với mảng
 * 
 */

// tạo mảng 2 cách
var arr1 = [
    'Sơn',
    'Trang',
    'Thiện'
]
var arr2 = new Array('Phương', 'ly', 'Trúc')
console.log(arr1);
console.log(arr2);

// làm việc với mảng
// toString dùng để cover array sang string
console.log(arr1.toString());
// join tương tự với toString nhưng thay đổi được kí tự ngăn cách các item trong arr
console.log(arr1.join(''));
console.log(arr1.join(' - '));
// pop(shift): xoá phần tử cuối(đầu) trong array và trả về phần tử đó
console.log(arr2.pop());
console.log(arr2.shift());
console.log(arr2);
// push(unshift): thêm phần tử vào cuối(đầu) vào array va trả về độ dài mảng
console.log(arr1.push('Đoàn'));
console.log(arr1.unshift('Ngoan'));
console.log(arr1);
// splice: thêm, xoá, thay thế, chỉnh sửa giá trị của phần tử trong mảng, trả về 1 mảng mới với giá trị là những phần tử bị cắt
// số thứ nhất là vị trí con trỏ, thứ 2 là số phần tử được cắt từ vị trí con trỏ
// số thứ 3 trở đi là phần tử được thêm vào mảng 
console.log(arr1.splice(2,1, "Hà"));
console.log(arr1);
// concat: trả về mảng mới bằng mảng 1 + mảng 2
var arr3 = arr1.concat(arr2)
console.log(arr3)
// slice: trả về mảng mới được cắt với tham số cho trước
console.log(arr3.slice(3, 5));