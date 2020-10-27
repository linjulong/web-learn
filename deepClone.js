function deepClone(source) {
    //如果是基本数据类型直接返回
    if (!(typeof source === 'object' && source !== null)) {
        return source;
    }

    const target = Array.isArray(source) ? [] : {};

    for (let key in source) {
        if (source[key].hasOwnProperty(key)) {
            if (typeof source[key] === 'object' && source !== null) {
                target[key] = deepClone(source[key])
            } else {
                target[key] = source[key];
            }
        }
    }

    return target;
}

const temp = [{
    a: 1,
    b: 2
}]

console.log(deepClone(temp) === deepClone(temp))