var btn = document.querySelector('button');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
function add(num1, num2) {
    return num1 + num2;
}
btn.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value));
});
