function Fun() {
	this.say = () => {
		console.log('this.say')
	}
}

Fun.prototype.say = function () {
	console.log('prototype.say')
}

Fun.say = () => {
	console.log('Fun.say')
}

let funObj = new Fun()
funObj.say()
Fun.say()
