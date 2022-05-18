const btn = document.querySelector('button') as HTMLButtonElement;
const input1 = document.getElementById('input1') as HTMLInputElement;
const input2 = document.getElementById('input2') as HTMLInputElement;

type Combinable = number | string;

type ConversionDescriptor = 'as-number' | 'as-string';

function combine(
  value1: Combinable,
  value2: Combinable,
  resultType: ConversionDescriptor
) {
  if (
    (typeof value1 === 'number' && typeof value2 === 'number') ||
    resultType === 'as-number'
  )
    return +value1 + +value2;
  else return value1.toString() + value2.toString();
}
console.log(combine(12, 5, 'as-number'));

console.log(combine('12', '5', 'as-string'));

console.log(combine(+input1.value, +input2.value, 'as-string'));

// btn.addEventListener('click', () => {
//   console.log(combine(input1.value, input2.value));
// });
