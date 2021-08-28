
// reduce2
var number = [1,23,4,5,64,64,64]

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

// forEach2
Array.prototype.forEach2 = function(callback) {
    for (var i = 0; i < this.length; i++) {
        callback(this[i], i)
    }
}

students.forEach2(function (element, index) {
    console.log(index,element)
})

// every2
Array.prototype.every2 = function(callback) {
    for (var i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false
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
    for(var i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true;
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
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) return this[i];
    }
}

var son = students.find2(function (student) {
    return student.lname === "Công Sơn"
})
console.log(son);

//  filter2
Array.prototype.filter2 = function (callback) {
    var result = [];
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i])) result.push(this[i]);
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
    for (var i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this[i]))
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