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

var students = [
    {
        fname: "Đỗ",
        lname: "Thuỳ Trang",
        age: 14, 
        home: 'myhome'
    },
    {
        fname: "Đỗ",
        lname: "Quang Thiện",
        age: 10,
        home: 'myhome'
    },
    {
        fname: "Đỗ",
        lname: "Công Sơn",
        age: 20,
        home: 'myhome'
    },
    {
        fname: "Đỗ",
        lname: "Công Sơn",
        age: 10,
        home: 'myhome'
    },
    {
        fname: "lê",
        lname: "Thị Ngoan",
        age: 20,
        home: 'myhome'
    }
]

// forEach() dùng để duyệt từng phần tử trong array
students.forEach(function (student, index) {
    console.log(index , student);

})
arr3.forEach(function (i) {
    console.log(i);
})

// every() dùng để so sánh các thuộc tính của mảng các đối tượng (object)
// nếu tất cả đều giống nhau trả về true còn ko trả về false
var isHome = students.every(function (student) {
    return student.home === 'myhome'
})
var isFname = students.every(function (student) {
    return student.fname === 'Đỗ'
})
console.log(isHome)
console.log(isFname)

// some() ngược lại với every().
// ít nhất 1 phần tử trong mảng thoả mãn điều kiện thì trả về true
// chỉ trường hợp không có phần tử nào thoả mãn thì mới trả về false
var isAge = students.some(function (student) {
    return student.age === 20
})
console.log(isAge);
var isAge = students.some(function (student) {
    return student.age === 21   
})
console.log(isAge);

// find() 
// tìm phần tử trong mảng và trả về phần tử đầu tiên tìm được
var son = students.find(function (student) {
    return student.lname === "Công Sơn"
})
console.log(son);

//  filter() giông find() nhưng trả về mảng chứa tất cả phần tử tìm được
var sons = students.filter(function (student) {
    return student.lname === "Công Sơn"
})
console.log(sons);
// reduce
var arr = [function () {} ,'sa',1, 10, 32, {}, 20]
function sumNumberToArr(arr) {
    return arr.reduce(function (sum,i) {
        if (typeof i === 'number') {
            console.log(sum);
            return sum + i
        }
        console.log(sum);
        return sum
        
    },0)
}
function sumNumberToArr1(arr) {
    return arr.reduce((sum, i) => (typeof i === 'number') ? sum + i: sum , 0)
}

console.log(sumNumberToArr1(arr))
function name(params) {
    
}
// map
// dùng để chỉnh sửa nội dung của đối tượng và nhiều thứ khác
// vd láy ra mảng chỉ chứa lname của students ta làm như sau

var arrLastName = students.map((element, index, originalArray) => {
    return element.lname
})
console.log(arrLastName);

// VD thêm, bớt, chỉnh sửa key cho từng đối tượng trong mảng

var newStudents = students.map((element, index, originalArray) => {
    return {
        index: index,
        fname: element.fname,
        lname: element.lname, 
        home: 'Home: ' + element.home,
        coin: 9999,
        originalArray: originalArray
    }
})
console.log(newStudents);

// chú ý array có thể thay đổi length như vd đưới đây 
// trong đo 3 phần tử có thật và 7 phần tử empty trống
// khi duyệt mảng với for thì sẽ chạy không chính xác vì length tính cả empty
// để khắc phục ta có theer dùng for in 

var courses = [
    'javascript',
    'phython',
    'java'
];

courses.length = 10;
console.log(courses.length);
console.log(courses);
console.log('vd sử dụng for sẽ lặp qua cả phần tử empty');
for (let index = 0; index < courses.length; index++) {
    console.log(courses[index]);
}
console.log('sử dụng for in sẽ bỏ qua không lặp phần tử empty');
for (const index in courses) {
    console.log(courses[index]);
}