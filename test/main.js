console.log('Bài 1:');
var formValues = [
    { field: 'name', value: 'Sơn Đặng' },
    { field: 'age', value: 18 },
    { field: 'address', value: 'Hà Nội' },
]
function getRequestBodyFromValues(formValues) {
    var kq = {}
    formValues.forEach(function (i) {
        kq[i.field] = i.value
    })
    return kq
}
console.log(getRequestBodyFromValues(formValues));
//---------------------------------------------------------
console.log('Bài 2:');
function checkPositiveNumbers(numbers) {
    return numbers.every(function (number) {
        return number > 0
    })
}
console.log(checkPositiveNumbers([1, 2, 3]));
console.log(checkPositiveNumbers([1, -8, 3]));
// --------------------------------------------------------
console.log('Bài 3');
function findAMonsterByAttack(monsters) {
    var x = monsters.find(function (i) {
        return i.attack === 150;
    })
    return x ? x : null
}
// --------------------------------------------------------
console.log('Bài 4');
function findStringsInArrayByKeyword(keyword, strings) {
    return strings.filter(function (i) {
        return i.indexOf(keyword) != -1;
    })
}
console.log(findStringsInArrayByKeyword("PHP", ['Javascript', 'PHP', 'Học PHP']));
// --------------------------------------------------------
console.log('Bài 5');
// cách 1
function findEqualValues1(arr1, arr2) {
    var arr = []
    for (const i of arr1) {
        if (arr2.some(function (j) {
            return j === i;
            })) arr.push(i)
    }
    return arr
}
console.log(findEqualValues1([1, 2, 6, 8], [2, 9, 6]));
//cách 2
function findEqualValues2(arr1, arr2) {
    return arr1.filter(function (i) {
        return arr2.includes(i)
    })
}
console.log(findEqualValues2([1, 2, 6, 8], [2, 9, 8, 6]));
// -----------------
var elementNode = document.querySelector('div')
console.log([elementNode]);
var textNode1 = elementNode.childNodes[0]
var textNode2 = elementNode.childNodes[2]
var h1Element = elementNode.children[0]
console.log(textNode1);
console.log(textNode2);
console.log(h1Element);