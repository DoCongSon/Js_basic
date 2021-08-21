/**
 * * function
 * 1. định nghĩa hàm
 * 2. truyền tham số
 * 3. arguments
 * 
 */


// dịnh nghĩa hàm kiểu
// a, arr dược gọi là tham số

function checkExistIdol(arr, a) {
    for (let index = 0; index < arr.length; index++) {
        if (a == arr[index]) {
            return true
        }
    }
    return false
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

