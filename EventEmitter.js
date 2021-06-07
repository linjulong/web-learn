/*
 * @Author: linjulong
 * @Date: 2020-10-29 16:39:15
 * @LastEditors: linjulong
 * @LastEditTime: 2020-11-04 17:49:42
 * @Description: https://zhuanlan.zhihu.com/p/77876876?utm_source=wechat_session
 */

function EventEmitter() {
    this.listeners = {};
    this.maxListener = 10;
}

EventEmitter.prototype.on = function (event, cb) {
    var listeners = this.listeners;
    if (listeners[event] && listeners[event].length >= this.maxListener) {
        throw console.error('监听器的最大数量是%d,您已超出限制', this.maxListener)
    }
    if (listeners[event] instanceof Array) {
        if (listeners[event].indexOf(cb) === -1) {
            listeners[event].push(cb);
        }
    } else {
        listeners[event] = [].concat(cb);
    }
}

EventEmitter.prototype.addListener = EventEmitter.prototype.on;

EventEmitter.prototype.emit = function (event) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    this.listeners[event].forEach(cb => {
        cb.apply(null, args);
    });
}

EventEmitter.prototype.removeListener = function (event, listener) {
    var listeners = this.listeners;
    var arr = listeners[event] || [];
    var i = arr.indexOf(listener);
    if (i >= 0) {
        listeners[event].splice(i, 1);
    }
}

EventEmitter.prototype.once = function (event, listener) {
    var self = this;

    function fn() {
        var args = Array.prototype.slice.call(arguments);
        listener.apply(null, args);
        self.removeListener(event, fn);
    }
    this.on(event, fn)
}

EventEmitter.prototype.removeAllListener = function (event) {
    this.listeners[event] = [];
}

EventEmitter.prototype.listeners = function (event) {
    return this.listeners[event];
}

EventEmitter.prototype.setMaxListeners = function (num) {
    this.maxListener = num;
}

let event = new EventEmitter();

event.on('some_event', function (a) {
    console.log(a)
});
event.on('some_event', function (b) {
    console.log(b)
});
setTimeout(function () {
    event.emit('some_event',a=111);
}, 1000);
setTimeout(function () {
    event.emit('some_event',a=222);
}, 1000);