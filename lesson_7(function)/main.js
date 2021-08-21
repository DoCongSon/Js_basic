/**
 * * function
 * ?1. định nghĩa hàm
 *  - Decalration function
 *  - Expression function
 *  - Arrow fucntion
 * ?2. truyền tham số
 * ?3. arguments
 * 
 */


// dịnh nghĩa hàm kiểu
// a, arr dược gọi là tham số
// Declaration function có thể gọi trước khi định nghĩa functioon
console.log(checkExistIdol(['a', 'b', 'x'], 'x'));

function checkExistIdol(arr, a) {
    for (let index = 0; index < arr.length; index++) {
        if (a == arr[index]) {
            return true
        }
    }
    return false
}
console.log(typeof checkExistIdol);
// Expression
// Expression có thể dặt tên cho function hoặc không

var showMessage = function(message) {
    console.log(message)
}
showMessage("Đỗ Công Sơn")

setTimeout(function autoLogin() {
    
})
var myObject = {
    myFunction: function () {
        
    }
}

// arguments
// arguments giống như 1 mảng phần tử trong mảng là cấc đôi số được truyền vào
function writelog() {
    for (var element of arguments) {
        console.log(element);
    }
    var str = ''
    for (const element of arguments) {
        str += `${element} `
    }
    console.log(str);
}
writelog('hello', 'son', 1, 23.32, function test() { console.log('hello');})

