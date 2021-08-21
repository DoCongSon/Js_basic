/**
 * * Object
 * 1. cách định nghĩa
 * 2. thêm key & value vào object
 * 3. lấy thông tin trong object
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

