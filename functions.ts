function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log.apply('Result: ' + num);
}

// Callback fn
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

// Function type, use for specifying the type of a function
let combineValues: (n1: number, n2: number) => number;

combineValues = add;
// combineValues = 5

console.log(combineValues(2, 3));
addAndHandle(10, 20, (result) => {
  console.log('Result from addAndHandle is: ' + result);
});
