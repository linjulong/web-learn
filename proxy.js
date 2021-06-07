let user = {
	name: 'John',
	age: 30,
	_password: '***',
}

user = new Proxy(user, {
	ownKeys(target) {
		return Object.keys(target).filter((key) => !key.startsWith('_'))
	},
})

console.log(user === user)

// // "ownKeys" 过滤掉 _password
// for (let key in user) console.log(key) // name，然后是 age

// 对这些方法同样有效：
console.log(Object.keys(user)) // name,age
console.log(Object.values(user)) // John,30
