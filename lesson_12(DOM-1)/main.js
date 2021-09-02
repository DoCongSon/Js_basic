var heading1 = document.querySelector("h1")
var heading2 = document.querySelector("h2")
console.log(heading1)
console.log(heading2)
// add attributes (setter)
// vd add id, title vào thẻ h1
heading1.title = "title-heading"
heading1.id = 'id-heading'
// riêng class thêm bằng từ khoá className
heading1.className = 'class-heading'

// set attributes bất kì
heading2.setAttribute('class', 'class-heading-2')
heading2.setAttribute('id', 'id-heading-2')
heading2.setAttribute('href', '#')
heading2.setAttribute('attributes_bat_ki', 'attributes_bat_ki')

// truy suất attributes
// đối vơi các attributes hợp lệ có thể truy suất trực tiếp như sau
console.log(heading2.id);
console.log(heading2.className);
// đối với các attributes tự định nghĩa truy suất qua getAttribute
console.log(heading2.getAttribute('href'))
console.log(heading2.getAttribute('attributes_bat_ki'))
// cũng có thể truy suất attributes hợp lệ bằng cách này
console.log(heading1.getAttribute('class'))
console.log(heading1.getAttribute('title'))

/**
 * inertext, textconten, innerHTML, outerHTML
 */
// get text
// inertext dung dẻ lấy ra text có trong element node (thứ mà mình nhìn đc tức là nếu display = none sẽ không hiện)
console.log('------------------------------------------vd về innerText-----------------------------')
console.log(document.querySelector('h1').innerText)
console.log(document.querySelector('h2').innerText)
// textconten dùng dẻ lấy ra toàn bộ text có trong element node đó chỉ bỏ thẻ tag
console.log('------------------------------------------vd về textConten-----------------------------')
console.log(document.querySelector('h1').textContent)
console.log(document.querySelector('h2').textContent)

// innerHTML lấy ra mã html trong element (all text trong element node đó kẻ cả thẻ tag) 
console.log('------------------------------------------vd về innerHTML-----------------------------')
console.log(document.querySelector('h1').innerHTML)

// outerHTML lấy ra mã html của element tức là cả toàn bộ element đó (all text của element node đó kẻ cả thẻ tag) 
console.log('------------------------------------------vd về outerHTML-----------------------------')
console.log(document.querySelector('h1').outerHTML)

// set text 

// innerHTML dùng để set html cho element node 
document.querySelector('.text1').innerHTML = `
    <i>text in nghiêng</i>
    abcd

`

// outerHTML dùng để ghi đề html của element đó (sau khi dùng câu lênh element cũ sẽ mất thay bằng element mới)

document.querySelector('.text4').outerHTML = '<div class="new-element"> new element </div>'

//innerText set text giống hệt những gì gi vào (ko tính đâu space và tab) xuống dòng sẽ tụe động thêm thẻ <br>
document.querySelector('.text2').innerText = `

    <i>text in nghiêng</i>
    
    a

`

// textContent chỉ set text không set khoảng trắng và đấu cách đầu và cuối 
document.querySelector('.text3').textContent = `

<i>text in nghiêng</i>

a
`
// kết quả: <i>text in nghiêng</i> a
