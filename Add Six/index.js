function createBase(baseNumber) {
    return function(N) {
      return baseNumber + N;
    }
  }
  
  var addSix = createBase(6);
  addSix(9);
  addSix(18);
  addSix(27);