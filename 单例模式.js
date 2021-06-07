class Singleton {
    constructor() { }
}

Singleton.getInstance = (function () {
    let instance
    return function () {
        if (!instance) {
            instance = new Singleton()
        }
        return instance
    }
})()

let s1 = Singleton.getInstance()
let s2 = Singleton.getInstance()
console.log(s1 === s2) // true

let a = 2016;
let flag = true;
while (flag) {
    a++;
    if ((a % 6 === 0 && a % 8 === 0) && a % 9 === 0) {
        flag = false;
    }
}

console.log(a)