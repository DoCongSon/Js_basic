
// reduce2
var number = [1,23,4,5,64,64,64]
number.length = 1000

Array.prototype.reduce2 = function(callback, result) {
    var i = 0
    if(arguments.length < 2) {
        result = this[0]
        i = 1
    } 
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }
    return result;
}

console.log(number.reduce2(((sum , i) =>{return sum + i}), ))
console.log(number.reduce(((sum , i) =>{return sum + i}), ))

// --------------------------------------------------------
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
students.length = 1000;
// forEach2
Array.prototype.forEach2 = function(callback) {
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index);
        }
    }
}

students.forEach2(function (element, index) {
    console.log(index,element)
})

// every2
Array.prototype.every2 = function(callback) {
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            if(!callback(this[index])) return false;
        }
    }
    return true
}
var isHome = students.every2(function (student) {
    return student.home === 'myhome'
})
var isFname = students.every2(function (student) {
    return student.fname === 'Đỗ'
})
console.log(isHome)
console.log(isFname)

// some
Array.prototype.some2 = function (callback) {
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index])) return true;
        }
    }
    return false;
}
var isAge = students.some2(function (student) {
    return student.age === 20
})
console.log(isAge);
var isAge = students.some2(function (student) {
    return student.age === 21   
})
console.log(isAge);

//find2
Array.prototype.find2 = function (callback) {
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index])) {
                return this[index];
            }
        }
    }
}

var son = students.find2(function (student) {
    return student.lname === "Công Sơn"
})
console.log(son);

//  filter2
Array.prototype.filter2 = function (callback) {
    var result = [];
    for (const index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index])) {
                result.push(this[index])
            }
        }
    }
    return result;
}

var sons = students.filter2(function (student) {
    return student.lname === "Công Sơn"
})
console.log(sons);


// map2

Array.prototype.map2 = function (callback) {
    var result = [];
    for (const index in this) {
        if (this.hasOwnProperty( index)) {
            result.push(callback(this[index], index, this)) 
        }
    }
    return result;
}

var arrLastName = students.map2((element, index, originalArray) => {
    return element.lname
})
console.log(arrLastName);

var newStudents = students.map2((element, index, originalArray) => {
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