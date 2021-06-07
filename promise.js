// let p = new Promise(funcion(resolve, reject) {
//     reject('失败啦');
//     resolve('成功啦');
// });

// p.then(function(value) {
//     console.log(value);
// })

function Promise(executor) {
	var self = this

	self.status = 'pending'
	self.value
	self.reason
	self.onResolvedCallbacks = [] // 存放所有成功的回调。
	self.onRejectedCallbacks = [] // 存放所有失败的回调。

	function resolve(value) {
		if (self.status === 'pending') {
			self.status = 'resolved'
			self.value = value
			self.onResolvedCallbacks.forEach(function (fn) {
				fn()
			})
		}
	}

	function reject(reason) {
		if (self.status === 'pending') {
			self.status = 'rejected'
			self.reason = reason
			self.onRejectedCallbacks.forEach(function (fn) {
				fn()
			})
		}
    }
    
	executor(resolve, reject)
}

//成功执行onFulfilled 失败执行onRejected
Promise.prototype.then = function (onFulfilled, onRejected) {
	var self = this
	if (self.status === 'resolved') {
		onFulfilled(self.value)
	}

	if (self.status === 'rejected') {
		onRejected(self.reason)
	}
	if (self.status === 'pending') {
		//因为onFulfilled和onRejected在执行的时候需要传入对应的value值，所我们这里用一个函数包裹起来，将对应的值也传入进去。
		self.onResolvedCallbacks.push(function () {
			onFulfilled(self.value)
		})
		self.onRejectedCallbacks.push(function () {
			onRejected(self.reason)
		})
	}
}
