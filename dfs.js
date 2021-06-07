/*
 * 递归的处理逻辑，把处理路径传给递归处理函数
 * 如果这个路径类型是文件夹，那么创建children字段，并把目录push到children
 * 例如第一次生成的result => [{name: 9}]
 * 第二次遍历的目录5，要把上一次的name: 9 变成name: 5的 children 的一项
 * 做到处理每一个节点的关键是，我们每次递归都要把子目录的dir作为参数传下去
 */
const fs = require('fs');
const path = require('path');
function dfs(dir) {
	const result = []

	if (fs.statSync(dir).isDirectory()) {
		const dirs = fs.readdirSync(path.resolve(__dirname, dir))

		dirs.forEach((filename) => {
			const curFilePath = dir + path.sep + filename
			if (fs.statSync(curFilePath).isDirectory()) {
				const block = { name: filename, children: [] }
				block.children.push(...dfs(curFilePath))
				result.push(block)
			} else {
				result.push({ name: filename })
			}
		})
	}

	return result
}

console.log(dfs('1'))
