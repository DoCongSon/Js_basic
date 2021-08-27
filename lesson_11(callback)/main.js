
// reduce2
var number = [1,23,4,5,64,64,64]

Array.prototype.reduce2 = function(callback, result) {
    var i = 0
    if(arguments.length < 2) {
        result = this[0]
        i = 1
    } 
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }
    return result;
}

console.log(number.reduce2(((sum , i) =>{return sum + i}), ))
console.log(number.reduce(((sum , i) =>{return sum + i}), ))

// --------------------------------------------------------