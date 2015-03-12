var reverseArray = function(array) {
  var reversedArray = [];

  for(var i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }

  return reversedArray;
}

console.log(reverseArray([1,2,3,4,5]));

var reverseArrayInPlace = function(array) {
  if(array.length % 2 === 0) {
    var num = array.length / 2;
  } else {
    var num = (array.length - 1) / 2;
  }

  for(var i = 0; i < num; i++) {
    var first = array[(array.length - 1) - i];
    var last = array[i];
    array[(array.length - 1) - i] =  last
    array[i] = first;
  }

  return array;
}

console.log(reverseArrayInPlace([1,2,3,4,5]));
