"use strict";
let add = (n1, n2) => n1 + n2;
class Person {
    constructor(name) {
        this.age = 32;
        if (name)
            this.name = name;
    }
    greet(phrase) {
        if (this.name)
            console.log(phrase + ' ' + this.name);
        else
            console.log('hi');
    }
}
const person1 = new Person();
person1.greet('Hi my name is');
console.log(person1);
//# sourceMappingURL=app.js.map