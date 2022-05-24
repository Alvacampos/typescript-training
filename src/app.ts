// const arr: Array<string | number> = [1, 2, 'asd'];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('this is resolve');
//   }, 1000);
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: 'Gonzalo', hobbies: ['gaming'] }, { age: 32 });
console.log(mergeObj.name);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionTxt = 'Got no value.';
  if (element.length === 1) descriptionTxt = 'Got 1 element.';
  else if (element.length > 1) {
    descriptionTxt = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionTxt];
}

console.log(countAndDescribe('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'asd' }, 'name');

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Gonzalo');
textStorage.addItem('Ramiro');
textStorage.removeItem('Ramiro');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(32);
numberStorage.addItem(123);
numberStorage.removeItem(123);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'Gonzalo' });
// objStorage.addItem({ lastName: 'Alvarez Campos' });
// objStorage.removeItem({ lastName: 'Alvarez Campos' });
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string>[] = ['gonzalo', 'ramiro'];
// name.push('alvarez')
