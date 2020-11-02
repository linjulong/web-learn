var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar();

var scope = "global scope";

function checkscope() {
    var scope = "local scope";

    function f() {
        return scope;
    }
    return f();
}
console.log(checkscope());