"use strict";
const e1 = {
    name: 'Gonzalo',
    privileges: ['create-server'],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name ' + emp.name);
    if ('privileges' in emp)
        console.log('Privileges: ' + emp.privileges);
    if ('startDate' in emp)
        console.log('Privileges: ' + emp.startDate);
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
    loadCargo(amount) {
        console.log('Loading cargo ...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck)
        vehicle.loadCargo(1000);
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
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
const userInputEle = document.getElementById('inputElem');
userInputEle.value = 'No one expects the spanish inquisition!';
const errorBag = {
    email: 'test@mail.com',
    username: 'SUPERUSER5000',
};
const asd = null;
console.log(asd !== null && asd !== void 0 ? asd : 'NULLISH');
//# sourceMappingURL=app.js.map