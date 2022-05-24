"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'Gonzalo', hobbies: ['gaming'] }, { age: 32 });
console.log(mergeObj.name);
function countAndDescribe(element) {
    let descriptionTxt = 'Got no value.';
    if (element.length === 1)
        descriptionTxt = 'Got 1 element.';
    else if (element.length > 1) {
        descriptionTxt = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionTxt];
}
console.log(countAndDescribe('Hi there!'));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'asd' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Gonzalo');
textStorage.addItem('Ramiro');
textStorage.removeItem('Ramiro');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(32);
numberStorage.addItem(123);
numberStorage.removeItem(123);
console.log(numberStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['gonzalo', 'ramiro'];
//# sourceMappingURL=app.js.map