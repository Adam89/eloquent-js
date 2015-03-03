var range = function(start, end, step) {
  var list = [];

  if(!step) {
    var incrementor = 1;
  } else {
    var incrementor = step;
  }

  if(incrementor < 0) {
    for(var i = start; i >= end; i = i + incrementor) {
      list.push(i);
    }
  } else {
    for(var i = start; i <= end; i = i + incrementor) {
      list.push(i);
    }
  }

  return list;
}

console.log(range(4, 10));

var sum = function(listOfNumbers) {
  var accumulator = 0;

  for(var i = 0; i < listOfNumbers.length; i++) {
    accumulator += listOfNumbers[i]
  }

  return accumulator
}

console.log(sum(range(1, 10)));

console.log(range(1, 10, 2));

console.log(range(5, 2, -1));

