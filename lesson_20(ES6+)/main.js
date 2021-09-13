var array1 = ['html-css', 'javascript']

function boldStyle(...params) {
    var [[first, ...rest], ...values] = params;
    return rest.reduce((str, val) => [...str, `<b>${values.shift()}</b>`, val],[first]).join('');
}

var html = boldStyle`Học ${array1[0]} và ${array1[1]} để trở thành Frontend developer`;
document.getElementById('text').innerHTML = html;   