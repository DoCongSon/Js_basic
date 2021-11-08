/**
 ** 1. pendding 
 *  trạng thái chờ việc thành công hay thất bại - trạng thái rò rĩ bộ nhớ (Memory Leak).
 ** 2. fulfilled
 *  Trạng thái thành công -> Then (Resolve).
 ** 3. rejected
 *  Trạng thái thất bại -> Catch (Reject).
 */

var promise1 = new Promise(function (resolve, reject) {
    // logic
    // resolve sử lý logic thành công sử dung qua .them
    var age = Number(prompt("nhập tuổi của bạn"))
    if (!isNaN(age) && age > 0) {
        resolve(age)
    }
    else reject("bạn vừa nhập không phải là số tuổi!")
    // reject sử lý logic thất bại sử dụng qua .catch
})

promise1
    .then(function (result) {
        console.log(`số tuổi của bạn là ${result}`);
    })
    .catch(function (err) {
        console.log(err);
    })
    .finally(function () {
        console.log("done");
    })
//  --------------------------------------------
// vd: bài toán tìm số nguyên có 3 chữ số abc biết a < 5 nhập từ bàn phím b = a + 2; c = b - 1
var a,b,c
var promise2 = new Promise(function (resolve, reject) {
    a = Number(prompt("nhập a:"))
    if (a > 0 && a < 5 && Number.isInteger(a)) {
        resolve(a)
    }
    else reject("có lỗi")
})
promise2
    .then(function (result) {
        b = result + 2
        return b
    })
    .then(function (result) {
        c = result - 1
        console.log(`${a}${b}${c}`)
    })
    .catch (function (err) {
        console.error(err)
    })
    .finally(function () {
        console.log("done")
    })
//  --------------------------------------------
// lần lượt in 3 số 1 2 3 mỗi lần cách nhau 1s

function delay(ms) {
    return new Promise (function (resolve) {
        setTimeout(resolve, ms);
    })
}

delay(1000)
    .then(function () {
        console.log("1");
        return delay(1000)
    })
    .then(function () {
        console.log("2");
        return delay(1000)
    })
    .then(function () {
        console.log("3");
        return Promise.reject("dừng")
    })
    .then(function () {
        console.log("4");
        return delay(1000)
    })
    .then(function () {
        console.log("5");
        return delay(1000)
    })
    .catch (function (err) {
        console.log(err)
    })

//  --------------------------------------------
// Promise.resolve()
// Promise.reject()
// Promise.all()

// vd 1
var promiseDay = new Promise(function (resolve, reject) {
    var day = Number(prompt("nhập ngày:"))
    if (!isNaN(day) && day > 0 && day <= 31) {
        resolve(day)
    }
    else reject("nhập sai ngày!")
})
var promiseMonth = new Promise(function (resolve, reject) {
    var month = Number(prompt("nhập tháng:"))
    if (!isNaN(month) && month > 0 && month <= 12) {
        resolve(month)
    }
    else reject("nhập sai tháng!")
})
var promiseYear = new Promise(function (resolve, reject) {
    var year = Number(prompt("nhập năm:"))
    if (!isNaN(year) && year > 0 && year <= 2021) {
        resolve(year)
    }
    else reject("nhập sai năm!")
})

Promise.all([promiseDay, promiseMonth, promiseYear])
    .then (function ([resultDay, resultMonth, resultYear]) {
        console.log(`${resultDay}-${resultMonth}-${resultYear}`)
    })
    .catch(function (err) {
        console.error(err)
    })
    .finally(function () {
        console.log("done");
    })

// vd 2 dưới đây firstName và lastNane ko liên quan nhâu nên chạy song song
// sau 2s firstName chạy xong
// sau 4s lastNane chạy xong
// 2 hàm chạy song song nên 4s cả 2 chay xong và in ra fullName
var firstName = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Đỗ")
    }, 2000)
})
var lastNane = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Công Sơn")
    }, 4000)
})
Promise.all([firstName, lastNane])
    .then(function ([fname, lname]) {
        console.log(`${fname} ${lname}`)
    })
