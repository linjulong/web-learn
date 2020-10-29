function Person(name) {
    this.name = name;
    this.say = function() {
        console.log(this.name)
    }
}

Person.prototype.age = 23;

var penson1 = new Person('林钜隆');
penson1.say();