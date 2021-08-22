/**
 * * Object
 * 1. cách định nghĩa
 * 2. thêm key & value vào object
 * 3. lấy thông tin trong object
 * 4. Object constructor & prototype
 * 5. Date
 */

// định nghĩa
// myObject là tên Object. ten, tuoi là các key. 'Sơn', 20 là các value của key tương ứng
// có thể chứa function
// * Function được gọi là phương thức(method) (tương tự phương thức OOP trong cấc ngôn ngữ khác)
// * các key như ten, tuoi, email... được goi là các thuộc tính (property)
var myKey = 'diaChi'
var add  = 'email'
var myObject = {
    // * 3 cách khai báo tương đương nhau
    ten: 'Sơn',
    'tuoi': 20,
    [myKey]: "Hà Nội",
    getEmail: function () {
        return this[add]
    },
    getName: function () {
        return this.ten
    },
    getDiaChi: function () {
        return this['diaChi']
    }

}

// add key & value
myObject[add] = 'sonanhson99@gmail.com'
myObject.soDienThoai = '0987654321'
myObject['gioi tinh'] = 'Nam'


// lấy thông tin trong objext
console.log(myObject);
console.log(myObject.ten);
console.log(myObject.email);
console.log(myObject.diaChi);
console.log(myObject['diaChi']);
console.log(myObject['gioi tinh']);
console.log(myObject[myKey]);
console.log(myObject[add]);
console.log(myObject.getEmail);
console.log(myObject.getEmail());
console.log(myObject.getName());
console.log(myObject.getDiaChi());

// object constructor
function user(firstName, lastNane, age) {
    this.firstName = firstName
    this.lastNane = lastNane
    this.age = age

    this.getfullName = function () {
        return `${this.firstName} ${this.lastNane}`
    }
} 
// cách này tương tự cách trên nhưng là class
// class user {
//     constructor(firstName, lastNane, age) {
//         this.firstName = firstName
//         this.lastNane = lastNane
//         this.age = age

//         this.getfullName = function () {
//             return `${this.firstName} ${this.lastNane}`
//         }
//     }
// }
var user1 = new user('Đỗ', 'Công Sơn', 20)
user1.diaChi = 'Hà Nội'
var user2 = new user('Đỗ', 'Thuỳ Trang', 14)
var user3 = new user('Đỗ', 'Quang Thiện')
console.log(user1);
console.log(user1.getfullName());
console.log(user2.getfullName());
console.log(user3.getfullName());
// * prototype dùng để thêm các thuộc tính or phương thức cho constructor
// * khi thêm sẽ thêm cho all các biến Object đuọc khai báo từ constructor đó
user.prototype.email = '12345@gamil.com'
user.prototype.getEmail = function () {
    return this.email
}
console.log(user1.getEmail());
console.log(user2.getEmail());
console.log(user3.getEmail());

// * Date

var day = new Date

console.log(day.getDay()); // trả về 0-6 Chủ nhật là 0, Thứ Hai là 1 ...
console.log(day.getDate());
console.log(day.getMonth()); // trả về 0-11 tương ứng từ tháng 1-12
console.log(day.getFullYear());
console.log(day.getTime());
console.log(day.getSeconds());
console.log(day.getMinutes());
console.log(day.getHours());
console.log(day.getUTCFullYear()); 


