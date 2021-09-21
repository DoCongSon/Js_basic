// ! DOM CSS (style property)
// cách 1 dùng để set từng thuộc tính
document.getElementById('box').style.backgroundColor = 'orange';
document.getElementById('box').innerText = 'Hello'
// cách 2 dùng để set nhiều thuộc tính
Object.assign(document.getElementById('box').style, {
   height: '150px',
   width: '200px',
   fontSize: '50px',
   // color: 'white',
   textAlign: 'center',
   lineHeight: '150px'
})
// ! classList property
// dùng để thêm, sửa, xoá, làm việc với class trong html qua js
// 1. add dùng để thêm class
document.getElementById('box').classList.add('red-text')
// 2. contains đùng để kiểm tra xem class có tồn tại trong element đó không trả về true fales
console.log(document.getElementById('box').classList.contains('red-text'));
console.log(document.getElementById('box').classList.contains('yellow-text'));
// 3. remove dùng để xoá class
document.getElementById('box').classList.remove('red-text')
// 4. toggel dùng để thêm class nếu element chưa có class đó và xoá class đó đi nếu trong element đã có
document.getElementById('box').classList.add('yellow-text')
setInterval(function (params) {
   console.log(document.getElementById('box').classList.toggle('green-text'));
   // đối số thứ 2 là boolean. nếu true thì giống với add, false giống remove, return true, false tương ứng
   // document.getElementById('box').classList.toggle('green-text', <true/false>);
}, 300)

//! DOM events
/**
 ** 1, Thêm sự kiện bằng HTML attribute.
 ** 2, Thêm sự kiện bằng javascript.
 */

// 1, Thêm sự kiện bằng HTML attribute.
// vd: <div id="series" onclick="alert('Bạn vừa click')">Học CSS</div>

/**
 * 2, Thêm sự kiện bằng javascript. 
 * cú pháp chung
 ** element.eventName = function ()
 ** {
 **     //code
 ** }
 * Trong đó:
 * element là các đối tượng HTML (được gọi bằng các phương thức getElement...).
 * eventName là tên các sự kiện như onclick,onmouseover,...
 */
var arr = document.getElementsByTagName('h1')
for (const i in arr) {
   if (arr.hasOwnProperty(i)) {
      arr[i].onclick = function (e) {
         console.log(e.target.textContent)
      }
   }
}