// Snippet
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();