// * Event Handlers trong js

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
    console.log(e)
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
x.addEventListener('click', function (e) {
    e.preventDefault();
})
var searchElement = document.querySelector('input[type="search"]')
var searchUl = document.querySelector("ul")
// ngăn chặn hành vi măc định của trình duyệt khi click xuống UL thì mất focus vào thẻ input
searchUl.onmousedown = function (e) {
    e.preventDefault();
}
searchUl.onclick = function (e) {
    var nameSearch = e.target.textContent;
    console.log(nameSearch);
    searchElement.placeholder = nameSearch
}

// stopPropagation đùng để loại bỏ sự kiện nổi bọt
// vd dưới đây khi click vao box_cha thì sẽ nổi bọt ra box_ong_noi nên sẽ hirnj thị cả 2 dòng
// nhưng ở box_con có e.stopPropagation(); đã ngăn chặn hành vi nổi bọt nên sẽ chỉ hiện mình box_con mà ko hiện box_cha và box_ong_noi
var box_cha = document.querySelector('.box-cha');
var box_con = document.querySelector('.box-con');
var box_ong = document.querySelector('.box-ong-noi');
box_ong.onclick = function (e) {
    console.log('đang click vào box ong noi')
}
box_cha.onclick = function (e) {
    console.log('đang click vào box cha')
}
box_con.onclick = function (e) {
    console.log('đang click vào box-con')
    e.stopPropagation();
}

// * AddEventListener trong js tương tự Event Handlers trong js
// uy nó giống nhau nhưng có một sự khác biệt nhưng nó rất quan trọng. 
// + Đó là nếu bạn sử dụng EventHandler để kích hoạt sự kiện thì nếu bạn 
//   kích hoạt hai lần thì lần thứ hai sẽ đè lên lần thứ nhất
var button1 = document.querySelector(".btn-1");
button1.onclick = () => {
    console.log("Hello anonystick!");
};
button1.onclick = () => {
    console.log("How are you?");
};
// + trong khi đó AddEventListener trong js có thể là đa kích hoạt, mỗi thằng làm một nhiệm vụ.
var button2 = document.querySelector(".btn-2");
button2.addEventListener("click", event => {
    console.log("Hello anonystick!");
})
button2.addEventListener("click", event => {
    console.log("How are you?");
})