/**
 ** 1. pendding 
 *  trạng thái chờ việc thành công hay thất bại - trạng thái rò rĩ bộ nhớ (Memory Leak).
 ** 2. fulfilled
 *  Trạng thái thành công -> Then (Resolve).
 ** 3. rejected
 *  Trạng thái thất bại -> Catch (Reject).
 */

var promise = new Promise(function (resolve, reject) {
    // logic
    // resolve sử lý logic thành công sử dung qua .them
    var age = Number(prompt("nhập tuổi của bạn"))
    if (!isNaN(age) && age > 0) {
        resolve(age)
    }
    else reject("bạn vừa nhập không phải là số tuổi!")
    // reject sử lý logic thất bại sử dụng qua .catch
})

promise
    .then(function (result) {
        console.log(`số tuổi của bạn là ${result}`);
    })
    .catch(function (err) {
        console.log(err);
    })
    .finally(function () {
        console.log("done");
    })

