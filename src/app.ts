interface Named {
  readonly name?: string;
  outputName?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn = (n1, n2) => n1 + n2;

// interface vs type

// type Person2 = {
//   readonly name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// type AddFn = (a: number, b: number) => number;

// interface implemented in class
class Person implements Greetable {
  name?: string;
  age = 32;

  constructor(name?: string) {
    if (name) this.name = name;
  }

  greet(phrase: string) {
    if (this.name) console.log(phrase + ' ' + this.name);
    else console.log('hi');
  }
}

// const person1: Greetable = {
//   name: 'Gonzalo',
//   age: 32,
//   greet(phrase) {
//     console.log(phrase + ' ' + this.name);
//   },
// };

// person1.greet('Hi I am');

const person1: Greetable = new Person();
person1.greet('Hi my name is');
console.log(person1);
