# ECMAScript 6+

## mục lục
[1. let, const](#1)

[2. Template Literals](#2)

[3. Multi_line String](#3)

[4. Arrow function](#4)

[5. Classes](#5)

[6. Default parameter values](#6)

[7. Enhanced object literals](#7)

[8. Destructuring](#8)

[9. Rest parameters](#9)

[10. Spread](#10)

[11. Enhanced object literals](#11)

[12. Tagged template literal](#12)

[13. Modules](#13)


----------

<a name="#1"></a>

### 1. let, const

- let, const không có Hosting, không truy cập được ngoài scope (code block: if else, loop, khối {} )
- var có hosting, có thể truy cập ngoài scope
- const không thể gán lại 
----------

<a name="2"></a>

### 2. Template Literals
- cách dùng sử dụng trong cặp nháy `` thay vì '' hay ""
- cách dùng biến ${value}
```javascript
const value = 'javascript'
const string = `học ${value} cơ bản`
console.log(string);
// học javascript cơ bản
```
----------

<a name="3"></a>

### 3. Multi_line String
- có thể xuống dòng mà không cần dùng \n
```javascript
// cách thông thường
var str1 = "line 1\n"
    + "line 2\n"
    + "line 3"
console.log(str1);
// line 1
// line 2
// line 3

// dùng Template literals
var str2 = `line 1
line 2
line 3`
console.log(str2)
// kết quả tương tự như vd trên
```
----------

<a name="4"></a>

### 4. Arrow function
- cách viết ngắn gọn của function
```javascript
// vd 1
// var log = function(message) {
//     console.log(message);
// }
var log = (message) => console.log('message');

// vd2
// var sum = function(a, b) { 
//     return a + b;
// }
var sum = (a, b) => a + b;
```
----------

<a name="5"></a>

### 5. Classes
- cách viết khác của đối tượng
```javascript
// var timer = function(hour, minute, second) {
//     this.hour = hour;
//     this.minute = minute;
//     this.second = second;
//     functions getHours() {
//         return this.hours
//     }
// }
class timer {
    constructor(hour, minute, second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    getHours() {
        return this.hour
    } 
}
```
----------

<a name="6"></a>

### 6. Default parameter values
- Cách gán giá trị mặc dịnh cho tham số
```javascript
var log = (message, type = 'log') => {
    console[type](message);
}
log('message error', 'error');
log('message warning','warn');
log('message default');
```
----------

<a name="7"></a>

### 7. Enhanced object literals
- kiểu định nghĩa ngắn gọn của: 
  - key : value cho Object
  - method cho Object
  - định nghĩa key cho Object dưới dạng biến
```javascript
const name = 'JavaScript';
const price = 15000;

const key1 = "fullName";
const key2 = "age";

var course = {
    // cách định nghĩa key: value bình thường:
    // name: name,
    // price: price,

    // cách ngắn gọn hơn chỉ áp dụng khi key trùng với valua 
    name,
    price,

    // cách định nghĩa method bình thường
    // getName: function () {
    //     return name;
    // }

    // cách ngắn gọn hơn
    getName() {
        return name;
    }
}

// cách định nghĩa key cho Object dưới dạng biến
var user = {
    [key1]: 'Đỗ Công Sơn',
    [key2]: 20,
    getName() {
        return this[key1];
    }
}
```
----------

<a name="8"></a>

### 8. Destructuring
- 1 cách mới để duyệt qua các phần tử trong mảng và object
```javascript
//  Array
var arrName = ['Sơn', 'trang', 'thiện'];
var [a, b, c] = arrName
console.log(a, b, c);
// truy cập 2 phần tử đầu và cuối
var [x,,y] = arrName
console.log(x, y);

var course = {
    name: 'javascript',
    price: 1500,
    children: {
        name: 'NodeJS',
        price: 1000
    }
}

var {name , price} = course;
console.log(name, price);
// có thể đặt tên lại cho key như sau trong trường hợp các key trùng tên nhau (hoặc đơn giản là mình thích thì mình đổi thôi ^^):
var {name: parentName, price: parentPrice, children:{name: childName, price: childPrice}} = course;
console.log(parentName, parentPrice);
console.log(childName, childPrice);
```
----------

<a name="9"></a>

### 9. Rest parameters
- Dùng trong việc lấy ra các phần tủe còn lại của mảng 
```javascript
// vd 1
var names = ['Đoàn', 'Ngoan', 'Sơn', 'Trang', 'Thiện'];
// rest sẽ trả về mảng các phần tử còn lại trong mảng
var [a, b, ...rest] = names;
console.log(a, b, rest);
// vd 2
var log1 = (...params) => {
    // params sẽ là môt array chứa all các tham số truyền vào
    console.log(params);
}

var log2 = (a, b, ...params) => {
    // a, b là các tham số mặc định phải có của function
    console.log(a, b);
    // params lúc này sẽ là một Array chứa các tham số thứ 3 trở đi 
    console.log(params);
}

// tương tự như Array. Object cũng giống như vậy
var course = {
    name: 'javascript',
    price: 1500,
    children: {
        name: 'NodeJS',
        price: 1000
    }
}
var {name: parentName, ...rest} = course;
console.log(parentName, rest);
```
----------

<a name="10"></a>

### 10. Spread
- toán tử rải
```javascript
// Array
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6, 7];
var arr3 = [...arr1, ...arr2];
console.log(arr3);

// Object
var object1 = {
    fname: 'Đỗ',
    lname: 'Quang Thiện',
}
var object2 = {
    lname: 'Công Sơn',
    age: 20
}
var object3 = {
    // cái trên sẽ bị cái dưới ghi đè
    ...object1,
    ...object2
}
console.log(object3);
```

----------

<a name="12"></a>

### 12. Tagged template literal
- một cách sử dụng function để làm việc với chuỗi
```javascript
var array1 = ['html-css', 'javascript']

function boldStyle(...params) {
    var [[first, ...rest], ...values] = params;
    return rest.reduce((str, val) => [...str, `<b>${values.shift()}</b>`, val],[first]).join('');
}

var html = boldStyle`Học ${array1[0]} và ${array1[1]} để trở thành Frontend developer`;
console.log(html);
```
----------

<a name="13"></a>

### 13. Modules
#### Các biến thể export
- Một module là một tập hợp, một gói, một packet, chứa data - ví dụ các biến lưu giữ state,..., các hàm (function hoặc method) lấy dữ liệu, thao tác, thay đổi giá trị, các biến state đó nhằm phục vụ một chức năng nhất định. Để dễ hình dung thì các library, npm package ta dùng hằng ngày nhìn chung chính là các module.
- sử dụng key word "import" và "export"
```javascript
var log = function (message, type = TYPE_LOG) {
    console[type](message);
}
export default log;
// export var log = function (message, type = TYPE_LOG) {
//     console[type](message);
// }
```
- Ngoài cách export một object như trên, ESM còn cho phép chúng ta thoải mái sử dụng cú pháp export cho từng biến hay function cụ thể (named export):
```javascript 
// awesome-library.js
export const PI = 3.1415926;

export function sum(...args) {
  log('sum', args);
  return args.reduce((num, tot) => tot + num);
}

export function mult(...args) {
  log('mult', args);
  return args.reduce((num, tot) => tot * num);
}

// private function
function log(...msg) {
  console.log(...msg);
}
```
- Một biến thể nữa là default export.
  - Khác với named export, một module chỉ có duy nhất một default export. Nếu người dùng không chỉ rõ phần nào cần import, mà chỉ import mopdule một cách chung chung, thì phần export default này sẽ được import.
```javascript
export default function getName(studentID) {
  // ..
}
```
#### Các biến thể import
##### Named import
- Sử dụng "named import", chúng ta sẽ import những thứ cần thiết, tránh import cả module.
```javascript
import { sum, mult } from './lib.js';

console.log(sum(1, 2, 3, 4));
console.log(mult(1, 2, 3, 4));
```
##### Alias thành một cái tên khác
- Bằng cách sử dụng keyword **as**, chúng ta có thể import và gán một cái tên khác cho phần api vừa được import.
```javascript
import { sum as addAll, mult as multiplyAll } from './lib.js';

console.log(addAll(1, 2, 3, 4));
console.log(multiplyAll(1, 2, 3, 4));
```
##### default import
- Như đã nhắc đến phía trên, nếu module có export default, thì khi đứng ở module khác chúng ta có thể import phần default đó như sau:
```javascript
import getName from "/path/to/students.js";

getName(73);
```
- Mix vừa default import vừa named import
```javascript
import { default as getName, /* .. others .. */ }
   from "/path/to/students.js";

getName(73);
```
##### Namespace import
- Cuối cùng, bạn có thể sử dụng dấu * để import toàn bộ mọi thứ được export bên trong một module, bao gồm cả default và named export, gom chúng thành một name space - một biến xài chung như sau:
```javascript
import * as Student from "/path/to/students.js";

Student.getName(73);
```