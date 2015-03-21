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
    compareProperties(valueOne, valueTwo, propOne);
  }

  if(Object.keys(valueOne).length == collector.length) {
    return true;
  } else {
    return false
  }


  function compareProperties(valueOne, valueTwo, propOne)  {
    for(var propTwo in valueTwo) {
      if(propOne == propTwo && valueOne[propOne] == valueTwo[propTwo]) {
        collector.push('not an important value');
      } else if(typeof(valueOne[propOne]) == "object" && typeof(valueTwo[propTwo]) == "object") {
        if (deepComparisonOfObjects(valueOne[propOne], valueTwo[propTwo])) {
          collector.push('not an important value');
        }
      }
    }
  }
}



var obj = {here: {is: "an"}, object: 2};
var obj2 = {here: {is: "an"}, object: obj};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj2, {here: {is: "an"}, object: obj}));
// → true
console.log(deepEqual(obj2, {here: {is: "an"}, object: obj, a: 2}));
// → false
