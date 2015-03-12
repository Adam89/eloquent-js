var deepEqual = function(valueOne, valueTwo) {
  if(valueOne === null && valueTwo === null) return true;
  if(valueOne === null || valueTwo === null) return false;

  if(typeof(valueOne) == "object" && typeof(valueTwo) == "object") {
    return deepComparisonOfObjects(valueOne, valueTwo)
  } else {
    return valueOne === valueTwo;
  }
}

var deepComparisonOfObjects = function(valueOne, valueTwo) {
  var collector = [];

  if(Object.keys(valueOne).length != Object.keys(valueTwo).length) {
    return false;
  }

  for(var propOne in valueOne) {
    closure(valueOne, valueTwo, propOne);
  }

  if(Object.keys(valueOne).length == collector.length) {
    return true;
  }

  function closure(valueOne, valueTwo, propOne)  {
    for(var propTwo in valueTwo) {
      if(propOne == propTwo && valueOne[propOne] == valueTwo[propTwo]) collector.push('not an important value');
    }
  }
}



var listO = {a: 2, list: 1}
var listB = {list: 1, a: 2}
var ar = [1,2,3]
var ab = [1,2,3]

console.log(deepEqual(listO, listB));
console.log(deepEqual(ar, ab));
