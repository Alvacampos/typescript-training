type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// This is an intersection type
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Gonzalo',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

// This intersection will only take into account the types that are repeated(what is has in common).
type Universal = Combinable & Numeric; // type intersection

// Function overload
function add(a: string, b: string): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  // Type guard strategy
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name ' + emp.name);
  if ('privileges' in emp) console.log('Privileges: ' + emp.privileges);
  if ('startDate' in emp) console.log('Privileges: ' + emp.startDate);
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck; // type union

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) vehicle.loadCargo(1000);
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird'; // literal type
  flyingSpeed: number;
}

interface Horse {
  type: 'horse'; // literal type
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Mooving with speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });
moveAnimal({ type: 'horse', runningSpeed: 10 });

const userInputEle = <HTMLInputElement>document.getElementById('inputElem'); // type casting

userInputEle.value = 'No one expects the spanish inquisition!';

interface ErrorContainer {
  [prop: string]: string; // index prop
}

const errorBag: ErrorContainer = {
  email: 'test@mail.com',
  username: 'SUPERUSER5000',
};

const asd = null;

console.log(asd ?? 'NULLISH');
