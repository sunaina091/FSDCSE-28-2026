// console.log("hello");

function sum(a, b) {
  return a + b;
}
console.log(sum(20, 30));
function sqr(a, b) {
  return Math.sqrt(a) + Math.sqrt(b);
}
console.log(sqr(16, 25));

var a = 34; //jha tk define h vhi tk work
if (a > 20) {
  var a = 45;
  console.log("a inside" + a);
}
console.log("a outside" + a);

let b = 34;
if (b > 20) {
  let b = 45;
  console.log("a inside" + b);
}
console.log("a outside" + b);
