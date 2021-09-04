// * 1 change, input
// ! change
// Sự kiện xảy ra khi nội dung của phần tử biểu mẫu,
// vùng chọn hoặc trạng thái được kiểm tra đã thay đổi 
// (đối với <input>, <select> và <textareosystem)
// ! input
// Sự kiện xảy ra khi một phần tử được người dùng nhập vào
var text = ''
var ischecked = false
var inputElement = document.querySelector("input[type='text']")
inputElement.oninput = function (e) {
    text = e.target.value;
}
var checkboxElement = document.querySelector("input[type='checkbox']")
checkboxElement.oninput = function (e) {
    ischecked = e.target.checked
}
var selectElement = document.querySelector("select")
selectElement.oninput = function (e) {
    console.log(e.target.value);  
} 
var button = document.querySelector("button")
button.onclick = function (e) {
    if (ischecked) {
        if (text === '') {
            alert('vui lòng nhập họ và tên cảu bạn')
        } else {
            alert("Đăng nhập thành công")
            alert(`xin chào ${text}`)
        }
    }
    else {
        alert("vui lòng tích vào ô đòng ý với điều khoản")
        alert('Đăng nhập thất bại')
    }
}

//* 2, preventDefault and stopprapagation method
// preventdefault dùng để bỏ sự kiện mặc định của thẻ
// vd loại bỏ sự kiện khi click vào thẻ a co url https://www.youtube.com/ 

var x = document.querySelector('a[href="https://www.youtube.com/"]')
x.onclick = function (e) {
    e.preventDefault();
}
// stopprapagation đùng để loại bỏ sự kiện nổi bọt