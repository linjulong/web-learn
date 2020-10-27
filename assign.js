let obj1 = { a: 1 };
let obj2 = { b: 2 };
let obj3 = { c: 3 };


//深拷贝
// console.log(Object.assign({},obj1, obj2, obj3))
// console.log(obj1)

//浅拷贝
let newObj = Object.assign(obj1, obj2, obj3);
newObj.a = 111;
console.log(obj1)
