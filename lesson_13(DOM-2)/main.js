// DOM CSS
// cách 1 dùng để set từng thuộc tính
document.getElementById('box').style.backgroundColor = 'orange';
document.getElementById('box').innerText = 'Hello'
// cách 2 dùng để set nhiều thuộc tính
Object.assign(document.getElementById('box').style, {
   height: '150px',
   width: '200px',
   fontSize: '50px',
   color: 'white',
   textAlign: 'center',
   lineHeight: '150px'
})
