// cover JSON to Obj Js
var json = '{"firstName":"John", "lastName":"Doe"}'
console.log(JSON.parse(json))

var person = {
    firstName: 'Do',
    lastName: 'Cong Son',
    age: 20
}
console.log(JSON.stringify(person))