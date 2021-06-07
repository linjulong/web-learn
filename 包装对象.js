let a = 1

Number.prototype.plus = function (num) {
	return this + num
	return this.valueOf() + num
}

Number.prototype.mins = function (num) {
	return this.valueOf() - num
}

// Number.prototype.plus = function (num) {
// 	let number = new Number(this)
// 	number += num
// 	return number
// }

// Number.prototype.mins = function (num) {
// 	let number = new Number(this)
// 	number -= num
// 	return number
// }

console.log(a.plus(2).mins(1))
