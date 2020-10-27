function new1(func) {
    let target = {};
    target.__proto__ = func.prototype;
    let res = func.call(target);
    if (typeof (res) == "object" || typeof (res) == "function") {
        return res;
    }
    return target;
}