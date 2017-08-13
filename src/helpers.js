export function randomlyGenerateArray(size, maxNumber, sorted=true) {
  var array = [];
  while (array.length < size) {
    var newNumber = Math.floor((Math.random() * maxNumber) + 1);
    if (array.length === 0 || array.indexOf(newNumber) === -1) {
      array.push(newNumber);
    }
  }

  return sorted ? array.sort(function(a,b){return a - b}) : array;
}
