var btn = document.querySelector('button');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
function combine(value1, value2) {
    if (typeof value1 === 'number' && typeof value2 === 'number')
        return value1 + value2;
    else
        return value1.toString() + value2.toString();
}
console.log(combine(12, 5));
console.log(combine(+input1.value, +input2.value));
// btn.addEventListener('click', () => {
//   console.log(combine(input1.value, input2.value));
// });
