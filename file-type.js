const readChunk = require('read-chunk')
const fileType = require('file-type')

const filePath = './images/timg' // TODO: define your file path
const buffer = readChunk.sync(filePath, 0, fileType.minimumBytes)
console.log(fileType(buffer))
