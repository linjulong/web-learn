let arr = [1, [[2], [3, [4]], 5]];

const flattenDeep = (arr) => Array.isArray(arr)
    ? arr.reduce((a, b) => [...a, ...flattenDeep(b)], [])
    : [arr]

//console.log(flattenDeep(arr))


//console.log(arr.flat(Infinity));

//console.log([1,2,3,4,5].slice(1))

//tostring会自动忽略掉[]
console.log(arr.toString().split(","))


