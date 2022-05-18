function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log.apply('Result: ' + num);
}
// Callback fn
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
var combineValues;
combineValues = add;
// combineValues = 5
console.log(combineValues(2, 3));
addAndHandle(10, 20, function (result) {
    console.log('Result from addAndHandle is: ' + result);
});
