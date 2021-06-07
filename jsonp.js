function jsonp({ url, onData, params }) {
	const script = document.createElement('script')

	// 一、为了避免全局污染，使用一个随机函数名
	const cbFnName = `JSONP_PADDING_${Math.random().toString().slice(2)}`
	// 二、默认 callback 函数为 cbFnName
	script.src = `${url}?${stringify({ callback: cbFnName, ...params })}`
	// 三、使用 onData 作为 cbFnName 回调函数，接收数据
	window[cbFnName] = onData

	document.body.appendChild(script)
}

const http = require('http')
const url = require('url')
const qs = require('querystring')

const server = http.createServer((req, res) => {
	const { pathname, query } = url.parse(req.url)
	const params = qs.parse(query)

	const data = { name: 'shanyue', id: params.id }

	if (params.callback) {
		str = `${params.callback}(${JSON.stringify(data)})`
		res.end(str)
	} else {
		res.end()
	}
})

server.listen(10010, () => console.log('Done'))

jsonp({
	url: 'http://localhost:10010',
	params: { id: 10000 },
	onData(data) {
		console.log('Data:', data)
	},
})
