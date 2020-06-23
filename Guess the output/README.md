Exercise 3: Guess the output

In this exercise you'll be presented with a code snippet. Your task is to guess the output and write out your reasoning in 50 words or less.

// Snippet
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();