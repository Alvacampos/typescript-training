// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Gonzalo',
//   age: 32,
//   hobbies: ['gaming', 'programming'],
//   role: [2, 'author']
// };

// enum Role {
//   ADMIN,
//   READ_ONLY,
// }

// const person = {
//   name: 'Gonzalo',
//   age: 32,
//   hobbies: ['gaming', 'programming'],
//   role: Role.ADMIN,
// };
// // person.role.push('admin');
// // person.role[1] = 10;

// let favoriteActivities: string[];
// favoriteActivities = ['Test'];

// console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }

// if (person.role === Role.ADMIN) {
//   console.log('is read only');
// }

// // tsc --watch file.ext
// // tsc --init generates a tsconfig file with rules for the compiler

// Command: opt + shift + f = format

// // Crash Course: https://www.youtube.com/watch?v=BCg4U1FzODs
// // Crash Course: https://www.youtube.com/watch?v=BwuLxPH8IDs&t=11s

// // Basic types

// const num: number = 1; // you can specify de type and you must respect that type in future variable assignations

// const abc: string = 'hi';

// const bool: boolean = true;

// const x: any = 'TEST'; // any is a jack of all trades, it will implicitly detect the type on the first assignation and enforce that.

// // Array

// const numArr: number[] = [1, 2, 3];

// const arr: any[] = [1, true, 'test'];

// // Tuple, a new data type, can contain two values of different data types. The number of elements of the array is fixed.
// // The type of elements if known, the type of the elements of the array need not be the same.

// const person: [number, string, boolean] = [1, 'asd', false];

// // Tuple Array

// let employee: [number, string][];

// employee = [
//   [1, 'qwe'],
//   [2, 'asd'],
// ];

// // Union

// let pid: string | number;

// pid = 2;

// pid = 'dfg';

// // Enum are data structures of constant length that hold a set of constant values.

// enum Direction1 {
//   Up,
//   Down,
//   Left,
//   Right,
// }

// console.log(Direction1.Up);

// // Objects

// type User = {
//   id: number;
//   name: string;
// };

// const user: User = {
//   id: 1,
//   name: 'Gonzalo',
// };

// // Type Assertion

// let cid: any = 1;
// // let customerId = <number>cid;
// let customerId = cid as number;

// // Functions

// function addNum(x: number, y: number) {
//   return x + y;
// }

// console.log(addNum(1, 2));

// function log(msg: number | string): void {
//   console.log(msg);
// }

// log('asd');
// log(123);

// // Interfaces

// interface UserInterface {
//   readonly id: number;
//   name: string;
//   optional?: string; // ? allow us to have optional values in an interface and not in the obj.
// }

// const user1: UserInterface = {
//   id: 1,
//   name: 'Gonzalo',
// };

// // Custom type

// type Test = {
//   a: number;
//   b: string;
// };

// const newTest: Test = {
//   a: 1,
//   b: 'asd',
// };

// // Interfaces with functions

// interface MathFunc {
//   (x: number, y: number): number;
// }

// const add: MathFunc = (x, y) => x + y;

// // add('asd', 3)

// // Classes
// interface People {
//   id: number;
//   name: string;
//   greetings(): void;
// }

// class Person implements People {
//   id: number;
//   name: string;

//   constructor(id: number, name: string) {
//     (this.id = id), (this.name = name);
//   }

//   greetings() {
//     console.log(`Hi my name is ${this.name}`);
//   }
// }

// const person1 = new Person(1, 'Gonzalo');

// console.log(person1);
// person1.greetings();

// // Subclasses
// class Employees extends Person {
//   position: string;
//   constructor(id: number, name: string, position: string) {
//     super(id, name);
//     this.id = id;
//     this.name = name;
//     this.position = position;
//   }
// }

// const employee1 = new Employees(2, 'Gonzalo Ramiro', 'Dev');

// console.log(employee1);
