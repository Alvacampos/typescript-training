const btn = document.querySelector('button') as HTMLButtonElement;
const input1 = document.getElementById('input1') as HTMLInputElement;
const input2 = document.getElementById('input2') as HTMLInputElement;

function add(num1: number, num2: number): number {
  return num1 + num2;
}

btn.addEventListener('click', () => {
  console.log(add(+input1.value, +input2.value));
});
