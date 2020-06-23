Exercise 4: Guess more

In this exercise you'll be presented with another code snippet. Guess the output and write out your reasoning in 50 words or less.

// Snippet
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);